import React from 'react'
import { FaFacebook, FaLandmark, FaLock, FaPinterest, FaTruck, FaYoutube } from 'react-icons/fa';
import { FcGoogle } from "react-icons/fc";
import { IconContext } from "react-icons";
export default function index() {
    return (
        <div>
            <section class="section-content padding-y-sm">
                <div class="container">
                    <article class=" card-body">
                        <div class="row">
                            <div class="col-md-4">
                                <figure class="item-feature">
                                    <span class="text-primary">
                                    <IconContext.Provider value={{ size: 50 }}>
                                        <FaTruck></FaTruck>
                                     </IconContext.Provider>
                                    </span>
                                    <figcaption >
                                        <h5 class="title">Fast delivery</h5>
                                        <p>Dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                            tempor incididunt ut labore </p>
                                    </figcaption>
                                </figure>
                            </div>
                            <div class="col-md-4">
                                <figure class="item-feature">
                                    <span class="text-primary">
                                    <IconContext.Provider value={{ size: 50 }}>
                                        <FaLandmark></FaLandmark>
                                     </IconContext.Provider>
                                    </span>
                                    <figcaption >
                                        <h5 class="title">Creative Strategy</h5>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                        </p>
                                    </figcaption>
                                </figure>
                            </div>
                            <div class="col-md-4">
                                <figure class="item-feature">
                                    <span class="text-primary">
                                    <IconContext.Provider value={{ size: 50 }}>
                                        <FaLock></FaLock>
                                     </IconContext.Provider>
                                    </span>
                                    <figcaption  >
                                        <h5 class="title">High secured </h5>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                        </p>
                                    </figcaption>
                                </figure>
                            </div>
                        </div>
                    </article>

                </div>
            </section>
        </div>
    )
}
