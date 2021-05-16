import React,{useContext} from 'react';
import { AuthContext } from '../../auth/authContext';
import { types } from '../../types/types';
const {
    LOGIN
}=types;
const LoginScreen = ({history}) => {
    const {dispatch} = useContext(AuthContext);
    const handleLogin=()=>{
        // history.push('/');
        // history.replace('/');
       
        dispatch({
            type:LOGIN,
            payload:{
                name:'Fernando'
            }
        });
        history.replace('/');
    }
    return ( 
        <div className="container mt-5">
            <h1>Login Screen</h1>
            <br />
            <button
                className="btn btn-primary"
                onClick={handleLogin}
            >    
                Login
            </button> 
        </div>
     );
}
 
export default LoginScreen;