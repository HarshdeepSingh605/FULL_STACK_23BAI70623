import { useEffect, useState } from "react";

function UseWindowSize(){
    const [windowSize , setWindowSize] = useState(window.innerWidth);

    useEffect(()=>{
        const handleLoading  = () => {
            setWindowSize(window.innerWidth);
        }
        
        window.addEventListener("resize",handleLoading);

        return ()=> { 
            window.removeEventListener("resize" , handleLoading);
        }
    },[]);
    return windowSize ;
}

export default UseWindowSize;