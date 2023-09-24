import React from 'react';
import style from './Header.module.scss';

const Header = () => {
    return (
        <div className={style.header}>
            <div className={style.logo}>Жилфонд</div>
            <div className={style.user}>Пользователь</div>
        </div>
    );
};

export default Header;