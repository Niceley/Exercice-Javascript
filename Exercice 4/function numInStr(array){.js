function numInStr(array){
    résultat = []
    array.forEach(element => {
        if(/\d/.test(element) === true)
        résultat.push(element)
    });
    return résultat
}

console.log(numInStr(["1a", "a", "2b", "b"]))