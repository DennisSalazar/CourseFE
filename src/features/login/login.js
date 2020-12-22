import React, { useRef, useState } from 'react';
import { execPost } from '../../api/usersClient';
import styles from './login.module.css';

const Login = (props) => {

    const [ errorMessage, setErrorMessage ] = useState('');

    const refEmail = useRef();
    const refPassword = useRef();

    const authenticateUser = (e) => {

        e.preventDefault();

        const credentials = JSON.stringify({ name: refEmail.current.value, password: refPassword.current.value });

        execPost('auth', credentials)
        .then(response => {
            
            if ( response.status === 200 ) {

                setErrorMessage('');
                sessionStorage.setItem('jwtToken', response.data.token);
                sessionStorage.setItem('username', response.data.name);
                props.history.push('/users');

            }
            else{
                console.log('Invalid user');
                setErrorMessage(`Invalid credentials! Try again.`);
            }

        })
        .catch(error => {
            console.log('ERROR IN AUTH ', error);
        });
    }

    return(
        <div className={styles.box}>
            <div className={styles.header}>
                <span>User's App Login</span>
            </div>
            <form onSubmit={authenticateUser} className={styles.loginForm}>
                <div>
                    <div>
                        <input type="text" placeholder="Enter your user name" ref={refEmail} className={styles.loginInput} />
                    </div>
                </div>
                <div>
                    <input type="password" placeholder="Enter your password" ref={refPassword} className={styles.loginInput} />
                </div>
                <div>
                    <button className={styles.loginButton}>Log In</button>
                </div>
            </form>
            {errorMessage !== '' ? (<h1>{errorMessage}</h1>) : null}
        </div>
    );
} ;

export default Login;