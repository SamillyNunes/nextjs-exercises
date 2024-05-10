import Child from "./Child";

export default function Father(props){
    return (
        <div>
            <h2>Família {props.family} </h2>
            <Child name="Sami" family={props.family} />
            <Child name="Leo" family="Santos" />
            {/* 
            Neste caso abaixo, utilizando o spread, passamos todo o objeto de propriedades vindo de cima 
            na hierarquia. Neste caso, na mesma linha/componente podemos reescrever um dado, e o que valera sera o ultimo,
            por isso o indicado eh passar as props via spread (se for o caso) primeiro e depois as props manuais
            */}
            <Child {...props} name="Lulu" /> 
        </div>
    );
}