import React, {useState} from 'react';
import {Link} from "react-router-dom";
import styles from './SearchResult.module.scss'

import miniAvatar from "../../assets/images/mini_avatar.png"
import {useSelector} from "react-redux";

const SearchResult = () => {
    const searchResult = useSelector(store => store.searchResult);
    const [colorPlace, setColorPlace] = useState(false)

    return (
        <>
            {!searchResult?.length
                ?
                <div className={styles.emptySearchResult}>начните поиск</div>
                :
                <div className={styles.wrapper}>
                    {searchResult?.map((user) => (
                            <div className={styles.container} key={user.id}>
                                <div className={styles.img}><img src={miniAvatar} alt="user"/></div>
                                <div className={styles.text} >
                                    <div><Link to={`/${user.id}`}>{user.name}</Link></div>
                                    <div>{user.email}</div>
                                </div>
                            </div>
                        )
                    )}
                </div>
            }
        </>
    );
};

export default SearchResult;