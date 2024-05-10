function acao1(){
    alert("Acao #01");
}

export default function button(){

    function acao2(){
        alert('Ação #02');
    }

    function acao5(e){
        console.log(e);
        alert('Ação #05');
    }

    return (
        <div>
            <button onClick={acao1} > Click #01 </button>
            <button onClick={acao2} > Click #02 </button>
            <button onClick={function(){
                alert('Ação #03');
            }} > Click #03 </button>
            <button onClick={()=> alert('Ação #04')} > Click #04</button>
            <button onClick={acao5} > Click #05</button>
            <button onClick={e => acao5(e.altKey)} > Click #05 pt2</button>
            <input onChange={(e)=> alert('Input value:' + e.target.value)} />
        </div>
    );
}