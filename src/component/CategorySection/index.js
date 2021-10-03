import React from 'react'
export const CategorySection = ({ title, product }) => {
  return (
    <div>
      {console.log(product)}
      <section class="section-content">
        <div class="container">
          <header class="section-heading">
            <h3 class="section-title">{title}</h3>
          </header>
          <div class="row">
            {product.map((item) => (
              <div class="col-md-3">
                <div href="#" class="card card-product-grid">
                  <a href="#" class="img-wrap"> <img src={item.image} /> </a>
                  <figcaption class="info-wrap">
                    <a href="#" class="title">{item.name}</a>

                    <div class="rating-wrap">
                      <ul class="rating-stars">
                        <li style={{"width":"80%" }}class="stars-active">
                          <i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i>
                        </li>
                        <li>
                          <i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i>
                        </li>
                      </ul>
                      <span class="label-rating text-muted">{item.review}</span>
                    </div>
                    <div class="price mt-1">${item.price}</div>
                  </figcaption>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
