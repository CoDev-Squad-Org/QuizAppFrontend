import { createUserWithEmailAndPassword, signInWithEmailAndPassword }  from 'firebase/auth';
import { createContext } from 'react'
import {auth} from '../firebase/firebase.js'

const UsedContext = createContext();

const Context = ({ children }) => {
    const register = createUserWithEmailAndPassword(auth, 'gared@gmail.com', '12345678abcdefgH')
    /* const signin = signInWithEmailAndPassword(auth, email, password) */

    const algo = "algo";
    const data = {
        register,
        algo,
    }

    return <UsedContext.Provider value={data} >{children }</UsedContext.Provider>
};

export  {Context, UsedContext };
