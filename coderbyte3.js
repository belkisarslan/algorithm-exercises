//firstNonReperating
//tekrar etmeyen ilk harfi bul
const firstNonReperating = (str) => {
    const strng = str.toLowerCase()

    let returnValue = ""
    for(let i=0; i<strng.length; i++){
        let itemInTheLoop = strng[i]
        let newStr = strng.slice(0,i) + strng.slice(i+1)
        console.log(itemInTheLoop + "-" + newStr)
        if(returnValue === "" && newStr.indexOf(itemInTheLoop) === -1){
            returnValue = itemInTheLoop
        }
    }
    return returnValue === "" ? "None" : returnValue

}
console.log(firstNonReperating("sTreSS"))