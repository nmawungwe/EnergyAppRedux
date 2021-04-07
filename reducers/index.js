import {combineReducers} from 'redux'

import consumptionReducer from './consumptionReducer'
import tipsReducer from './tipsReducer'

const rootReducer = combineReducers({
    data : consumptionReducer,
    tips:  tipsReducer
})

export default rootReducer