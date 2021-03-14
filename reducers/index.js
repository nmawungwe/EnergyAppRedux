import {combineReducers} from 'redux'

import consumptionReducer from './consumptionReducer'

const rootReducer = combineReducers({
    consumption : consumptionReducer
})

export default rootReducer