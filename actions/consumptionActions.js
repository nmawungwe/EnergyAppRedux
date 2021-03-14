// Creating redux actions 
export const GET_CONSUMPTION = 'GET_CONSUMPTION'

export function calculateConsumption (consumption) {
    return {
        type: GET_CONSUMPTION,
        payload: consumption
    }
}