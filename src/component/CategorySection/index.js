import React from 'react'
import { generatePublicUrl } from '../../urlConfig'
import Item from '../Item'
import {product} from '../../asset/staticProducts'


export const CategorySection = (props) => {
  return (
    <div>
      <section class="section-content">
        <div class="container">
          <header class="section-heading">
            <h3 class="section-title">Products</h3>
          </header>
          <div class="row">
            {
              product && product.map((product, key) => (
                <div class="col-md-4">

                  <div
                    // to={`/${product.slug}/${product._id}/p`}
                    style={{ display: "block", width: '100%', height: '90%' }}
                  >
                    {/* "_id": {
                      "$oid": "61aa8bdb7fcfe46bf0d5351d"
                      }, */}

                    <Item key={key} name={product.name}
                      price={product.price}
                      slug={product.slug}
                      _id={product._id.$oid}
                      productDetails={{
                        name: product.name,
                        price: product.price,
                        category: product.category,
                        description: product.description,
                        productPictures: product.productPictures,
                        quantity: product.quantity
                      }}
                      history={props.history}
                      image={generatePublicUrl(product.productPictures[0].img)}
                    ></Item>
                  </div>
                </div>
              ))
            }

          </div>
        </div>
      </section>
    </div>
  )
}
