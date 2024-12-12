import React from 'react';
import style from './Title.module.css';

function Title({ text }) {
    return (
        <h2 className={style.title}>{text}
            { text }
        </h2>
    );
}

export default Title;