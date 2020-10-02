import * as ActionTypes from './ActionTypes'

export const addToBasket = (id,image,title,offer) => ({
    type : ActionTypes.ADD_TO_BASKET,
    payload: {
        id:id,
        image:image, 
        title:title,
        offer:offer
    }
});