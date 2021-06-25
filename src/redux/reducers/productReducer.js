import { ActionTypes } from "../constants/action-types"

const intialState = {
    product: [{
        id: 1,
        title: "Dipesh",
        category: "programmer",
    }]
}


export const productReducer = (state = intialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_PRODUCT:
            return state;
        default:
            return state;
    }
}