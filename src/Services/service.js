import axios from "axios"

export const getData = ()=>{
   return axios.get("https://coffer-backend.onrender.com").then((res)=>{
    // console.log("first",res)    
    return res

    }).catch((err)=>{
        console.log("err in getdata",err)
    })
}
