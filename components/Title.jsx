export default function Title(props){
    if(props.pequeno){
        return (
            <>
                <h1>Pequeno!</h1>
                <h1> {props.title} </h1>
                <h2> {props.subtitle} </h2>
            </>
        );
    } else {
        return (
            <>
                <h1> {props.title} </h1>
                <h2> {props.subtitle} </h2>
            </>
        );
    }
}