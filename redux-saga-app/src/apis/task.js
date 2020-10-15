const { default: axiosService } = require("../common/axiosService")
const { API_ENDPOINT } = require("../constaints")

const url = 'products'

export const getList = ()=>{
    return axiosService.get(`${API_ENDPOINT}/${url}`)
}

export const addTask = (data)=>{
    console.log(data);
    return axiosService.post(`${API_ENDPOINT}/${url}`,{
        productName: data.title,
        productDescription: data.description,
        productStatus: data.status
    })
}