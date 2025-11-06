import { useState } from "react"

const useShow = ()=>{
    const [show , setShow] = useState(false)
    let toggle =()=>{
        setShow(!show)
    }
    return [show , toggle , setShow];
}

export default useShow