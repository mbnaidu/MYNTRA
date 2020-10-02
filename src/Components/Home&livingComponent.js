import React, { useState } from 'react'
import {Link, NavLink} from 'react-router-dom'
import {  Popup } from 'semantic-ui-react'
import {Navbar,Button, NavbarBrand,Nav,Jumbotron,Card,CardBody,CardText,CardTitle,CardImgOverlay,CardHeader} from 'reactstrap'
import '../styles/Header.css'
import SearchIcon from '@material-ui/icons/Search';
import PersonIcon from '@material-ui/icons/Person';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import { MDBIcon, MDBCol,MDBFormInline, MDBBtn } from "mdbreact";
import '../styles/women.css'
import  NewHeaderComponent  from './NewHeaderComponent'
import FooterComponent from './FooterComponent'

const PAGE_PRODUCTS = 'products';
const PAGE_CART = 'cart'

function Home() {
    const [ cart,setCart ] = useState([]);
    const [ page,setPage ] = useState('products')
    const [products] = useState([
        {
            name:'shirts',
            cost: '$3.88',
            image:'assets/images/forMen/charlie-4.jpg',
        },
        {
            name:'pant',
            cost: '$19.8',
            image:'assets/images/forMen/charlie-4.jpg',
        },
        {
            name:'T-shirt',
            cost: '$0.88',
            image:'assets/images/forMen/charlie-4.jpg',
        },
        {
            name:'shorts',
            cost: '$1.38',
            image:'assets/images/forMen/charlie-4.jpg',
        },
        
    ])
    const addToCart = (product) => {
        setCart([...cart,product]);
    }

    const removeFromCart = (productToRemove) => {
        setCart(
            cart.filter((product)=>product !== productToRemove)
        );
    }

    const navigateTo = (nextPage) => {
        setPage(nextPage);
    }
    const renderProducts = () => 
        <>
            <div className="row">
                {products.map((product,idx) => (
                    <div key={idx}>
                        <Card className="women">
                            <CardTitle className="cardTitle">{product.name}</CardTitle>
                            <img className="cardImg" src={product.image} />
                            <strong className="cardTitle">{product.cost}</strong>
                            <Button onClick={() => addToCart(product)}>ADD TO CART</Button>
                        </Card>
                    </div>
                ))}
            </div>
        </>
    
        const renderCart = () => 
        
        <>
            <div className="row m-5">
                {cart.map((product,idx) => (
                    <div key={idx}>
                        <Card className="women">
                            <CardTitle className="cardTitle">{product.name}</CardTitle>
                            <img className="cardImg" src={product.image} />
                            <strong className="cardTitle">{product.cost}</strong>
                            <Button onClick={() => removeFromCart(product)}>RemoveFrom</Button>
                        </Card>
                    </div>
                ))}
            </div>
        </>
        
        return (
        <div >
            <Navbar className="p-0 navbar-expand-lg " >
                <NavbarBrand className="ml-5" href="/">
                        <img  src={require('../stores/myntralogo.png')} height="70" width="70"/>
                </NavbarBrand>
                <Nav Navbar className="pt-3 mr-4">
                    <NavLink className="navbar__link block-example"    exact activeClassName="navbar__link--active" className="navbar__link"to="/men" >
                        MEN
                    </NavLink>
                    <NavLink activeClassName="navbar__link--active" className="navbar__link" to="/women">                            
                        WOMEN                     
                    </NavLink>
                    <NavLink activeClassName="navbar__link--active" nMouseOut={()=>this.okid()}  className="navbar__link" to="/kids">
                        KIDS
                    </NavLink>
                    <NavLink activeClassName="navbar__link--active" className="navbar__link" to="/home&amp;living">
                        HOME&LIVING
                    </NavLink>
                    <NavLink activeClassName="navbar__link--active" className="navbar__link" to="/offers">
                        OFFERS
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
                            <Link activeClassName="navbar__link--active" className="navbar__link" onClick={()=> navigateTo(PAGE_CART)} style={{color:"black"}}>WISHLIST {cart.length} </Link>
                    <NavLink activeClassName="navbar__link--active" className="navbar__link" to="/bag">
                        <a style={{color:"black"}} BAG></a>
                        <LocalMallIcon color="action"  />
                    </NavLink>
                </Nav>
            </Navbar>
            {page === PAGE_PRODUCTS && renderProducts()}
            {page === PAGE_CART && renderCart()}
            <FooterComponent />
        </div>
    )
}

export default Home
