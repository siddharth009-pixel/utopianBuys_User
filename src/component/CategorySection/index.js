import React from 'react'
import { CategoryItem } from './CategoryItem'

export const CategorySection=(props)=>{
    return (
        <div>
        <div class="sec-banner bg0 p-t-80 p-b-50">
        <div class="container">
          <div class="row" style={{display:'flex'}}>
            <CategoryItem />
            <CategoryItem />
            <CategoryItem />
        </div>
        </div>
      </div>
       
        </div>
    )
}
