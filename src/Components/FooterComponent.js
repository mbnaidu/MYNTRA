import React from 'react'
import { NavLink } from 'react-router-dom'
import { Jumbotron } from 'reactstrap'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import '../styles/Header.css'

function FooterComponent() {
    return (
        <Jumbotron className="p-5 m-0 "   >
            <div className="container offer">
                <div className="row">             
                    <div className="col-4">
                        <h5 style={{fontFamily:'fantasy'}}>ONLINE SHOPPING</h5>
                        <ul className="list-unstyled" >
                            <li><NavLink to="/men" style={{color:'red'}}>Men</NavLink></li>
                            <li><NavLink to="/women" style={{color:'hotpink'}}>Women</NavLink></li>
                            <li><NavLink to="/kids" style={{color:'gold'}}>Kids</NavLink></li>
                            <li><NavLink to="/home&amp;living" style={{color:'green'}}>Home &amp; Living</NavLink></li>
                            <li><NavLink to="/offers" style={{color:'tomato'}}>Offers</NavLink></li>
                        </ul>
                    </div>             
                    <div className="col-4">
                        <h5 style={{fontFamily:'fantasy'}}>USEFUL LINKS</h5>
                        <ul className="list-unstyled">
                            <li><NavLink to="/men">Contact Us</NavLink></li>
                            <li><NavLink to="/women">FAQ</NavLink></li>
                            <li><NavLink to="/kids">Terms Of Use</NavLink></li>
                            <li><NavLink to="/home&amp;living">Track Orders</NavLink></li>
                            <li><NavLink to="/offers">Shipping</NavLink></li>
                        </ul>
                    </div>           
                    <div className="col-4">
                        <ul><h5 style={{fontFamily:'fantasy'}}>KEEP IN TOUCH</h5>
                        <li><NavLink to="https://www.facebook.com/"><FacebookIcon />  FACEBOOK</NavLink></li>
                        <li><NavLink to="www.facebook.com"><InstagramIcon />  INSTAGRAM</NavLink></li>
                        <li><NavLink to="www.facebook.com"><WhatsAppIcon /> WHATSAPP</NavLink></li>
                        <li><NavLink to="www.facebook.com"><LocalShippingIcon /> ORDER</NavLink></li>
                        </ul>
                    </div> 
               </div>
            </div>
        </Jumbotron>
    )
}

export default FooterComponent
