import React,{Component} from 'react'
import {NavLink} from 'react-router-dom'
import {  Popup } from 'semantic-ui-react'
import {Navbar,Button, NavbarBrand,Nav,Jumbotron,Card,CardBody,CardText,CardImg,CardImgOverlay,CardTitle,CardHeader} from 'reactstrap'
import '../styles/Header.css'
import SearchIcon from '@material-ui/icons/Search';
import PersonIcon from '@material-ui/icons/Person';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import { MDBIcon, MDBCol,MDBFormInline, MDBBtn } from "mdbreact";
import { useStateValue } from '../redux/StateProvider'

function  NewHeaderComponent() {    

    const [{ basket } ]= useStateValue();
    
        return (
            <div>
            <Navbar className="p-0 navbar-expand-lg " >
                <NavbarBrand className="ml-5" href="/">
                        <img  src={require('../stores/myntralogo.png')} height="70" width="70"/>
                </NavbarBrand>
                <Nav Navbar className="pt-3 mr-4">
                    <NavLink className="navbar__link block-example"    exact activeClassName="navbar__link--active" className="navbar__link"to="/men" >
                    <Popup trigger={<a style={{color:"black"}}>MEN</a>} flowing hoverable className="mr-5 pl-5">
                            <Jumbotron className="mt-4" style={{color:"red"}}>
                            <div className="container">
                                <div className="row">
                                    <div className="col-auto row justify-content-between">
                                        <ul>
                                            <h4 style={{color:"tomato", fontWeight:"bold"}}>Topwear</h4>
                                        </ul>
                                    </div>
                                    <div className="col-auto">
                                        <ul>
                                        <h4 style={{color:"tomato", fontWeight:"bold"}}>Bottomwear</h4>
                                        </ul>
                                    </div>
                                    <div className="col-auto">
                                        <ul>
                                        <h4 style={{color:"tomato", fontWeight:"bold"}}>Fashion</h4>
                                        </ul>
                                    </div>
                                    <div className="col-auto">
                                        <ul>
                                        <h4 style={{color:"tomato", fontWeight:"bold"}}>Sports</h4>
                                        </ul>
                                    </div>
                                    <div className="col-auto">
                                        <ul>
                                        <h4 style={{color:"tomato", fontWeight:"bold"}}>Fashion</h4>
                                        </ul>
                                    </div>
                                </div>
                                </div>
                            </Jumbotron>
                        </Popup>
                    </NavLink>
                    <NavLink activeClassName="navbar__link--active" className="navbar__link" to="/women">                            
                    <Popup trigger={<a style={{color:"black"}}>WOMEN</a>} flowing hoverable>
                            <Jumbotron className="mt-4" style={{color:"hotpink"}}>
                            <div className="container">
                                <div className="row">
                                    <div className="col-auto row justify-content-between">
                                        <ul>
                                            <h4 style={{color:"deeppink", fontWeight:"bold"}}>Topwear</h4>
                                        </ul>
                                    </div>
                                    <div className="col-auto">
                                        <ul>
                                        <h4 style={{color:"deeppink", fontWeight:"bold"}}>Bottomwear</h4>
                                        </ul>
                                    </div>
                                    <div className="col-auto">
                                        <ul>
                                        <h4 style={{color:"deeppink", fontWeight:"bold"}}>Footwear</h4>
                                        </ul>
                                    </div>
                                    <div className="col-auto">
                                        <ul>
                                        <h4 style={{color:"deeppink", fontWeight:"bold"}}>Sports</h4>
                                        </ul>
                                    </div>
                                    <div className="col-auto">
                                        <ul>
                                        <h4 style={{color:"deeppink", fontWeight:"bold"}}>Fashion</h4>
                                        </ul>
                                    </div>
                                </div>
                                </div>
                            </Jumbotron>
                        </Popup>                     
                    </NavLink>
                    <NavLink activeClassName="navbar__link--active" nMouseOut={()=>this.okid()}  className="navbar__link" to="/kids">
                    <Popup trigger={<a style={{color:"black"}}>KIDS</a>} flowing hoverable>
                            <Jumbotron className="mt-4" style={{color:"orange"}}>
                            <div className="container">
                                <div className="row">
                                    <div className="col-auto row justify-content-between">
                                        <ul>
                                            <h4 style={{color:"darkorange", fontWeight:"bold"}}>Topwear</h4>
                                        </ul>
                                    </div>
                                    <div className="col-auto">
                                        <ul>
                                        <h4 style={{color:"darkorange", fontWeight:"bold"}}>Bottomwear</h4>
                                        </ul>
                                    </div>
                                    <div className="col-auto">
                                        <ul>
                                        <h4 style={{color:"darkorange", fontWeight:"bold"}}>Footwear</h4>
                                        </ul>
                                    </div>
                                    <div className="col-auto">
                                        <ul>
                                        <h4 style={{color:"darkorange", fontWeight:"bold"}}>Sports</h4>
                                        </ul>
                                    </div>
                                    <div className="col-auto">
                                        <ul>
                                        <h4 style={{color:"darkorange", fontWeight:"bold"}}>Fashion</h4>
                                        </ul>
                                    </div>
                                </div>
                                </div>
                            </Jumbotron>
                        </Popup>
                    </NavLink>
                    <NavLink activeClassName="navbar__link--active" className="navbar__link" to="/home&amp;living">
                    <Popup trigger={<a style={{color:"black"}}>HOME&amp;LIVING</a>} flowing hoverable>
                            <Jumbotron className="mt-4" style={{color:"yellow"}}>
                            <div className="container">
                                <div className="row">
                                    <div className="col-auto row justify-content-between">
                                        <ul>
                                            <h4 style={{color:"gold", fontWeight:"bold"}}>Topwear</h4>
                                        </ul>
                                    </div>
                                    <div className="col-auto">
                                        <ul>
                                        <h4 style={{color:"gold", fontWeight:"bold"}}>Bottomwear</h4>
                                        </ul>
                                    </div>
                                    <div className="col-auto">
                                        <ul>
                                        <h4 style={{color:"gold", fontWeight:"bold"}}>Footwear</h4>
                                        </ul>
                                    </div>
                                    <div className="col-auto">
                                        <ul>
                                        <h4 style={{color:"gold", fontWeight:"bold"}}>Sports</h4>
                                        </ul>
                                    </div>
                                    <div className="col-auto">
                                        <ul>
                                        <h4 style={{color:"gold", fontWeight:"bold"}}>Fashion</h4>
                                        </ul>
                                    </div>
                                </div>
                                </div>
                            </Jumbotron>
                        </Popup>
                    </NavLink>
                    <NavLink activeClassName="navbar__link--active" className="navbar__link" to="/offers">
                    <Popup trigger={<a style={{color:"black"}}>OFFERS</a>} flowing hoverable>
                            <Jumbotron className="mt-4" style={{color:"green"}}>
                            <div className="container">
                                <div className="row">
                                    <div className="col-auto row justify-content-between">
                                        <ul>
                                            <h4 style={{color:"forestgreen ", fontWeight:"bold"}}>Topwear</h4>
                                        </ul>
                                    </div>
                                    <div className="col-auto">
                                        <ul>
                                        <h4 style={{color:"forestgreen ", fontWeight:"bold"}}>Bottomwear</h4>
                                        </ul>
                                    </div>       
                                </div>
                                </div>
                            </Jumbotron>
                        </Popup>
                    </NavLink>
                    <MDBCol className="md-form mt-3">
                            <input  type="text" placeholder="Search" aria-label="Search" />
                    </MDBCol>
                    <NavLink  activeClassName="navbar__link--active"  className="navbar__link" to="/profile">
                        <Popup  trigger={<a  style={{color:"black"}}>PROFILE</a>} flowing hoverable className="mr-5 pl-5">
                        <Card className="mt-4 ">
                            <CardHeader>
                                <CardText>Welcome</CardText>
                                <NavLink to="/login"><Button  outline color="danger">Login/SignUp</Button></NavLink>
                            </CardHeader>
                            <CardBody>
                                <CardTitle>Special title treatment</CardTitle>
                                <CardText>With support</CardText>
                            </CardBody>
                            </Card>
                        </Popup>
                        <PersonIcon color="action" />
                    </NavLink>
                    <NavLink activeClassName="navbar__link--active" className="navbar__link" to="/wishlist">
                            <a style={{color:"black"}}>WISHLIST {basket?.length}</a>
                    </NavLink>
                    <NavLink activeClassName="navbar__link--active" className="navbar__link" to="/bag">
                        <a style={{color:"black"}} BAG></a>
                        <LocalMallIcon color="action"  />
                    </NavLink>
                </Nav>
            </Navbar>
        </div>
        )
    }


export default NewHeaderComponent
