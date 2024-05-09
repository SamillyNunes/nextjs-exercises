import Item from "../../components/Item";
import List from "../../components/List";

export default function ComponentWithChildren(){
    return (
        <div>
            <List>
                <Item content={"Estudar CSS"} />
                <Item content={"Estudar JS"} />
                <Item content={"Lavar louça"} />
                <Item content={"Fazer oração"} />
            </List>
        </div>
    );
}