import React from 'react'
import FullPageLoader from "../components/FullPageLoader/index";

const useFullPageLoader = () =>{

    const[loading, setloading] = useState(false)
    return[
        loading ? <FullPageLoader /> : null,
        () => setloading(true),
        () => setloading(false)
    ]
}


export default useFullPageLoader;