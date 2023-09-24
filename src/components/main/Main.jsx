import React from 'react';
import styles from './Main.module.scss'
import Sidebar from "../sidebar/Sidebar";

const Main = () => {
    return (
        <>
            <div className={styles.textContainer}>
                <div >Выберите сотрудника, чтобы посмотреть его профиль</div>
            </div>
        </>

    );
};

export default Main;