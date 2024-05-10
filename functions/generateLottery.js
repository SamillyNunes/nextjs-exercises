export function generateLottery(max=6){
    if(max<6 || max>60) {
        throw 'Quantidade inválida!'
    };

    let newNumbers = [];
    for(let i=0; i<max; i++){
        let n = Math.floor(Math.random()*61);

        while(newNumbers.includes(n)){
            n = Math.floor(Math.random()*61);
        }

        newNumbers.push(n);
    }
    return newNumbers.sort((n1, n2)=> n1-n2);
}