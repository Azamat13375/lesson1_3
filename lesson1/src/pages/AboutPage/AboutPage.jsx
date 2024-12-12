import Description from "../../components/Description/Description";
import styles from "./AboutPage.module.css";

function AboutPage() {
    return (
        <>
            <h2 className={styles.title}>AboutPage</h2>
            <Description data={{title: "Title 2", description: "description 2"}} />
        </>
    );
}

export default AboutPage;