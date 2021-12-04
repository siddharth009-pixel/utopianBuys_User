import React from 'react'
import Layout from '../../component/Layout'
import MenuHeader from '../../component/MenuHeader'
import Footer from '../../component/Footer'
import getParams from "../../utils/getParams"
import ProductPage from "./ProductPage"
import ProductStore from "./ProductStore"
import './style.css'

// const items = [
//     { name: 'Esprit Ruffle Shirt', type: "Mandala", price: '35', image: "images/product-01.jpg" },
//     { name: 'Esprit Ruffle Shirt', type: "Mandala", price: '35', image: "images/product-02.jpg" },
//     { name: 'Esprit Ruffle Shirt', type: "men", price: '35', image: "images/product-03.jpg" },
//     { name: 'Esprit Ruffle Shirt', type: "Mandala", price: '35', image: "images/product-04.jpg" },
//     { name: 'Esprit Ruffle Shirt', type: "men", price: '35', image: "images/product-05.jpg" },
//     { name: 'Esprit Ruffle Shirt', type: "watch", price: '35', image: "images/product-06.jpg" },
//     { name: 'Esprit Ruffle Shirt', type: "Mandala", price: '35', image: "images/product-07.jpg" },
//     { name: 'Esprit Ruffle Shirt', type: "Mandala", price: '35', image: "images/product-08.jpg" },
//     { name: 'Esprit Ruffle Shirt', type: "men", price: '35', image: "images/product-09.jpg" },
//     { name: 'Esprit Ruffle Shirt', type: "men", price: '35', image: "images/product-10.jpg" },
//     { name: 'Esprit Ruffle Shirt', type: "men", price: '35', image: "images/product-11.jpg" },
//     { name: 'Esprit Ruffle Shirt', type: "men", price: '35', image: "images/product-12.jpg" },
//     { name: 'Esprit Ruffle Shirt', type: "men", price: '35', image: "images/product-13.jpg" },
//     { name: 'Esprit Ruffle Shirt', type: "men", price: '35', image: "images/product-14.jpg" },
//     { name: 'Esprit Ruffle Shirt', type: "Mandala", price: '35', image: "images/product-15.jpg" },
//     { name: 'Esprit Ruffle Shirt', type: "Mandala", price: '35', image: "images/product-16.jpg" },
// ]

export default function ShopPage(props) {


    const renderProduct = () => {
        const paramsObject = getParams(props.location.search)
        const { cid, type } = paramsObject
        props.match.params.cid=cid;
        props.match.params.type=type;
        let content=null
        console.log(props);
        switch (type) {
            case 'store': {
                content = <ProductStore {...props} />
                break ;
            }
            case 'page':{
                content =  <ProductPage {...props} />
                break ;
            }
            default:{
                content = <ProductStore {...props} />
                break ;
            }
        }
        return content
    }

    // switch (type) {
    //     case 'store': {
    //         content = <ProductStore {...props} />
    //         break ;
    //     }
    //     case 'page':{
    //         content =  <ProductPage {...props} />
    //         break ;
    //     }
    //     default:{
    //         content=""
    //     }
    // }




    return (
        <>
            <Layout>
                <div class="menuHeaderDiv">
               

                    <div>
                        {
                            renderProduct()
                        }
                       
                    </div>

                </div>


                <Footer></Footer>
            </Layout>

        </>
    )
}
