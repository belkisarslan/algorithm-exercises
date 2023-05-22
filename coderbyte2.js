//divisionStringified
const divisionStringified = (n1, n2) => {
    const division = Math.floor(n1/n2).toString()
    if(division.length < 4) return division

    const divisionArr = division.split('')
    const backwordsArr = division.split('').reverse()

    let arr = []
    let j = 0

    for(let i =0; i<backwordsArr.length; i++){
        if(j != 0 && j % 3 === 0){
            arr.push(backwordsArr[i] + ",")
        }else{
            arr.push(backwordsArr[i] )
        }
        j++
    }
    return arr.reverse().join("")
}
console.log(divisionStringified(123456789, 1000))

//meanMode
const meanMode = (arr) => {

    const mean = calcMean(arr)
    const mode = calcMode(arr)
    //eğer ortalama değer mod değere eşitse 1 değilse 0 dön
    return mean === mode ? 1 : 0
}
const calcMean = (arr) => {

    let sum = 0
    for(let i=0; i<arr.length; i++){
        sum += arr[i]
    }
    return sum / arr.length
}
const calcMode = (arr) => {
    let freq = {}
    for(let j = 0; j < arr.length; j++){
        if(arr[j] in freq){
            freq[arr[j]] = freq[arr[j]] + 1
        }else{
            freq[arr[j]] = 1
        }
    }

    const max = Math.max(...Object.values(freq))
    // return freq (bu aşamada her sayıını kaçar adet olduğunu döndürdük)
    // return max  (bu aşamada en fazla tekrar eden sayının kaç tane olduğuna ulaştık)
    return iterateOverObj(freq, max)
}

const iterateOverObj = (freq, max) => {
  for(let j in freq){
    if(freq[j] === max){
        return parseInt(j)
    }
  }
}

console.log(meanMode([5, 3, 3, 3, 3, 3, 1]))

//dashInsert
//ard arda kullanılan tek sayıların arasına "-" koy
// çok güzel bi foreach örneği sonra yine bak buna !
const dashInsert = (str) => {
    let strArr = str.split("")
    let totalstr = ""
    strArr.forEach((element,index,arr) => {
        totalstr += element
        if (index + 1 == arr.length ) return totalstr
        if ( parseInt(element) && element % 2 == 1 && arr[index+1] % 2 == 1){
            totalstr += "-"
        }
    });
    return totalstr
}
console.log(dashInsert("454793c13"))

//swapCase
const swapCase = (str) => {
newArr = []
str.split("").forEach((element)=> {
    if((/[^a-zA-Z]/).test(element)){
        newArr.push(element)
    }else if((/[a-z]/).test(element)){
        newArr.push(element.toUpperCase())
    }else if((/[A-Z]/).test(element)){
        newArr.push(element.toLowerCase())
    }
})
return newArr.join("")
}
console.log(swapCase("Hello World"))

//numberAddition
const numberAddition = (str) => {
let strArr = str.split("")
let numberArr = []
for(let i = 0; i < strArr.length; i++ ){
    let lastIndex = numberArr.length - 1

    //rakam dışındaki karakterleri direkt gönder
    if((/[^0-9]/).test(strArr[i])){
        numberArr.push(strArr[i])
    }else{
        //eğer yeni oluşturduğumuz dizini içi boşsa yine direkt gönder
        if(numberArr.length === 0){
        numberArr.push(strArr[i]) 
        //eğer yeni oluşturduğumuz dizinin son elemanı rakamsa
        }else if((/[0-9]/).test(numberArr[lastIndex])){
        numberArr[lastIndex] += strArr[i]
        //eğer yeni oluşturduğumuz dizini son elemanı rakam değilse
        }else if((/[^0-9]/).test(numberArr[lastIndex])){
        numberArr.push(strArr[i])
        }
    }
}
return calculateSum(numberArr)
}
const calculateSum = (arr) => {
let sum = 0
for(let j = 0; j<arr.length; j++){
    //bir ve birden fazla basamağa sahip sayı ise
    if(arr[j].match(/\d+/)) sum += parseInt(arr[j])
}
return sum
}
console.log(numberAddition("88Hello 3World!"))

//additivePersistence
const additivePersistence = (num) => {
//eğer verilen parametre bir rakamsa 0 dön
if(num<10) return 0

//verilen parametrenin rakamları toplamı hesapla
let sumNum = sum(num)
let steps = 1

while(sumNum > 9){
steps++
sumNum = sum(sumNum)
}
return `step: ${steps} - sum: ${sumNum}`
}

const sum = (n) => {
    let sum = 0
    const arr = n.toString().split("")
    for(let i = 0; i < arr.length; i++){
        sum += parseInt(arr[i])
    }
    return sum
}
console.log(additivePersistence(2718))

//multiplicativePersistence
const multiplicativePersistence = (num) => {


let multiNum = multi(num)
let steps = 1

while(multiNum > 9){
steps++
multiNum = multi(multiNum)
}
return `step: ${steps} - multi: ${multiNum}`
}

const multi = (n) => {
    let multi = 1
    const arr = n.toString().split("")
    for(let i = 0; i < arr.length; i++){
        multi *= parseInt(arr[i])
    }
    return multi
}
console.log(multiplicativePersistence(39))