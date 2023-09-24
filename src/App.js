import React, {useEffect} from 'react';
import Header from "./components/header/Header";
import {Route, Routes} from "react-router";
import User from "./components/user/User";
import Main from "./components/main/Main";
import {useDispatch} from "react-redux";
import {requestUsersAction} from "./redux/actions/Actions";
import styles from './App.module.scss'
import Sidebar from "./components/sidebar/Sidebar";

function App() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(requestUsersAction())
    }, [])

    return (
        <div className={styles.App}>
            <Header/>
            <div className={styles.main}>
                <Sidebar/>
                <Routes>
                    <Route path={'/'} element={<Main/>}/>
                    <Route path={'/:userId'} element={<User/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;