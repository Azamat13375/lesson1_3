import React from 'react';
import Title from '../Title/Title';
import style from './Description.module.css'

function Description({ data }) {
    return (
        <div className={style.title}>
            <Title text={data.title} />
            <p>{data.description}</p>
        </div>

    );
}

export default Description;