import { useState } from "react";
import CounterDisplay from "../../components/CounterDisplay";

export default function counter(){

    const [value, setValue] = useState(0);

    function decrementCounter(){
        if(value===0) return;

        setValue(value-1);
    }

    const buttonStyle = {
        padding: "2px 10px"
    };

    return (
        <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column"
        }}>
            <h1>Contador</h1>

            <CounterDisplay value={value} />
            
            <div>
                <button onClick={decrementCounter} style={buttonStyle} >-</button>
                <button onClick={()=> setValue(value+1) } style={buttonStyle} >+</button>
            </div>
        </div>
    );
}