import { useState } from "react";
import LotteryNumberDisplay from "../../components/LotteryNumberDisplay";
import { generateLottery } from "../../functions/generateLottery";

export default function Lottery(){
    const [sortedNumbers, setSortedNumbers] = useState([]);
    const [lengthNumbers, setLengthNumbers] = useState(6);

    function generateNumbers(){
        setSortedNumbers([]);
        const numbers = generateLottery(lengthNumbers);
        setSortedNumbers(numbers);
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

            <input 
                placeholder="Defina a quantidade de números que deseja gerar:" 
                onChange={e => setLengthNumbers(e.target.value)} 
                style={{
                    padding: "5px",
                    width:"400px",
                    marginTop: "20px",

                }}
            />
        </div>
    );
}