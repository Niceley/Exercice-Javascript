function sentenceSearcher(str1, str2){ 
    let test = str1.split('.')
    let résultat = ""
    test.forEach(element => {
        let mots = element.toLowerCase().split(' ')
        if(mots.includes(str2.toLowerCase()) === true && résultat == "" && str2 != ""){
            résultat = element + "."
        }
    })
    return résultat
}

const str = "I have a cat. I have a mat. Things are going swell"
console.log(sentenceSearcher(str, ""))