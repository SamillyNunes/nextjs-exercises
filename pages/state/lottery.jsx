import { useState } from "react";
import LotteryNumberDisplay from "../../components/LotteryNumberDisplay";

export default function Lottery(){
    let [sortedNumbers, setSortedNumbers] = useState([]);

    function generateNumbers(){
        setSortedNumbers([]);
        let newNumbers = [];
        for(let i=0; i<6; i++){
            let n = Math.floor(Math.random()*61);
            newNumbers.push(n);
        }
        setSortedNumbers(newNumbers);
    }

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
        }} >
            <h1>Loteria do milhão!</h1>
            <p>Clique e gere 6 números aleatórios para apostar na loteria e tentar a sorte! $$$ </p>

            {sortedNumbers.length>0 && <div style={{
                
                display: "flex",
                flexDirection: "row",
            }} >
                {sortedNumbers.map(n => (<LotteryNumberDisplay number={n} />))}
            </div>}

            <button
                style={{
                    padding: "5px 200px",
                    marginTop: "20px"
                }}
                onClick={generateNumbers}
            >
                Gerar!
            </button>
        </div>
    );
}