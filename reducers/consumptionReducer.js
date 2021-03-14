
import * as actions from '../actions/consumptionActions'

export const initialState = {
    consumption: 0,
}

export default function consumptionReducer(state=initialState, action){
    switch(action.type){
        case actions.GET_CONSUMPTION:
            return {...state,
                    consumption: action.payload}
        default:
            return state
    }
}
