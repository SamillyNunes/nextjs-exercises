export function Component1(props){
    return <h2>Component1</h2>;
}

export const Component2 = function(){
    return <h2>Component2</h2>
}

export default function Component3(){
    return <h3>Component 3</h3>;
}

export const Component4 = props => <h2>Component #04</h2>;

const Component5 = () => {
    return <h2>Component #05</h2>;
};

const Component6 = (props) => (
    <div>
        <h2>Component #06</h2>
        <h3> {props.msg} </h3>
    </div>
);


export {
    Component5, Component6
}