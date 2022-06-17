import styles from "../../styles/Navigation.module.css";

const Navigation = () => {

    return (
        <>
            <nav className={styles.navigation}>
                <li>
                    <a href="#">Mains</a>
                </li>
                <li>
                    <a href="#">Sides</a>
                </li>
                <li>
                    <a href="#">Drinks</a>
                </li>
            </nav>
        </>
    )
};

export default Navigation;