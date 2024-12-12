import React from 'react';
import style from './Todo.module.css';

function Todo({ data }) {
    return (
        <p className={style.data}>
            {data}
        </p>
    );
}

export default Todo;