import {combineReducers} from 'redux'

import consumptionReducer from './consumptionReducer'

const rootReducer = combineReducers({
    data : consumptionReducer
})

export default rootReducer