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

//find the longest word in a string 2. method
function finded(str){
    const splitText =str.split(" ")
    //karakterleri böldükten sonra boş bir array oluşturduk
    let numericArray = []
    for(let i=0; i<splitText.length; i++){
        numericArray.push(splitText[i].length)
        //karakterlerin uzunluklarını boş arraye pushladık
    }
    return Math.max(...numericArray)
    //max methoduyla en büyük olanı bulduk
}
console.log(`find the longest word in a string 2. method: ${finded("The quick brown fox jebped over the lazy dog")}`)

//return largest numbers in arrays
function largestOf(arr){
    let largestNumArr= []
    //boş bi array oluşturduk
    for(let i=0; i<arr.length; i++){
        largestNumArr.push(Math.max(...arr[i]))
        //elemanlardan en büyüklerini yeni arraye pushladık
    }
    console.log(`return largest numbers in arrays: ${largestNumArr}`)
    return largestNumArr
}
largestOf([[4,5,1,3],[13,27,18,26],[32,35,37,39],[1000,1001,857,1]])