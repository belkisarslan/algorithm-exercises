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
