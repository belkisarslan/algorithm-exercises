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