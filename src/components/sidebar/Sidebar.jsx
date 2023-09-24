import React from 'react';
import styles from './Search.module.scss'

const Search = () => {

    return (
        <div className={styles.search}>
            <div>
                <div>Поиск сотрудников</div>
                <div><input type="text" placeholder="Введите Id или имя"/></div>
            </div>
            <div>
                <div>Результаты</div>
                <div>Юзеры - переделать</div>
            </div>
        </div>
    )
}

export default Search