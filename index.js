//reverse string
function reverseString(str){
    const strArray = str.split("")
    //split methoduyla kelimeyi harflere ayırdık
    const arry= strArray.reverse()
    //reverse methoduyla ters çevirdik
    const result = arry.join("")
    //join ile birleştirdik
    console.log(`reverse string: ${result}`)
    return result
}
reverseString("hello")

//faktorialize number
function faktorialize(num){
    let product =1
    for(let i=1; i<=num; i++){
        product *=i
    }
    return product
}
console.log(`faktorialize number: ${faktorialize(5)}`)

//find the longest word in a string
function find(str){
    const splitText =str.split(" ")
    let maxNumber = 0
    for(let i=0; i<splitText.length; i++){
        maxNumber= Math.max(maxNumber, splitText[i].length)
    }
    console.log(`find the longest word in a string: ${maxNumber}`)
    return str.length
}
find("The quick brown fox jebped over the lazy dog")