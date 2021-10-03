import React from 'react'
import 'react-slideshow-image/dist/styles.css'
import { CategorySection } from '../../component/CategorySection'

import Layout from '../../component/Layout'
import Footer from '../../component/Footer'
import { ImageSlider } from './ImageSlider/index'
import Features from '../../component/Features/index'
import image1 from '../../images/item-cart-02.jpg'

const items = [
    { name: 'Esprit Ruffle Shirt', price: '35' ,review: '35' ,image:image1},
    { name: 'Esprit Ruffle Shirt', price: '35' ,review: '35' ,image:image1},
    { name: 'Esprit Ruffle Shirt', price: '35' ,review: '35' ,image:image1},
    { name: 'Esprit Ruffle Shirt', price: '35' ,review: '35' ,image:image1},
];

export default function index() {
    return (
        <div>
            <Layout>
                <ImageSlider></ImageSlider>
                <Features></Features>
                <CategorySection title="Product"
                product={items}
                ></CategorySection>
                <CategorySection title="Product"
                product={items}
                ></CategorySection>
                <CategorySection title="Product"
                product={items}
                ></CategorySection>
                <Footer></Footer>
            </Layout>
        </div>
    )
}
