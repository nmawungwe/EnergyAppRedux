import * as actions from '../actions/tipsActions'

export const initialState = {
    tips: [
        {
            id: 1,
            title: "Run",
            body: "Eat food"
        },
        {
            id: 2,
            title: "Swim",
            body: "Eat food"
        }
    ]
}

export default function tipsReducer(state=initialState, action){
    switch(action.type){
        case actions.GET_TIPS:
            return{
                ...state
            }
        default:
            return state
    }
}