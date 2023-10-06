function expandedForm(num){
    let Nombre = num.toString().split('').reverse()
    résultat = []
    Nombre.forEach(function callback(value, index){
        if(value != 0)
        résultat.push(Number(value) * Math.pow(10, index))
   });
   return résultat.reverse().join(" + ")
}

console.log(expandedForm(70304))