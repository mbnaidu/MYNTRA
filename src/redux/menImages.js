import {IMAGES} from '../stores/imagescomponent'
import * as ActionTypes from './ActionTypes'

export const initialState = {
    mens:IMAGES.MEN,
    shorts:IMAGES.SHORTS,
    puths:IMAGES.PUTH,
    homes:IMAGES.HOME
};

export const MenImages = ( state = initialState, action ) => {
        return state;
};