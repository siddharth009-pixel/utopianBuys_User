import React from 'react'
import 'react-slideshow-image/dist/styles.css'
import { CategorySection } from '../../component/CategorySection'

import Layout from '../../component/Layout'
import MenuHeader from '../../component/MenuHeader'
import Footer from '../../component/Footer'
import Item from '../../component/Item'
import { ImageSlider } from './ImageSlider/index'


const items = [
    { name: 'Esprit Ruffle Shirt', price: '35' ,image:"images/product-01.jpg"},
    { name: 'Esprit Ruffle Shirt', price: '35' ,image:"images/product-02.jpg"},
    { name: 'Esprit Ruffle Shirt', price: '35' ,image:"images/product-03.jpg"},
    { name: 'Esprit Ruffle Shirt', price: '35' ,image:"images/product-04.jpg"},
    { name: 'Esprit Ruffle Shirt', price: '35' ,image:"images/product-13.jpg"},
    { name: 'Esprit Ruffle Shirt', price: '35' ,image:"images/product-14.jpg"},
    { name: 'Esprit Ruffle Shirt', price: '35' ,image:"images/product-15.jpg"},
    { name: 'Esprit Ruffle Shirt', price: '35' ,image:"images/product-16.jpg"},
];

export default function index() {
    return (
        <div>
            <Layout>
            <div style={{height:'84px'}}></div>
                <ImageSlider></ImageSlider>
                <CategorySection />
                <section class="bg0 p-t-23 p-b-50">
                    <div class="container">
                        <div class="p-b-10">
                            <h3 class="ltext-103 cl5">Product Overview</h3>
                        </div>
                        <MenuHeader></MenuHeader>
                        <div class="row">
                            {
                                items.map((item, key) => (
                                    <Item key={key} name={item.name}
                                     price={item.price}
                                     image={item.image}
                                     ></Item>
                                ))
                            }
                        </div>

                    </div>
                </section>
                <Footer></Footer>
            </Layout>
        </div>
    )
}
