import React, { Component } from 'react'
import HeaderComponent from './HeaderComponent'
import {Switch,Route,Redirect,withRouter} from 'react-router-dom'
import Men from './MenComponent'
import Women from './WomenComponent'
import Kids from './KidsComponent'
import Home from './Home&livingComponent'
import Offers from './OffersComponent'
import HomeComponent from './HomeComponent';
import FooterComponent from './FooterComponent'
import Login from './LoginComponent'
import trail from './trailComponent'
import { Header } from 'semantic-ui-react'
import renderComponent from './renderComponent'
import {  connect } from 'react-redux'
import { addToBasket } from '../redux/ActionCreators'
import WishList from './WishListComponent'

const mapStateToProps = state => {
    return {
        mens: state.mens,
        shorts: state.shorts,
        puths: state.puths,
        homes: state.homes
    }
}

const mapDispatchToProps = (dispatch) => ({
    addToBasket:(id,image,title,offer) => dispatch(addToBasket(id,image,title,offer))
})

class Main extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             selectedCart:null,
        }
    }
    onCartSelect(cartId) {
        console.log(cartId)
        this.setState({
            selectedCart:cartId
        })
    }
    render() {
        return (
            <div>
                {/* <HeaderComponent /> */}
                <Switch>
                    <Route exact path='/' component={HomeComponent} />
                    <Route  path="/men" component={ () => < Men 
                    mens={this.props.mens}
                    shorts={this.props.shorts}
                    puths={this.props.puths}
                    /> }/>
                    <Route exact path="/women" component={Women}/>
                    <Route exact path="/kids" component={ () => < Kids 
                        homes={this.props.homes}
                        onClick={()=> this.onCartSelect()}
                        /> }/>
                    <Route exact path="/home&amp;living" component={Home}/>
                    <Route exact path="/offers" component={Offers}/>
                    <Route exact path='/login' component={Login} />
                    <Route  path="/men" component={ () => < trail 
                    mens={this.props.mens}
                    shorts={this.props.shorts}
                    puths={this.props.puths}
                    /> }/>
                    <Route exact path='/trail1' component={ renderComponent }/>
                    <Route  path="/men" component={trail }/>
                    <Route  path="/wishlist" component={WishList  }/>
                </Switch>
                {/* <FooterComponent/> */}
            </div>
        )
    }
}


export default withRouter((connect(mapStateToProps,mapDispatchToProps)(Main)))

