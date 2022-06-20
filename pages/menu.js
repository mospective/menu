import { createClient } from 'contentful';
import Navigation from '../components/Navigation';
import styles from '../styles/Menu.module.css'

export async function getStaticProps() {

  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY
  })

  const res = await client.getEntries({ content_type: 'mains' });

  return {
    props: {
      menuItems: res.items
    }
  }
}

export default function Menu({ menuItems }) {
  console.log(menuItems);
  return (
    <div className={styles.container}>
      <div className={styles["logo-block"]}>
        <p>Not so <span>Honest Burgers</span></p>
      </div>
      <Navigation />
      <p>Mo's app</p>
      <div>
        {menuItems.map((item, i) => {
          const foodName = item.fields.foodName;
          return <div key={i}>{foodName}</div>
        })}
      </div>
    </div>
  )
}
