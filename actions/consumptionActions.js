// Creating redux actions 
export const GET_CONSUMPTION = 'GET_CONSUMPTION'

export default function calculateConsumption (consumption) {
    return {
        type: GET_CONSUMPTION,
        payload: consumption
    }
}