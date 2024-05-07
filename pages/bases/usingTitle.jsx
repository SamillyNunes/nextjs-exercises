import Title from "../../components/Title";

export default function usingTitle(){
    return (
        <div>
            <h1>Usando Título:</h1><br/>
            <Title 
                title="Página de Cadastro" 
                subtitle="Incluir, alterar e excluir coisas!"    
            /><br/>

            <Title 
                title="Página Home" 
                subtitle="Consultar coisas!"    
                pequeno //quando coloca sem nada, considera que eh um valor boolean verdadeiro
            />
        </div>
    );
}