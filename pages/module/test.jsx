// O que importamos que foi exportado como padrao, pode ser referenciado/nomeado com o nome que quiser,
// o que nao for exportado em modo padrao, tem q ser importado por chaves pelo nome da funcao
import Component3, { 
    Component1 as Blabla, 
    Component2,
    Component4,
    Component5,
    Component6,
} from "../../components/module/funcionais"

export default function test(){
    return (
        <div>
            <Blabla />
            <Component2 />
            <Component3 />
            <Component4 />
            <Component5 />
            <Component6 msg="Ola" />
        </div>
    );
}
