import Pessoa from "@/components/Pessoa";

export default function exampleTS(){
    return (
        <div>
            <Pessoa name="Sami" age={24} />
            <Pessoa name="Leo" />
        </div>
    );
}