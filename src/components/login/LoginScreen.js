import React from 'react';

const LoginScreen = ({history}) => {
    const handleLogin=()=>{
        console.log('click');
        // history.push('/');
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