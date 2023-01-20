import axios from 'axios'
export const FetchData=()=>{
    return axios.get(`http://localhost:3001/premiumbentiques`)
    // .then((res)=>console.log("getdata",res))
    // .catch((error)=>console.log('axios error',error))
}
export const GloriousData=()=>{
    return axios.get(`http://localhost:3001/gloriusshades`)
}

export const BelovedBrand=()=>{
    return axios.get(`http://localhost:3001/belovedbrand`)
    
}
export const Diapers=()=>{
    return axios.get(`http://localhost:3001/diapers`)
    
}
export const BathSkinCare=()=>{
    return axios.get(`http://localhost:3001/bathSkincare`)
    
}
export const FeedingKids=()=>{
    return axios.get(`http://localhost:3001/feedingkids`)
}
export const Games=()=>{
    return axios.get(`http://localhost:3001/games`)
}
export const Toys=()=>{
    return axios.get(`http://localhost:3001/toys`)
}
export const Nursery=()=>{
    return axios.get(`http://localhost:3001/nursery`)
}
export const WomensCare=()=>{
    return axios.get(`http://localhost:3001/womensCare`)
}
export const Moms=()=>{
    return axios.get(`http://localhost:3001/moms`)
}