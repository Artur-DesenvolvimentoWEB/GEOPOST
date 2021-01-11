let btnEnviar = document.getElementById('btnEnviar');

let timeCidade = {
    time: "", 
    cidade: ""
}
let listaTimesFormatados = []

btnEnviar.addEventListener("click",() => {
    event.preventDefault()
    let listaTimes = document.getElementById("listaTimes").value

    let arrayTimes1 = listaTimes.split("\n")
    arrayTimes1.map(elemento => {
        let timeCidadeElemento = elemento.split(";");
        timeCidade = {time:timeCidadeElemento[0],cidade:timeCidadeElemento[1]}
        listaTimesFormatados.push(timeCidade)
    })

    console.log(listaTimesFormatados);
    
    let listTeste = listaTimesFormatados.map( timeFormatado => ({sort: Math.random(), value: timeFormatado.time}))
        .sort((a, b) => a.sort - b.sort)
        .map( a => {
           return a.value
        });
        for(var i = 0; i < arrayTimes1.length ; i++){
                 console.log(arrayTimes1[i].time)}

    


    // let unshuffled = ['hello', 'a', 't', 'q', 1, 2, 3, {cats: true}]

     //let shuffled = unshuffled
     //  .map((a) => ({sort: Math.random(), value: a}))
     //  .sort((a, b) => a.sort - b.sort)
    //.map((a) => a.value)

    console.log(listTeste)
    // for(var i = 0; i < arrayTimes1.length ; i++){
    //     console.log(arrayTimes1[i])
    // }
    
});