export const GET_TIPS = 'GET_TIPS'

export function getTips(data){
    return {
        type: GET_TIPS,
        payload: data
    }
}

// export function fetchTips(){
//     return (dispatch) =>{
//         dipatch(getTips())
//     }
// }