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

//changingSequence
/*
dizide verilen rakamların artış ve azalış eğiliminin değiştiği indexe ulaşmamız istenmektedir
örneğin dizi 1 2 3 4 şeklinde artarak giderken bir anda 3 2 1 şeklinde azalmaya başlarsa ya da tam tersi
9 8 7 6 7 8 9 azalarak giderken bir anda artmaya başladığı indexe ulaşmaya çalışıyoruz
*/
const changingSequence = (arr) => {
let newArr = []
let tendency = "increasing"

for(let i=1; i<arr.length; i++ ){
    newArr.push(arr[i] - arr[i-1])
}

if(newArr[0] < 0) tendency = "decreasing"

if(tendency === "increasing"){
    for(let i=0; i<newArr.length; i++){
        if(newArr[i] < 1) return i
    }
}

if(tendency === "decreasing"){
    for(let i=0; i<newArr.length; i++){
        if(newArr[i] > 0) return i
    }
}
return -1
}
console.log(changingSequence([1, 2, 4, 6, 4, 3, 2, 1]))
console.log(changingSequence([10, 9, 8, 7, 6, 7, 8, 9]))
console.log(changingSequence([1, 2, 3, 4]))

//overlappingRanges
/*
Verilen arrayin 0. ve 1. indexleri aralığındaki rakamlar ve
2. ve 3. indexleri aralığındaki rakamların kesişim kümesinin eleman sayısı 
arrayin 4. indexine eşitse true dön değilse falde dön
Yani [4, 5, 6, 7, 8, 9, 10] ve [2, 3, 4, 5, 6] kesişim sayıları arrayin en sonunda bulunan
[3] e eşit mi?
*/
const overlappingRanges = (arr) => {
    const firstSet = createArr(arr[0],arr[1])
    const secondSet = createArr(arr[2],arr[3])
    
    let intersectionSet = []

    firstSet.map(item => {
        if(secondSet.indexOf(item) > -1 ) intersectionSet.push(item)
    })
    return intersectionSet.length >= arr[4] ? true : false
}
const createArr = (x, y) => {
    let subSet = []
    for(let i = x; i <= y; i++){
        subSet.push(i)
    }
    return subSet
}
console.log(overlappingRanges([4, 10, 2, 6, 3]))

//superIncreasing
/*
Her index kendinden önceki indexlerin toplamından büyük ise true
değil ise false dön
*/
const superIncreasing = (arr) => {
    for(let i = 1; i<arr.length ; i++){
        let sum = sumOfSubsets(arr, i)
        console.log(`${arr[i]} - ${sum}`)
        if(sum >= arr[i]) return false
    }
  return true
}
const sumOfSubsets = (arr, index) => {
    let sum = 0
    for(let j=0; j<index; j++){
        sum += arr[j]
    }
    return sum
}
console.log(superIncreasing([1, 3, 6, 13, 54]))

//hammingDistance
//Verilen iki değerin indexlerini karşılaştır ve farklı olan değer sayısını dön
const hammingDistance = (p1, p2) => {
    let hamm = 0
    for(let i=0; i<p1.length; i++){
        if(p1[i] != p2[i]) hamm += 1
    }
    return hamm

}
console.log(hammingDistance("karoline", "kathrine"))
console.log(hammingDistance("0000", "1111"))

//bitWise
/*
verilen iki değerin indexlerini karşılaştır
karşılaştırılan iki index'ten herhangi biri 1 olması durumunda 1 dön
değilse 0 dön
"1100" "0111" => 1111 döner
"0010" "0110" => 0110 döner
*/
const bitWise = (arr) => {
    const p1 = arr[0]
    const p2 = arr[1]

    let newBit = ""

    for(let i = 0; i < arr[0].length; i++){
        if(p1.charAt(i) === "1" || p2.charAt(i) === "1"){
            newBit += "1"
        }else{
            newBit += "0"
        }
    }
    return newBit

}
console.log(bitWise(["1100", "0111"]))

//wavesorting
const waveSorting = (arr) => {
 const sortedArr = arr.sort((a, b) => a-b)
 let newArr = []
 for(let i = 0; i<sortedArr.length; i +=2){
    newArr.push(sortedArr[i+1])
    newArr.push(sortedArr[i])
 }
 
 return newArr
}
console.log(waveSorting([3, 6, 5, 10, 20, 7]))

//arrayMatching
const arrayMatching = (arr) => {
    //rakamları array olarak döndüren regex
    //! önemli olan nokta şu ki: 99'u [9, 9] şeklinde ayırmasın [99] olarak alsın
    const arr1 = arr[0].match(/[0-9]+/gi)
    const arr2 = arr[1].match(/[0-9]+/gi)

    let longArr = "equel"
    if(arr1.length > arr2.length) longArr = "first"
    if(arr2.length > arr1.length) longArr = "second"

    let newArr = []
    if(longArr === "equel") newArr = createArray(arr1, arr2, arr2.length)
    if(longArr === "first") newArr = createArray(arr1, arr2, arr2.length, "first")
    if(longArr === "second") newArr = createArray(arr1, arr2, arr1.length, "second")

    let result = newArr[0]
    for(let i= 1; i<newArr.length; i++){
        result = result + "-" + String(newArr[i])
    }
    return result
    
}

const createArray = (a, b, len, balance="equel") => {

    let arr = []
    for(let i = 0; i< len; i++){
        //rakamlar string formatında olduğu için parseInt kullandık
        arr.push(parseInt(a[i]) + parseInt(b[i]))
    }
    if(balance === "equel") return arr
    if(balance === "first") return arr.concat(a.slice(-(a.length - b.length)))
    if(balance === "second") return arr.concat(b.slice(-(b.length - a.length)))

    
}
console.log(arrayMatching(["[1, 2, 5, 6]","[5, 2, 8, 11]"]))