import { Component } from "react";

export default class CounterClass extends Component{

    state = {
        number: this.props.valorInicial ?? 0,
        step: this.props.step ?? 1
    };

    increment(){
        this.setState({
            number: this.state.number + this.state.step,
        });
    }

    decrement(){
        this.setState({
            number: this.state.number -  this.state.step,
        });
    }

    changeInput = (e) => {
        this.setState({step: +e.target.value});
    }

    // outra abordagem pra nao usar a arrow function:
    // constructor(props){
    //     super(props);

    //     this.increment = this.increment.bind(this);
    // }

    render(){
        return (
            <div>
                Contador usando classe!
                <h2> {this.props.valorInicial} </h2>
                <h2> {this.state.number} </h2>
                <input 
                    type="number" 
                    min={1} max={1000} 
                    value={this.state.step} 
                    // o + na frente do e.target eh uma gambiarra pra transformar em numero
                    onChange={this.changeInput} 
                />
                <button onClick={ ()=> this.decrement()} >-</button>
                <button onClick={ ()=> this.increment()} >+</button>
            </div>
        );
    }
}