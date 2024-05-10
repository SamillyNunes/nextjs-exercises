import { Component } from "react";
import CounterClass from "../../components/CounterClass";

export default class Counter extends Component {
    render(){
        return (
            <div>
                <h1>Teste classe</h1>

                <CounterClass valorInicial={100} step={2} />
            </div>
        );
    }
}