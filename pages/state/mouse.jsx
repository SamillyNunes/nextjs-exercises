import { useState } from "react";

export default function mouse(){

    // o useState retorna um array com dois elementos: atributo e funcao de alteracao do tributo. Neste caso, poderia
    // tambem ser utilizado da seguinte maneira:
    // x = useState(0)[0]  
    // setx = useState(0)[1]  
    
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const style = {
        backgroundColor: "#222",
        color: "#fff",
        height: "100vh",

        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    };

    function onMouseMove(ev){
        setX(ev.clientX);
        setY(ev.clientY);
    }

    return (
        <div style={style} onMouseMove={onMouseMove} >
            <span>Eixo X: {x} </span>
            <span>Eixo Y: {y} </span>
        </div>
    );
}