import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import {NavLink} from 'react-router-dom'
import FooterComponent from './FooterComponent';
import HeaderComponent from './HeaderComponent';

function HomeComponent() {
    return (
        <div>
            <HeaderComponent />
            <div className="mt-5 ">
                <div className="mt-5 pt-5">
                    <NavLink to="/">
                    <AliceCarousel autoPlay autoPlayInterval="1000" className="mt-5 pt-5">
                        <img  src={require('../stores/Men1/home-1.png')} height="500" width="1280" />
                        <img  src={require('../stores/Men1/home-2.jpg')}   height="500" width="1280"/>
                        <img  src={require('../stores/Men1/home-3.jpg')}   height="500" width="1280" />
                        <img  src={require('../stores/Men1/home-4.jpg')}   height="500" width="1280" />
                        <img  src={require('../stores/Men1/home-5.jpg')}   height="500" width="1280" />
                        <img  src={require('../stores/Men1/home-6.jpg')}   height="500" width="1280" />
                        <img  src={require('../stores/Men1/home-7.jpg')}   height="500" width="1280" />
                    </AliceCarousel>
                    </NavLink>
                </div >
                <div className="container">
                    <h1 className="mb-5">Deals Of The Day</h1>
                    <div className="row ">
                        <div className="col-auto">
                            <NavLink to="/">
                                <img  src={require('../stores/Men1/home-11.jpg')} height="290" width="197"/>
                            </NavLink>
                        </div>
                        <div className="col-auto">
                            <NavLink to="/">
                                <img  src={require('../stores/Men1/home-12.jpg')} height="290" width="197"/>
                            </NavLink>
                        </div>
                        <div className="col-auto">
                            <NavLink to="/">
                                <img  src={require('../stores/Men1/home-13.jpg')} height="290" width="197"/>
                            </NavLink>
                        </div>
                        <div className="col-auto">
                            <NavLink to="/">
                                <img  src={require('../stores/Men1/home-14.jpg')} height="290" width="197"/>
                            </NavLink>
                        </div>
                        <div className="col-auto">
                            <NavLink to="/">
                                <img  src={require('../stores/Men1/home-15.jpg')} height="290" width="197"/>
                            </NavLink>
                        </div>
                    </div>    
                </div>
                <div className="container">
                    <h1 className="mb-5">BIGGEST DEALS ON TOP BRANDS</h1>
                    <div className="row ">
                        <div className="col-auto">
                            <NavLink to="/">
                                <img  src={require('../stores/Men1/home-21.jpg')} height="290" width="198"/>
                            </NavLink>
                        </div>
                        <div className="col-auto">
                            <NavLink to="/">
                                <img  src={require('../stores/Men1/home-22.jpg')} height="290" width="198"/>
                            </NavLink>
                        </div>
                        <div className="col-auto">
                            <NavLink to="/">
                                <img  src={require('../stores/Men1/home-23.jpg')} height="290" width="198"/>
                            </NavLink>
                        </div>
                        <div className="col-auto">
                            <NavLink to="/">
                                <img  src={require('../stores/Men1/home-24.jpg')} height="290" width="198"/>
                            </NavLink>
                        </div>
                        <div className="col-auto">
                            <NavLink to="/">
                                <img  src={require('../stores/Men1/home-25.jpg')} height="290" width="198"/>
                            </NavLink>
                        </div>
                    </div>
                    <div className="row ">
                        <div className="col-auto">
                            <NavLink to="/">
                                <img  src={require('../stores/Men1/home-26.jpg')} height="290" width="198"/>
                            </NavLink>
                        </div>
                        <div className="col-auto">
                            <NavLink to="/">
                                <img  src={require('../stores/Men1/home-27.jpg')} height="290" width="198"/>
                            </NavLink>
                        </div>
                        <div className="col-auto">
                            <NavLink to="/">
                                <img  src={require('../stores/Men1/home-28.jpg')} height="290" width="198"/>
                            </NavLink>
                        </div>
                        <div className="col-auto">
                            <NavLink to="/">
                                <img  src={require('../stores/Men1/home-29.jpg')} height="290" width="198"/>
                            </NavLink>
                        </div>
                        <div className="col-auto">
                            <NavLink to="/">
                                <img  src={require('../stores/Men1/home-30.jpg')} height="290" width="198"/>
                            </NavLink>
                        </div>
                    </div>    
                </div>
                <div className="container">
                    <h1 className="mb-5">CATEGORIES TO BAG</h1>
                    <div className="row ">
                        <div className="col-auto">
                            <NavLink to="/">
                                <img  src={require('../stores/Men1/home-31.jpg')} height="290" width="150"/>
                            </NavLink>
                        </div>
                        <div className="col-auto">
                            <NavLink to="/">
                                <img  src={require('../stores/Men1/home-32.jpg')} height="290" width="150"/>
                            </NavLink>
                        </div>
                        <div className="col-auto">
                            <NavLink to="/">
                                <img  src={require('../stores/Men1/home-33.jpg')} height="290" width="150"/>
                            </NavLink>
                        </div>
                        <div className="col-auto">
                            <NavLink to="/">
                                <img  src={require('../stores/Men1/home-34.jpg')} height="290" width="150"/>
                            </NavLink>
                        </div>
                        <div className="col-auto">
                            <NavLink to="/">
                                <img  src={require('../stores/Men1/home-35.jpg')} height="290" width="150"/>
                            </NavLink>
                        </div>
                        <div className="col-auto">
                            <NavLink to="/">
                                <img  src={require('../stores/Men1/home-36.jpg')} height="290" width="150"/>
                            </NavLink>
                        </div>
                        <div className="row">
                            <div className="col-auto">
                                <NavLink to="/">
                                    <img  src={require('../stores/Men1/home-37.jpg')} height="290" width="150"/>
                                </NavLink>
                            </div>
                            <div className="col-auto">
                                <NavLink to="/">
                                    <img  src={require('../stores/Men1/home-38.jpg')} height="290" width="150"/>
                                </NavLink>
                            </div>
                            <div className="col-auto">
                                <NavLink to="/">
                                    <img  src={require('../stores/Men1/home-39.jpg')} height="290" width="150"/>
                                </NavLink>
                            </div>
                            <div className="col-auto">
                                <NavLink to="/">
                                    <img  src={require('../stores/Men1/home-40.jpg')} height="290" width="150"/>
                                </NavLink>
                            </div>
                            <div className="col-auto">
                                <NavLink to="/">
                                    <img  src={require('../stores/Men1/home-40-1.jpg')} height="290" width="150"/>
                                </NavLink>
                            </div>
                            <div className="col-auto">
                                <NavLink to="/">
                                    <img  src={require('../stores/Men1/home-40-2.jpg')} height="290" width="150"/>
                                </NavLink>
                            </div>
                        </div>
                    </div>    
                </div>
                <div className="container">
                    <h1 className="mb-5">EXPLORE TOP BRANDS</h1>
                    <div className="row ">
                        <div className="col-auto">
                            <NavLink to="/">
                                <img  src={require('../stores/Men1/home-41.jpg')} height="290" width="198"/>
                            </NavLink>
                        </div>
                        <div className="col-auto">
                            <NavLink to="/">
                                <img  src={require('../stores/Men1/home-42.jpg')} height="290" width="198"/>
                            </NavLink>
                        </div>
                        <div className="col-auto">
                            <NavLink to="/">
                                <img  src={require('../stores/Men1/home-43.jpg')} height="290" width="198"/>
                            </NavLink>
                        </div>
                        <div className="col-auto">
                            <NavLink to="/">
                                <img  src={require('../stores/Men1/home-44.jpg')} height="290" width="198"/>
                            </NavLink>
                        </div>
                        <div className="col-auto">
                            <NavLink to="/">
                                <img  src={require('../stores/Men1/home-45.jpg')} height="290" width="198"/>
                            </NavLink>
                        </div>
                        <div className="col-auto">
                            <NavLink to="/">
                                <img  src={require('../stores/Men1/home-46.jpg')} height="290" width="198"/>
                            </NavLink>
                        </div>
                        <div className="col-auto">
                            <NavLink to="/">
                                <img  src={require('../stores/Men1/home-47.jpg')} height="290" width="198"/>
                            </NavLink>
                        </div>
                        <div className="col-auto">
                            <NavLink to="/">
                                <img  src={require('../stores/Men1/home-48.jpg')} height="290" width="198"/>
                            </NavLink>
                        </div>
                        <div className="col-auto">
                            <NavLink to="/">
                                <img  src={require('../stores/Men1/home-49.jpg')} height="290" width="198"/>
                            </NavLink>
                        </div>
                        <div className="col-auto">
                            <NavLink to="/">
                                <img  src={require('../stores/Men1/home-50.jpg')} height="290" width="198"/>
                            </NavLink>
                        </div>
                    </div>    
                </div>
                <div className="container">
                    <h1 className="mb-5">TRENDING IN WESTERN WEAR</h1>
                    <div className="row ">
                        <div className="col-auto">
                            <NavLink to="/">
                                <img  src={require('../stores/Men1/home-51.jpg')} height="290" width="198"/>
                            </NavLink>
                        </div>
                        <div className="col-auto">
                            <NavLink to="/">
                                <img  src={require('../stores/Men1/home-52.jpg')} height="290" width="198"/>
                            </NavLink>
                        </div>
                        <div className="col-auto">
                            <NavLink to="/">
                                <img  src={require('../stores/Men1/home-53.jpg')} height="290" width="198"/>
                            </NavLink>
                        </div>
                        <div className="col-auto">
                            <NavLink to="/">
                                <img  src={require('../stores/Men1/home-54.jpg')} height="290" width="198"/>
                            </NavLink>
                        </div>
                        <div className="col-auto">
                            <NavLink to="/">
                                <img  src={require('../stores/Men1/home-55.jpg')} height="290" width="198"/>
                            </NavLink>
                        </div>
                    </div>    
                </div>
                <div className="container">
                    <h1 className="mb-5">TRENDING IN INDIAN WEAR</h1>
                    <div className="row ">
                        <div className="col-auto">
                            <NavLink to="/">
                                <img  src={require('../stores/Men1/home-61.jpg')} height="260" width="198"/>
                            </NavLink>
                        </div>
                        <div className="col-auto">
                            <NavLink to="/">
                                <img  src={require('../stores/Men1/home-62.jpg')} height="260" width="198"/>
                            </NavLink>
                        </div>
                        <div className="col-auto">
                            <NavLink to="/">
                                <img  src={require('../stores/Men1/home-63.jpg')} height="260" width="198"/>
                            </NavLink>
                        </div>
                        <div className="col-auto">
                            <NavLink to="/">
                                <img  src={require('../stores/Men1/home-64.jpg')} height="260" width="198"/>
                            </NavLink>
                        </div>
                        <div className="col-auto">
                            <NavLink to="/">
                                <img  src={require('../stores/Men1/home-65.jpg')} height="260" width="198"/>
                            </NavLink>
                        </div>
                    </div>    
                </div>
            </div>
            <FooterComponent />
        </div> 
    )
}

export default HomeComponent
