export default function IndirectChild(props){
    return (
        <div>
            <h1>Child</h1>
            {/* Neste primeiro caso abaixo, esta passando implicitamente o evento do clique para a 
            funcao, mas se nao for precisar dessa info nao precisa passa-la, fazendo entao como no exmplo 2 */}
            <button onClick={props.callback} >Talk to dad #1 </button>
            <button onClick={()=>props.callback("Passei no Concurso!!!", "Amo você!", "Uhuuuul!!!")} >Talk to dad #2 </button>
        </div>
    );
}