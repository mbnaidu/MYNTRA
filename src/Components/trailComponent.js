import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Card, CardBody,CardHeader, CardLink, CardText, CardTitle } from 'reactstrap'
import AliceCarousel from 'react-alice-carousel';
import '../styles/trail.css'

const  trail = (props) => {
        const men = this.props.mens.map((d)=>{
            return(
                <div key={d.id} className="p-2">
                    <NavLink to="/trail1" style={{ width: '12rem' }} className="p-0 bg-black">
                        <Card >
                            <CardHeader >
                                <img  src={d.image} height="240" width="155"/>
                            <CardTitle className="pl-4 pb-0 p-0"><img src={d.title} /></CardTitle>
                            <CardTitle to="/trail" className="pl-4 pb-0 p-0" style={{ color:"black",fontWeight:"bold" }}>{d.offer}</CardTitle>
                            </CardHeader>

                        </Card>
                    </NavLink>
                </div>
            )
        })
        return (
            <React.Fragment >
                <div className="background-black">
                <div className="container-fluid">
                        <div className="pt-5">
                            <NavLink to="/trail">
                                <AliceCarousel autoPlay autoPlayInterval="1000" className="mt-5 pt-5">
                                    <img  src={require('../stores/Men1/home-1.png')}/>
                                    <img  src={require('../stores/Men1/home-2.jpg')}  />
                                    <img  src={require('../stores/Men1/home-3.jpg')}  />
                                    <img  src={require('../stores/Men1/home-4.jpg')}  />
                                    <img  src={require('../stores/Men1/home-5.jpg')}  />
                                    <img  src={require('../stores/Men1/home-6.jpg')}  />
                                    <img  src={require('../stores/Men1/home-7.jpg')}  />
                                </AliceCarousel>
                            </NavLink>
                        </div >
                    </div>
                <div className="container-lg p-5">
                    <div className="container-lg p-0">
                        <h1 style={{color:'white'}}>MENS</h1>
                        <div className="row">
                            {men}
                        </div>
                    </div>
                    <div className="container-lg p-0">
                        <h1 style={{color:'white'}}>MENS</h1>
                        <div className="row">
                            {men}
                        </div>
                    </div>
                </div>
                </div>
            </React.Fragment>
        )
    }


export default trail;

