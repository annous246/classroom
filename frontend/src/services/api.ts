import axios ,{ AxiosResponse} from "axios"




async function post(url:string){
    let payload={
        data:{},
        ok:0,
        message:""
    }
    await axios.post(url)
    .then((res:AxiosResponse)=>{

        if(res.data.ok){

            payload.data=res.data.data


        }
        else{
            console.log(res.data.message)
        }
        
        payload.message=res.data.message
        payload.ok=res.data.ok
    })
    .catch((e)=>{
        console.log(e.message)
        payload.ok=-1
    })

return payload
}


async function get(url:string){
    let payload={
        data:{},
        ok:0,
        message:""
    }
    await axios.post(url)
    .then((res:AxiosResponse)=>{

        if(res.data.ok){

            payload.data=res.data.data


        }
        else{
            console.log(res.data.message)
        }
        
        payload.message=res.data.message
        payload.ok=res.data.ok
    })
    .catch((e)=>{
        console.log(e.message)
        payload.ok=-1
    })

return payload
}





export {get,post}