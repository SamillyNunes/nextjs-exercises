interface PessoaProps{
    name: string,
    age?: number,
}

export default function Pessoa(props: PessoaProps){
    return (
        <div>
            <div> Nome: {props.name} </div>
            <div> Idade: {props.age ?? "Não informada"} </div>
        </div>
    );
}