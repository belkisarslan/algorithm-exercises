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

//twoSum
/*
Verilen array içindeki sayıların hangilerinin toplamı
hedef olarak verilen sayıya eşit ise o sayıların index numaralarını dön
*/
const twoSum = (nums, target) => {
    let returnValue = ''
    if(nums.length === 2 && nums[0] + nums[1] === target) returnValue = [0, 1]
   
     for(let i = 0; i<nums.length; i++){
        let temp1 = nums[i]
        
        const newNums = nums.filter(item => item != temp1)
        for(let j=0; j<(newNums.length); j++){
           if(temp1 + newNums[j] === target) returnValue = [j, i]
        }
    }
    return returnValue === '' ? false : returnValue
}
console.log(twoSum([2, 7, 11, 15], 9))

const twoSum2 = (numArr) => {
   for(let i = 0; i < numArr.length; i++){
    for(let j = 0; j < numArr.length; j++){
        if(numArr[i] + numArr[j] === 9) return [i,j]
    }
   }
}
console.log(twoSum2([2, 7, 11, 15]))

const twoSum3 = (numArr) => {
    for(let i = 0; i < numArr.length; i++){
     let currentValue = numArr[i]
     let difference = 9 - currentValue

     const indexOfSecondValue = numArr.indexOf(difference)

     if(indexOfSecondValue > -1 && numArr[i] != numArr[indexOfSecondValue]) return [i, indexOfSecondValue]
    }
 }
 console.log(twoSum3([2, 7, 11, 15]))

 //twoSumAmazon
 const twoSumAmazon = (numArr, target) => {
  numArr.sort((a, b) => a - b)
  let left = 0
  let right = numArr.length-1

  while(left < right){
    let currentSum = numArr[left] + numArr[right]
    if(currentSum > target){
        right--
    }else if(currentSum < target){
        left++
    }else{
        return [left, right]
    }
  }
 }
 console.log(twoSumAmazon([1, 3, 4, 5, 7, 10, 11], 9))

//powerSet
//verilen arrayin alt kümelerini bulunuz
const powerSet = (arr = []) => {
    const numberOfSubSet = 2**arr.length
    let result = []
    for(let i = 0; i<numberOfSubSet; i++){
        let tempBinary = Number(i).toString(2)
        let currentBinary = "0".repeat(arr.length - tempBinary.length) + tempBinary
        
        let tempValue = ""
        for(let j = 0; j<arr.length; j++){
            if(currentBinary[j] === "1") tempValue += arr[j]
        }
        result.push(tempValue)
    }
    return result

}
console.log(powerSet([1, 2, 3]))

//decimalToRoman
const decimalToRoman = (num) => {
    const romanSymbols = {
        M: 1000,
        CM: 900,
        D:  500,
        CD: 400,
        C:  100,
        XC:  90,
        L:   50,
        XL:  40,
        X:   10,
        IX:   9,
        V:    5,
        IV:   4,
        I:    1
    }
    let inRoman = ""
    for(let key in romanSymbols){
        while(num >= romanSymbols[key]){
            inRoman += key
            num -= romanSymbols[key]
        }
    }
return inRoman
}
console.log(decimalToRoman(399))

//threeSum
const threeSum = (arr, target) => {
    arr.sort((a, b) => a - b)
    let subSets = []

    for(let i = 0; i < arr.length-2; i++){
        if(arr[i] != arr[i-1]){
            let left = i+1
            let right = arr.length - 1
            while(left < right){
                let currentSum = arr[i] + arr[left] + arr[right]
                if(currentSum > target){
                    right--
                }else if(currentSum < target){
                    left++
                }else if(currentSum === target){
                    subSets.push([arr[i], arr[left], arr[right]])
                    while(arr[left] == arr[left+1]) left++
                    while(arr[right] == arr[right-1]) right--
                    left++
                    right--
                }
            }
        }
    }
    return subSets
}
console.log(threeSum([8, 2, 1, 4, 10, 5, -1, -1], 8))

//scaleBalancing
/*ilk verilen array içindeki değerleri bir terazinin sağ ve sol
kefesi gibi düşünelim. İkinci verilen arraydeki değerleri kullanarak
teraziyi eşitlemeye çalışalım. İkinci verilen değerler arasında
toplama çıkarma yaparak işimize yarayan değeri elde edebiliriz.
*/
const scaleBalancing = (arr) => {
   const [l, r] = returnNumerals(arr[0])
//    console.log(`left ${l}`)
//    console.log(`right ${r}`)
   const availableWeights = returnNumerals(arr[1])
//   console.log(availableWeights)
     availableWeights.sort((a, b) => a - b)
     //negatif çıkma durumuna karşı mutlak değere alıyoruz
     const difference = Math.abs(l - r)
     //Verilen değerlerin direkt kullanılmasıyla terazinin eşitlenmesi
     if(availableWeights.indexOf(difference) > -1) return difference

     //Verilen değerlerin toplanması ile terazinin eşitlenmesi
     let leftIndex = 0
     let rightIndex = availableWeights.length - 1
     let countDown = 1
     let result= ""

     while(leftIndex < rightIndex && countDown > 0){
        let sum = availableWeights[leftIndex] + availableWeights[rightIndex]
        if(sum > difference){
            rightIndex--
        }else if(sum < difference){
            leftIndex++
        }else{
            result = `${availableWeights[leftIndex]}, ${availableWeights[rightIndex]}`
            countDown--
        }
    }
    if(result != "") return result

    //Verilen değerlere çıkarma işlemi uygulanarak terazinin eşitlenmesi
    for(let i = availableWeights.length-1; i>0 ; i--){
        for(let j=0; j<i; j++){
            if(availableWeights[i] - availableWeights[j] === difference) result = `${availableWeights[i]}, ${availableWeights[j]}`
        }
    }
    if(result != ""){
        return result
    }else{
        return "Not Possible"
    }
}

