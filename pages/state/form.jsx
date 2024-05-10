import { useState } from "react";

export default function Form(){

    const [value, setValue] = useState("inicial");

    function changeValue(){
        setValue(value+"!");
    }

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
        }}>
            <span> {value} </span>
            <input type="text" value={value} onChange={e => setValue(e.target.value)} />
            <button onClick={changeValue} >Exclamação</button>
        </div>
    );
}