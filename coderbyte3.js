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