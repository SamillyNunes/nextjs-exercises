export default function jsx4(){
    const subtitle = "Estou no Javascript!";
    const trechoH3 = <h3> {3*3} </h3>

    return (
        <div>
            <h1>Integração JS e JSX</h1>
            <h2> {subtitle} </h2>
            {trechoH3}
            <h4> {between(5,2,9)} </h4>
        </div>
    );
}

function between(valor, min, max){
    if(valor>=min && valor <=max){
        return "Sim";
    } else {
        return "Não";
    }
}