export default function Loop1(){

    const aprovados = ['João', 'Ana', 'Bia', 'Sami', 'Leo', 'Daniel'];

    // function renderList(){
    //     const itens = [];

    //     for (let i=0; i<aprovados.length; i++){
    //         itens.push(<li key={i} >{aprovados[i]}</li>);
    //     }

    //     return itens;
    // }

    function renderList(){
        return aprovados.map((nome, index) => <li key={index}>{nome}</li> );
    }

    return (
        <ul>
            {renderList()}
        </ul>
    );
}