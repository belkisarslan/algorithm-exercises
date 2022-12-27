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

//confirm ending
function confirmEnding(str, target){
    const strLen = str.length
    const targetLen = target.length
    const endingCharNum = strLen - targetLen
    //str nin uzunluğundan target uzunluğunu çıkardık
    const ending = str.substring(endingCharNum)
    //kalan kısmı strnin tamamından çıkardık
    return target == ending
    //en son kalan kısımla target eşit mi diye baktık
}
console.log(`Connor kelimesi n harfi ile mi bitiyor? ${confirmEnding("Connor","n")}`)
console.log(`Bastian kelimesi n harfi ile mi bitiyor? ${confirmEnding("Bastian","n")}`)

//title case
function titleCase(str){
    const myArr = str.split(" ")
    let myResultAr = []
    for(let i=0; i<myArr.length; i++){
        const item = myArr[i].charAt(0).toUpperCase() + myArr[i].slice(1).toLowerCase();
        myResultAr.push(item)
    }
    const result = myResultAr.join(" ")
    console.log(`title case: ${result}`)
    return result
}
titleCase("sHort AnD stOUt")

//Slice and Splice
function franSplice(arr1, arr2, n){
    let copiedAr1 = [...arr1]
    let copiedAr2 = [...arr2]
    copiedAr2.splice(n, 0, ...copiedAr1)
    console.log(`slice and splice [${copiedAr2}]`)
    return copiedAr2
}
franSplice([1,2,3],[4,5,6],1)

//falsy bouncer
function bouncer(arr){
    const result = arr.filter(item => Boolean(item))
    //arr.filter(Boolean) şeklinde de yazılabilir
    console.log(`falsy bouncer: [${result}]`)
    return result
}
bouncer([7, "ate", "", false, 9])

//falsy bouncer 2. method
function bouncer2(arr){
    let trutyArr = []
    for(let i=0; i<(arr.length); i++){
        if( Boolean(arr[i])){
            trutyArr.push(arr[i])
        }
    }
    console.log(`falsy bouncer 2. method: [${trutyArr}]`)
    return trutyArr
}
bouncer2([7, "ate", "", false, 9])

//where do i belong
function getIndexTo(arr, num){
    let count = 0;
    for(let i=0; i<arr.length; i++){
     if(arr[i] < num){
        count++
     }
    }
    console.log(`${num} ${count}. index'e gelmelidir`)
    return num
}
getIndexTo([40, 60], 50)
getIndexTo([10, 20, 30, 50], 40)

//chunky monkey
function chunkyMonkey(arr, size){
    let mainArr = []
    while(arr.length){
        const removedArr = arr.splice(0, size)
        mainArr.push(removedArr)
    }
    console.log(mainArr)
    return mainArr;
}
chunkyMonkey(["a", "b", "c", "d"], 2)

//coints duplicate
let containsDuplicate =(nums)=>{
    //Set benzersiz değerleri tutan bir JavaScript nesnesidir. Her veri tipinde değer tutabilir. Fakat aynı değeri birden fazla kez içeremez.
    const numSet = new Set(nums)
    //Bir Set nesnesinin kaç değer tuttuğunu öğrenmek için size özelliğine bakarız.
    const isEqual = numSet.size === nums.length
    return !isEqual
}
console.log(`iki kere tekrarlanan rakam var mı: ${containsDuplicate([1, 2, 2, 3])}`)

//two sum
let twoSum = (nums, target)=>{
    for(let a=0; a<(nums.length); a++){
      for(let b=a+1; b<(nums.length); b++){
        if(nums[a] + nums[b] === target){
            return [a, b]
        }
      }
    }
    return [-1, -1]
}
console.log(twoSum([2, 7, 11 ,15], 9))