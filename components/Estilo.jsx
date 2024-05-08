export default function Estilo(props){
    return (
        <div>
            <h1 style={ { backgroundColor: props.value >=0 ? "#2d2" : "#D22" } } >
                Texto
            </h1>
        </div>
    );
}