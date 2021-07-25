
import { useState, createContext, useEffect } from 'react';
import firebase from '../services/firebaseConnection';

export const AuthContext = createContext({});

function AuthProvider({children}){
    const [user, setUser] = useState(null);
    const [loadingAuth, setLoadingAuth] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        function loadStorage(){
            const storageUser = localStorage.getItem('UserSystem');

            if(storageUser){
                setUser(JSON.parse(storageUser));
                setLoading(false);
            }

            setLoading(false);
        }
        loadStorage();
    }, [])


    //Cadastrando um novo usuario
  async function signUp(email, password, name){
    setLoadingAuth(true);

    await firebase.auth().createUserWithEmailAndPassword(email, password)
    .then( async (value)=>{
      let uid = value.user.uid;

      await firebase.firestore().collection('users')
      .doc(uid).set({
        name: name,
        avatarUrl: null,
      })
      .then( () => {

        let data = {
          uid: uid,
          name: name,
          email: value.user.email,
          avatarUrl: null
        };

        setUser(data);
        storageUser(data);
        setLoadingAuth(false);
        //toast.success('Bem vindo a plataforma!');

      })

    })
    .catch((error)=>{
      console.log(error);
      //toast.error('Ops algo deu errado!');
      setLoadingAuth(false);
    })

  }


  function storageUser(data){
    localStorage.setItem('UserSystem', JSON.stringify(data));
  }


  //Logout do usuario
  async function signOut(){
    await firebase.auth().signOut();
    localStorage.removeItem('UserSystem');
    setUser(null);
  }

    return(
        <AuthContext.Provider value={{
            signed: !!user,
            user,
            loading,
            signUp,
            signOut
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;