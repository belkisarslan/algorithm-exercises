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