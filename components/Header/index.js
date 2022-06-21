import Navigation from "../Navigation";
import styles from "../../styles/Header.module.css";

const Header = () => {
    return (
        <header>
            <div className={styles["logo-block"]}>
                <p>Not so <span>Honest Burgers</span></p>
            </div>
            <Navigation />
        </header>
        
    )
};

export default Header;