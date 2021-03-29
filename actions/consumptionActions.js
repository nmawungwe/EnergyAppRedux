// Creating redux actions 
export const GET_CONSUMPTION = 'GET_CONSUMPTION'

export function calculateConsumption (data) {
    return {
        type: GET_CONSUMPTION,
        payload: data
    }
}