import { useState } from 'react';
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import LoginForm from '../../components/LoginForm/LoginForm';

export default function AuthPage(){
    const [authState, setAuthState ] = useState([true]);
    return (
        <main>
        <h1>AuthPage</h1>
        <button onClick={() => setAuthState(!authState)}>{authState ? "Login" : "SignUp"}</button>
        {authState && 
        <>
        <h2>SignUp</h2>
        <SignUpForm />
        </>
        }
        { !authState &&
        <>
        <h2>Login</h2>
        <LoginForm />
        </>
        }
        </main>
    );
}