function returnNumerals(str){
    let numerals = []
    str.match(/\d+/g).forEach(element => {
        numerals.push(Number(element))
    })
    return numerals
}
console.log(scaleBalancing(["[5, 9]", "[1, 2, 6, 7]"]))
console.log(scaleBalancing(["[13, 4]", "[1, 2, 3, 6, 14]"]))
console.log(scaleBalancing(["[3, 4]", "[1, 2, 7, 7]"]))

//timeDifference
const timeDifference = (t1, t2) =>{
   let hour = Number(t2.split(':')[0]) - Number(t1.split(':')[0])
   let minute = Number(t2.split(':')[1]) - Number(t1.split(':')[1])

   if(minute < 0){
    hour--
    minute = minute + 60
   }
   if(hour < 0) hour = hour + 24

   if(hour < 10) hour = "0" + hour.toString()
   if(minute < 10) minute = "0" + minute.toString()
   
   return `${hour.toString()} : ${minute.toString()}` 

}
console.log(timeDifference("14:00", "16:45"))
console.log(timeDifference("1:04", "13:05"))
console.log(timeDifference("15:05", "13:04"))

//pascalTriangle
const pascalTriangle = (NumOfRows) => {
 let result = [[1]]
 for(let i=0; i<NumOfRows; i++){
    let temp = [0, ...result[result.length-1], 0]
    let row = []

    for(let j=0; j<result[result.length-1].length+1; j++){
        row.push(temp[j]+temp[j+1])
    }
    result.push(row)
 }
 return result
}
console.log(pascalTriangle([8]))

//closestEnemy
//1 ve 2 rakamının arasındaki mesafe sorulmaktadır
const closestEnemy = (arr) => {
   let indexOf1 = arr.indexOf(1)
   let indexesOf2 = []
   let differences = []

   //2 rakamının bulunduğu indexleri bulalım
   for(let i = 0; i < arr.length; i++){
    if(arr[i] === 2) indexesOf2.push(i)
   }
   
   if(indexesOf2.length === 0) return 0

   //2nin bulunduğu indexten 1in indexini mutlak değer alaral çıkartalım
   indexesOf2.forEach((element) =>{
    differences.push(Math.abs(element - indexOf1))
   })

   //birbirine en yakın 1 ve 2 yi hesaplayacağımız için min alalım
   //min fonksiyonu array okumaz. Bu nedenle spread operator kullanmamız gerekir.
   return Math.min(...differences)

}
console.log(closestEnemy([0, 0, 1, 0, 0, 2, 0, 2]))

//fourLargest
const fourLargest = (arr) =>{
  let arrMax = []
  arr.forEach(subArr => arrMax.push(Math.max(...subArr)))
  return arrMax
}
console.log(fourLargest([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857]]))

//camelCase
const camelCase = (str) => {
 let arr = str.split(" ")
 let camel = ""
 arr.forEach(word => {
    let firstLetter = word[0].toUpperCase()
    let restOfTheword = word.substring(1)
    let newWord = firstLetter + restOfTheword
    camel += newWord
 })
 return camel
}
console.log(camelCase("I got intern at google"))

//snakeCase
const snakeCase = (str) =>{
 return str.replace(/[^a-zA-Z]/g,"_").toLowerCase()
}
console.log(snakeCase("BOB loves-coding"))

//sumMultipliers
const sumMultipliers = (arr) =>{
  let sum = sumTheArr(arr)
  const secondGreatest = arr.sort((a,b)=>a-b)[arr.length-2]
  const greatest = Math.max(...arr)
  const multiplication = greatest * secondGreatest
  return multiplication > sum * 2 ? true : false

}
const sumTheArr = (arr) =>{
 return arr.reduce((acc, currentValue)=>{return acc + currentValue}, 0)
}
console.log(sumMultipliers([2, 5, 6,-6, 16, 2, 3, 6, 5, 3]))

//stringMerge
const stringMerge = (str) => {
    const [first, second] = str.split("*")
    let combineWords = ""
    for(let i = 0; i<first.length; i++){
        combineWords += first[i]  + second[i]
    }
    return combineWords
}
console.log(stringMerge("abc1*kyoo"))

//oneDecrement
const oneDecrement = (num) =>{
  let count = 0
  const numStr = num.toString()
  for(let i = 1; i<numStr.length; i++){
    if(numStr[i] - numStr[i+1] == 1) count += 1
  }
  return count
}
console.log(oneDecrement(5655984))

//elementMerge 
const elementMerge = (arr) =>{
 let newArr = mergeArr(arr)
 while(newArr.length > 1){
    console.log(newArr)
    newArr = mergeArr(newArr)
 }
 return newArr[0]
}
const mergeArr = (arr) =>{
 let subArr = []
 for(let i=1; i<arr.length; i++){
    subArr.push(Math.abs(arr[i]-arr[i-1]))
 }
 return subArr
}
console.log(elementMerge([4, 5, 1, 2, 7]))

//asciiConversion 
const asciiConversion = (str) =>{
  let ascii = ""
  for(let i = 0; i < str.length; i++){
    ascii += str[i].charCodeAt()
  }
  return ascii
}
console.log(asciiConversion("dog"))

//gCf
const gCf = (arr) =>{
 const [first, second] = arr
 let cielingValue = Math.min(...arr)
 let divisors = []
 for(let i=1; i<=cielingValue; i++){
    if(first %i === 0 && second %i === 0) divisors.push(i)
 }
return Math.max(...divisors)
}
console.log("ebob(45, 12) =", gCf([45, 12]))