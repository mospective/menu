import { createClient } from 'contentful';
import Image from "next/image";
// import { useRouter } from "next/router";
// import Link from "next/link";
import Header from '../../components/Header';
import styles from "../../styles/Menu.module.css";

const menuCategories = ["mains", "sides", "drinks"];

export const getStaticPaths = async () => {
    const paths = menuCategories.map(cat => {
        return {
            params: { cat: cat}
        }
    })

    return {
        paths: paths,
        fallback: false
    }
};

export async function getStaticProps(context) {

  const type = context.params.cat;
    
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY
  })

  const res = await client.getEntries({ content_type: type });

  return {
    props: {
        menuItems: res.items
    }
  }
}

const Category = ({ menuItems }) => {
    // const router = useRouter();
    // const catID = router.query.cat;
    console.log(menuItems)
    return (
        <>
            <Header />
            <div className={styles.cards}>
                {/* { console.log(articles) } */}
                 {menuItems.map((item, i) => {
                    const productName = item.fields.foodName || item.fields.drinkName;
                    const description = item.fields?.description;
                    const price = item.fields.price;
                    const imageInfo = item.fields?.foodImage?.fields.file;
                    const image = imageInfo?.url;
                    const slug = item.fields.slug;

                    return (
                        <div className={styles.card} key={i}>
                            <div className={styles.text}>
                                <p className={styles.product}>{ productName }</p>
                                <p className={styles.description}>{ description }</p>
                                <span className={styles.price}>{ price }</span>
                            </div>
                            <div className={styles.image}>
                            {image && <Image src={`https:${image ? image : "none"}`} width={imageInfo?.details.image.width} height={imageInfo?.details.image.height} />}
                            </div>
                        {/* <Link href={`/category/${catID}/${slug}`}>
                            <button>View</button>
                        </Link> */}
                        </div>
                        );
                })}
            </div>
        
        </>
    );
};

export default Category;