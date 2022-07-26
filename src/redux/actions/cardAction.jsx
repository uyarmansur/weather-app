import * as actionTypes from './actionTypes'


export function getDataSuccess(data){
    return {type:actionTypes.GET_DATA,payload:data}
}
export function getData(city){
    return function(dispatch){
        let url=`https://weatherdbi.herokuapp.com/data/weather/${city}`
        return fetch(url).then(res=>res.json()).then(response=>dispatch(getDataSuccess(response)))
    }
}