import React,  { useState }  from 'react'
import { Card, Button,CardTitle } from 'reactstrap'
import FooterComponent from './FooterComponent';
import NewHeaderComponent from './NewHeaderComponent';

const PAGE_PRODUCTS = 'products';
const PAGE_CART = 'cart'


const Kids=(props)  => {

    
    const [ cart,setCart ] = useState([]);
    const [ page,setPage ] = useState('products')
   
    const addToCart = (i) => {
        setCart([...cart,i]);
    }

    const removeFromCart = (productToRemove) => {
        setCart(
            cart.filter((product)=>product !== productToRemove)
        );
    }

    const navigateTo = (nextPage) => {
        setPage(nextPage);
    }

    const renderItems = props.homes.map((i)=>{
        return(
            <div key={i.id} className="p-2">
                    <Card >
                        <img  src={i.image} width="215"/>
                        <CardTitle to="/trail" className="pl-4 pb-0 p-0" style={{ color:"black",fontWeight:"bold" }}>{cart.offer}</CardTitle>
                        <Button onClick={() => addToCart(i) }color="primary">ADD TO CART</Button>
                    </Card>
            </div>
        )
    })
    return (
            <div>
                <NewHeaderComponent />
                <div className="m-5 row">
                    {renderItems}
                </div>
                <FooterComponent />
            </div>
    )
}


export default Kids
