import { createClient } from 'contentful';
import Image from "next/image";
import Navigation from '../../components/Navigation';

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
    console.log(menuItems)
    return (
        <>
            <Navigation />
            <div>
                {/* { console.log(articles) } */}
                 {menuItems.map((item, i) => {
                    const foodName = item.fields.foodName || item.fields.drinkName;
                    const description = item.fields?.description;
                    const price = item.fields.price;
                    const imageInfo = item.fields?.foodImage?.fields.file;
                    const image = imageInfo?.url;
                    console.log(image);
                    // console.log(image.url);
                    // console.log(item.fields?.foodImage?.fields.file.url);
                    // const image = item.fields?.foodImage.fields.file.url;
                    const slug = item.fields.slug;
                    return <div key={i}>
                        {foodName}
                        {description}
                        {price}
                        {image && <Image src={`https:${image ? image : "none"}`} width={imageInfo?.details.image.width} height={imageInfo?.details.image.height} />}
                        </div>
                })}
            </div>
        
        </>
    );
};

export default Category;