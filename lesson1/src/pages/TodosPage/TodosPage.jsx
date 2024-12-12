import React from 'react';
import Todo from "../../components/Todo/Todo";
import style from './TodosPage.module.css'

const todos = ["todo 1", "todo 2", "todo 3"];

function TodosPage() {
    return (
        <div>
            <h2 className={style.title}>TodosPage</h2>
            {todos.map((todo, index) => (
                <Todo key={index} data={todo} />
            ))}
        </div>
    );
}

export default TodosPage;