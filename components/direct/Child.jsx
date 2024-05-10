export default function Child(props){
    return (
        <div style={{ display: "flex", alignItems: "center" }} >
            <h3> {props.name + " "} </h3>
            <h3> {props.family} </h3>
        </div>
    );
}