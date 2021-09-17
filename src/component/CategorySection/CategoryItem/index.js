import React from 'react'
import { Link } from 'react-router-dom'

export const CategoryItem=()=> {
    return (
        <>
              <div class="col-md-6 col-xl-4 p-b-30 m-lr-auto">
              <div class="block1 wrap-pic-w">
                <img src="images/banner-01.jpg" alt="IMG-BANNER" />
                <Link to="/shop"
                  class="block1-txt ab-t-l s-full flex-col-l-sb p-lr-38 p-tb-34 trans-03 respon3"
                >
                  <div class="block1-txt-child1 flex-col-l">
                    <span class="block1-name ltext-102 trans-04 p-b-8">
                      Women
                    </span>
                    <span class="block1-info stext-102 trans-04">
                      Spring 2018
                    </span>
                  </div>
                  <div class="block1-txt-child2 p-b-4 trans-05">
                    <Link to="/shop" class="block1-link stext-101 cl0 trans-09">
                      Shop Now
                    </Link>
                  </div>
                </Link>
              </div>
            </div>
     
    </>
        )
}
