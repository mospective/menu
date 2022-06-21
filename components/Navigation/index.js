import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../../styles/Navigation.module.css";

const Navigation = () => {
    const router = useRouter();

    return (
        <>
            <nav className={styles.navigation}>
                <li className={router.asPath === "/category/mains" ? styles.active : ""}>
                    <Link href="/category/mains">
                        <a>Mains</a>
                    </Link>
                </li>
                <li className={router.asPath === "/category/sides" ? styles.active : ""}>
                    <Link href="/category/sides">
                        <a>Sides</a>
                    </Link>
                </li>
                <li className={router.asPath === "/category/drinks" ? styles.active : ""}>
                    <Link href="/category/drinks">
                        <a>Drinks</a>
                    </Link>
                </li>
            </nav>
        </>
    )
};

export default Navigation;