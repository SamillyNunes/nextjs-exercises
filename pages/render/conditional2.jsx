import If from "../../components/If";

export default function conditional2(){

    const number = 4;

    return (
        <div>
            <If condition={ number%2==0 } >
                O número é par!
            </If>
            
            <If condition={ number%2==1 } >
                O número é ímpar!
            </If>
        </div>
    );
}