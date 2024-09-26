import React from "react"
import "../StyleSheets/Contador.css"

function Contador({ numClicks }){
    return(
        <div className="contador">
            {numClicks}
        </div>
    )
} 

export default Contador