import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardText, CardTitle } from 'reactstrap';


class WishList extends Component {

  renderCart(cart) {
    return (
      <Card>
        <CardImg top src={cart.image} alt={cart.name} />
        <CardBody>
          <CardTitle>{cart.name}</CardTitle>
          <CardText>{cart.description}</CardText>
        </CardBody>
      </Card>
    );
  }


  render() {
    if (this.props.cart != null) {
      return (
        <div className="row">
          <div className="col-12 col-md-5 m-1">
            { this.renderCart(this.props.cart) }
          </div>
        </div>
      );
    }
    else {
      return (
        <div></div>
      );
    }
  }

}

export default WishList;