import { useEffect } from "react";
import { useState } from "react"

const OurServices =() =>{
    const [services, setServices] = useState([]);
    useEffect(()=>{
        fetch('/serviceData.json')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return [services];
}
export default OurServices;