import * as actions from '../actions/consumptionActions'

export const initialState = {
    tvNumber: 0,
    decoderNumber: 0,
    soundSystemNumber: 0,
    lightsNumber: 0,
    heatersNumber: 0,
    stovesNumber: 0,
    fridgesNumber: 0,
    kettlesNumber: 0,
    microwavesNumber: 0,
    computersNumber: 0,
    printersNumber: 0,
    modemsNumber: 0,
    electricblanketsNumber: 0,
    phonesNumber: 0,
    totalUsage: 0,
}

export default function consumptionReducer(state=initialState, action){
    switch(action.type){
        case actions.GET_CONSUMPTION:
            return {...state,
                tvNumber : action.payload.tvNumber,
                decoderNumber: action.payload.decoderNumber,
                soundSystemNumber: action.payload.soundSystemNumber,
                lightsNumber: action.payload.lightsNumber,
                heatersNumber: action.payload.heatersNumber,
                stovesNumber: action.payload.stovesNumber,
                fridgesNumber: action.payload.fridgesNumber,
                kettlesNumber: action.payload.kettlesNumber,
                microwavesNumber: action.payload.microwavesNumber,
                computersNumber: action.payload.computersNumber,
                printersNumber: action.payload.printersNumber,
                modemsNumber: action.payload.modemsNumber,
                electricblanketsNumber: action.payload.electricblanketsNumber,
                phonesNumber: action.payload.phonesNumber,
                totalUsage: action.payload.totalUsage,        
            }
        default:
            return state
    }
}
