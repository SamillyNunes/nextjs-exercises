export default function OnlyEven(props){
    // if(props.value%2===0){
    //     return <h1> {props.value} </h1>;
    // } else {
    //     return null;
    // }

    const valueIsEven = props.value %2 ===0;
    return valueIsEven ? <h1> {props.value} </h1> : null;
}