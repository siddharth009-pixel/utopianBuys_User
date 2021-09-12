import React from 'react'
import { Link } from 'react-router-dom'
export default function index({ image,title,subtitle,date,author,tag,comment }) {
    return (
        <div class="container">
            <div class="row">
                <div class="p-b-63">
                    <Link to='/blogdetail' class="hov-img0 how-pos5-parent">
                        <img src={image} alt="IMG-BLOG" />
                        <div class="flex-col-c-m size-123 bg9 how-pos5">
                            <span class="ltext-107 cl2 txt-center">22</span>
                            <span class="stext-109 cl3 txt-center">June 2020 </span>
                        </div>
                    </Link>
                    <div class="p-t-32">
                        <h4 class="p-b-15">
                            <Link
                                to="/blogdetail"
                                class="ltext-108 cl2 hov-cl1 trans-04"
                            >
                                {title}
                            </Link>
                        </h4>
                        <p class="stext-117 cl6">
                            {subtitle}
                        </p>
                        <div class="flex-w flex-sb-m p-t-18">
                            <span class="flex-w flex-m stext-111 cl2 p-r-30 m-tb-10">
                                <span>
                                    <span class="cl4">By</span> {author}
                                    <span class="cl12 m-l-4 m-r-6">|</span>
                                </span>
                                <span>
                                    {tag}
                                    <span class="cl12 m-l-4 m-r-6">|</span>
                                </span>
                                <span> {comment}</span>
                            </span>
                            <Link
                                to="/blogdetail"
                                class="stext-101 cl2 hov-cl1 trans-04 m-tb-10"
                            >
                                Continue Reading
                                <i class="fa fa-long-arrow-right m-l-9"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
