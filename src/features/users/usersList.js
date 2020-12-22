import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectors, fetchUsers } from './usersSlice';
import { Link } from 'react-router-dom';
import styles from './users.module.css';

export const UsersList = (props) => {

    const users = useSelector(selectors.selectAll);
    console.log(users);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    return (
        <div>
            <h1 className={styles.welcomebox}>Welcome {sessionStorage.getItem('username')}!</h1>

            <div>
                <span>Just for reference, here you go the users list in case you want to test another one:</span>
                <hr/>
                {users.map((usr => {
                    return (
                        <div key={usr.id} className={styles.userBox}>{usr.name} - [password: {usr.password}]</div>
                    );
                }))}
            </div>

            <Link to="/" className={styles.logoutButton}>Log Out</Link>
        </div>
    );
};