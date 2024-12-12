import style from './mainPage.module.css'
import Description from "../../components/Description/Description";

const numbers = [
    { id: 1, name: "Ivan", age: 21 },
    { id: 2, name: "Alex", age: 22 },
    { id: 3, name: "Azamat", age: 24 },
]

function MainPage() {
    return (
        <div className={style.wrapper}>
            <h2 className={style.title}>MainPage</h2>
            {
                numbers.map((el, index) =>
                    <div key={el.id}><span className={style.age2}>age:</span> <span className={style.age}>{el.age},</span> <span className={style.name2}>name:</span> <span className={style.name}>{el.name}</span></div>)
            }

            <Description data={{title: "Title", description: "description"}} />
        </div>
    );
}

export default MainPage;