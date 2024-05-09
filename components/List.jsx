export default function List(props){
    return (
        <div>
            <h1>Lista de tarefas</h1>
            <br/>
            <ul style={{
                listStyle: "none",
                marginLeft: "16px",
            }} >
                {props.children}
            </ul>
        </div>
    );
}