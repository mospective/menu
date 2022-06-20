import Link from "next/link";
import styles from "../../styles/Navigation.module.css";

const Navigation = () => {

    return (
        <>
            <nav className={styles.navigation}>
                <li>
                    <Link href="/category/mains">
                        <a>Mains</a>
                    </Link>
                </li>
                <li>
                    <Link href="/category/sides">
                        <a>Sides</a>
                    </Link>
                </li>
                <li>
                    <Link href="/category/drinks">
                        <a>Drinks</a>
                    </Link>
                </li>
            </nav>
        </>
    )
};

export default Navigation;