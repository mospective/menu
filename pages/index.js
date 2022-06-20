import Link from "next/link";
import styles from '../styles/Main.module.css'

export default function Home() {

  return (
    <div className={styles.background}>
      <div className={styles.intro}>
        <h1 className={styles.logo}>Not so <span className={styles["logo-main"]}>Honest Burgers</span></h1>
        <Link href="/category/mains">
          <button className={styles["btn-home"]}>View Menu</button>
        </Link>
      </div>      
    </div>
  )
}
