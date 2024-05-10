import IndirectChild from "./Child";

export default function IndirectFather(props){

    function talkToMe(params1, params2, params3){
        alert(`${params1}, ${params2}, ${params3}`);
        console.log(params1);
    }

    return (
        <div>
            <IndirectChild callback={talkToMe} />
        </div>
    );
}