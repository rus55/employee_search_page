import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {requestUserAction} from "../../redux/actions/Actions";
import {useDispatch, useSelector} from "react-redux";
import styles from './User.module.scss'
import Sidebar from "../sidebar/Sidebar";
import avatar from '../../assets/images/avatar.png'

const User = () => {
    let {userId} = useParams()
    const dispatch = useDispatch()
    const user = useSelector(store => store.user)
    const isLoading = useSelector(store => store.isLoading)

    useEffect(() => {
        if (userId) {
            dispatch(requestUserAction(userId))
        }
    }, [userId])

    return (
        <>
            {isLoading ?
                <div>Идет загрузка...</div>
                : <div className={styles.userCard}>
                    <div className={styles.image}>
                        <img src={avatar} alt="user"/>
                    </div>
                    <div className={styles.userInfo}>
                        <div className={styles.title}>{user?.name}</div>
                        <div className={styles.text}><b>email:</b> <span
                            className={`${styles.paddingLeft} ${styles.colorText}`}>{user?.email}</span></div>
                        <div className={styles.text}><b>phone:</b> <span
                            className={`${styles.paddingLeft} ${styles.colorText}`}>{user?.phone}</span></div>
                        <div className={`${styles.title} ${styles.paddingTop}`}>О себе:</div>
                        <div className={`${styles.text} ${styles.colorText}`}>{user?.company.catchPhrase}</div>
                    </div>
                </div>
            }
        </>
    )
}

export default User;