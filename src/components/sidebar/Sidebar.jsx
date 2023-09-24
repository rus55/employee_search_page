import React, {useEffect, useState} from 'react';
import styles from './Sidebar.module.scss';
import SearchResult from "../searchResult/SearchResult";
import {useDispatch, useSelector} from "react-redux";
import {setSearchResultAction} from "../../redux/actions/Actions";

const Sidebar = () => {
    const [userName, setUserName] = useState('');
    const dispatch = useDispatch()


    const allUsers = useSelector(store => store.users);

    useEffect(() => {
        let arrUsers = userName.split(',').map(name => name.trim())

        dispatch(setSearchResultAction(allUsers?.filter((user) =>
            arrUsers.reduce((acc, userNameOrId) => !acc && userNameOrId !== ''
                ? isNaN(Number(userNameOrId))
                    ? user.name.toLowerCase().indexOf(userNameOrId.toLowerCase()) !== -1
                    : user.id === +userNameOrId
                : acc, false) )))
    }, [userName])

    const handleChange = event => {
        setUserName(event.target.value);
    };

    return (
        <div className={styles.sidebar}>
            <div className={styles.title}>Поиск сотрудников</div>
            <input value={userName} onChange={handleChange} className={styles.search} type="text" placeholder="Введите Id или имя"/>
            <div className={styles.title}>Результаты</div>
            <SearchResult/>
        </div>
    )
}

export default Sidebar