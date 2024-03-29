// userValidation 
/*
1. Kullanıcı adı 4 ve 25 karakter arasında olmalıdır.
2. Bir harfle başlamalıdır.
3. Kullanıcı adında harfler, rakamlar ve alt çizgi olabilir.
4. Kullancı adı alt çizgi ile bitemez.
*/
const userValidation = (str) => {
  if(str.length >= 4 && str.length <= 25 && 
    (/[a-zA-Z]/).test(str.slice(0, 1)) && //str.charAt(0)
    (/^\w+$/).test(str) &&
    (/[a-zA-Z0-9]/).test(str.slice(-1)) // str.charAt(str.length-1)
    ){ 
    return true
  }else{
    return false
  }
}
console.log(userValidation("u__hello_world123"))

// longestWord
/*
1. Noktalama işaretlerini kaldır.
2. Cümleyi boşluklardan bölüp kelimelerle bir array oluştur.
3. Kelimelerle oluşturduğun arrayi kelimelerin karakter sayılarına göre azalan bir şekilde sırala
4. En başta yani 0 indekste yer alan kelimeyi return et.
*/
const longestWord = (src) => {
  const arr = src.replace(/[^a-zA-Z ]/g, "").split(" ")
  arr.sort((a, b) => {return b.length - a.length})
  return arr[0]
}
console.log(longestWord("fun&!! time"))

// firstFactorial
const firstFactorial = (num) => {
  let factoriel = 1
  for(let i=1; i <= num; i++){
    factoriel *= i
  }
  return factoriel
}
console.log(firstFactorial(5))

//firstReverse
const firstReverse = (str) => {
 return str.split("").reverse().join("")
}
console.log(firstReverse("ters çevrilen yazı"))

// findIntersection
/*
1. Yeni bir array tipinde değişken tanımla
2. split(), replace()
3. forEach() kullanarak bütün array içerisindeki karakterlerin diğer array içerisinde olup olmadığını kontrol et.
4. Eğer tanımlamış olduğumuz array boşsa return false, boş değilse de array içerisindeki değerleri string halinde return et.
*/
const findIntersection = (arr) => {
 let intersection = []
 const array1 = arr[0].replace(/\s/g,"").split(",")
 const array2 = arr[1].replace(/\s/g,"").split(",")
 array2.forEach((item) => {
  if(array1.includes(item)){
    intersection.push(item)
  }
 })
 if(intersection.length != 0){
  return intersection.toString()
 }else{
  return false
 }
}
console.log(findIntersection(["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"]))

//Bu çok güzel bir örnek!!!
var str = '  A B  C   D EF ';
console.log(str.replace(/\s/g, '#'));  // ##A#B##C###D#EF#
console.log(str.replace(/\s+/g, '#')); // #A#B#C#D#EF#

//questionMark
//İçinde sadece harf rakam ve soru işareti bulunan string'in ??? arasındaki sayıların toplamı 10 ise true
//toplamları 10 değilse false döndür
/*
1. str >= 5 
2. soru işareti ve rakam olmayan büytün değerleri temizle
3. forEach için stringleri arraye çevir
4. forEach içinde kullanılacak değerleri tanımla
5. forEach döngüsü ile her bir rakam ve kendisinden sonraki 4. karakterin toplanarak değişkene eklenmesi 
ve değerin arraye eklenmesi
6. array içinde 10 değeri varsa true yoksa false
*/
const questionMark = (str) => {
 if(str.length < 5){
  return false
 }
 const newStr = str.replace(/[^0-9?]/g, "")
 const arr = newStr.split("")
 let sums = []
 let sum = 0
 let iterator = 0
 arr.forEach((item) => {
  if(item != "?"){
    sum = parseInt(item) + parseInt(arr[iterator + 4])
    sums.push(sum)
  }
  iterator += 1
 })
 console.log(str) //acc?7??sss?3rr1??????5
 console.log(newStr) //"?7???31??????5"
 console.log(sums) // (4) [10, NaN, NaN, NaN]
 return sums.includes(10) ? true : false
}
console.log(questionMark("acc?7??sss?3rr1??????5"))

//letterChange
//Verilen string'in harflerini alfabeye göre bir sonra gelen harfle değiştirilmesi istenmektedir
console.log("A".charCodeAt()) //65
console.log("a".charCodeAt()) //97
//Bu nedenle ilk önce bütün harfleri küçük harfe çevirmeliyiz
console.log(String.fromCharCode("A".charCodeAt() + 1)) //B
/*
1. Harfleri küçük harfe çevir
2. z harfinden sonra a harfine dönmeli
3. Son olarak sesli harfleri büyü harf yapıyoruz
*/
const letterChange = (str) => {
 let newStr = str.toLowerCase().replace(/[a-z]/gi, (char)=>{
  if(char === "z"){
    return "a"
  }else{
    return String.fromCharCode(char.charCodeAt() + 1)
  }
 })
 let vowelCapitalize = newStr.replace(/a|e|i|o|u/gi, char =>
  char.toUpperCase()
 )
 return vowelCapitalize
}
console.log(letterChange("abcde"))

//aynı soruda harfler dışında başka karakterin görünmesini istemezsek 
const letterChange2 = (str) => {
  let clearstr = str.replace(/[^a-zA-Z]/g, "")
  let newStr = clearstr.toLowerCase().replace(/[a-z]/gi, (char) => {
        if (char === "z") {
            return "a"
        } else {
            return String.fromCharCode(char.charCodeAt() + 1)
        }
    })
    let vowelCapitalize = newStr.replace(/a|e|i|o|u/gi, char =>
  char.toUpperCase()
 )
 return vowelCapitalize
}
console.log(letterChange2("abcde!?e12h"))

//simpleAdding
const simpleAdding = (num) => {
let result = 0
for(let i=1; i<=num; i++){
 result += i
}
 return result
}
console.log(simpleAdding(5))

//letterCapitalize
const letterCapitalize = (str) => {
  let newStr = []
  str.split(" ").forEach((word) => {
    newStr.push(word.charAt(0).toUpperCase() + word.slice(1, word.length))
  })
 return newStr.join(' ')
}
console.log(letterCapitalize("bu cümlede geçen bütün harflerin kelimelerinin baş harfini büyük yap"))

//map ile çözüm
const letterCapitalize2 = (str) => {
  let arr = str.split(" ")
  return  arr.map((item) => (item.charAt(0).toUpperCase() + item.slice(1, item.length))).join(" ") 
}
console.log(letterCapitalize2("bu cümlede geçen bütün harflerin kelimelerinin baş harfini büyük yap"))

//simpleSymbols
const simpleSymbols = (str) => {
 const arr = str.split('')
 let controlArr = []
 arr.forEach(char => {
  if((/[a-zA-Z]/).test(char)){
    if(arr[arr.indexOf(char)-1] === '+' && arr[arr.indexOf(char)+1] === '+'){
      controlArr.push(1)
    }else{
      controlArr.push(0)
    }
  }
 })
 console.log(controlArr)
 if(controlArr.includes(0)){
  return false
 }else{
  return true
}
}
console.log(simpleSymbols('++d+===+c++==a'))

//charAt methodu ile çözümü
const SimpleSymbols2 = (str) => {
  const arr = str.split("")
  let controlArr = []

  for (let i = 0; i <= arr.length; i++) {
    if (str.charAt(i).match(/[a-z]/i)) {
      if (str.charAt(i + 1) === "+" && str.charAt(i - 1) === "+") {
        controlArr.push(1)
      } else {
        controlArr.push(0)
      }
    }
  }
  console.log(controlArr)
    
    if (controlArr.includes(0)) {
        return false
    }

  return true
}
console.log(SimpleSymbols2('++d+===+c++==a'))

//timeConvert
const timeConvert = (num) => {
 let hour = num / 60
 let min = num % 60
 return `${Math.floor(hour)}:${min}`
}
console.log(timeConvert(63))

//alphabetSoup
const alphabetSoup = (str) => {
 
 const newStr = str.replace(/[^a-z]/gi, "")
 
 return newStr.split('').sort().join('')
}
console.log(alphabetSoup("merha!ba"))

//abCheck
/*
a harfinden 3 karakter sonra b harfi geliyorsa true dön
*/
const abCheck = (str) => {
 let arr = []
 let newStr = str.split('')
 newStr.forEach((char)=> {
  if(char === 'a' && newStr[newStr.indexOf(char)+4] === 'b'){
   return arr.push(true)
  }
 })
 return arr.includes(true) ? true : false
}
console.log(abCheck("lane borrowed"))
//2.yöntem
const abCheck2 = (str) => {
let newStr = str.search('a...b')
return newStr > -1 ? true : false
}
console.log(abCheck2("lane borrowed"))

//exOh
const exOh = (str) => {
let x = 0
let o = 0;
[...str].forEach((item)=>{
item === 'x' ? x += 1 : o += 1
})
return x == o ? true : false 
}
console.log(exOh("oooxxxoxox"))

//wordCout
const wordCout = (str) => {
return str.trim().split(' ').length
}
//başta boşluk varken bile kelimeleri sayması için trim() kullandık
console.log(wordCout(" Cümledeki kelime adedini döndür"))

//vowelCount
const vowelCount = (str) => {
let chars = 0;
[...str].forEach((char) => {
if((/[a/e/i/o/u/A/E/I/O/U]/).test(char)){
chars += 1
}
})
return chars
}
console.log(vowelCount("kelimelerdeki sesli harfleri say"))

//ikinci çözüm
const vowelCount2 = (str)=>{
  let newStr=str.toLowerCase();
   let arr = newStr.replace(/[^a/e/i/o/u]/g,"")
   return arr.length 
  }
console.log(vowelCount2("kelimelerdeki sesli harfleri say"))

//isPalindrome
const isPalindrome = (str) => {
let newStr = str.replace(/ /g, "")
let reverseStr = newStr.split('').reverse().join('')
return newStr === reverseStr ? true : false
}
console.log(isPalindrome("al kasada sakla"))

//isPolindromeTwo
/*
Üsteki sorudan farklı olarak verilen cümlede virgül, tire işareti ve 
büyük harfli karakterler var.
Yani yukarıdaki çözümden farklı olarak replace methoduyla fazla olan 
karakterleri yok edeceğiz
*/
const isPalindromeTwo = (str) => {
  let newStr = str.replace(/[^a-zA-Z]/g, "").toLowerCase()
  let reverseStr = newStr.split('').reverse().join('')
  return newStr === reverseStr ? true : false
  }
console.log(isPalindromeTwo("Anne, I vote more cars race Rome-to-Vienna"))

//polindromeCreator
/*
Verilen değerden 1 veya 2 karakter çıkarılması durumunda
polindrome olup olmadığının incelenmesi
*/
const polindromeCreator = (str) => {
 const strippedStr = str.replace(/[^a-zA-Z]/g, "").toLowerCase()
 if(pCreator(strippedStr)) return "The string itself is a palindrome"
 
 let removedLettes = []
 //uyumu bozan karakter ve yeni array
 let [removed, newStr] = removeLetter(strippedStr)
 removedLettes.push(removed)

 //yeni array palindrome ise uyumu bozan karakteri döndür
 if(pCreator(newStr) === true){
  return removed
  //polindrome değilse ikinci kez kontrol yap. çünkü iki harf çıkarma hakkımız var
 }else{
  let [removed2, newStr2] = removeLetter(newStr)
  removedLettes.push(removed2)
  if(pCreator(newStr2) === true){
    return removedLettes.join('')
  }else{
    return "Not Palindrome Material"
  }
 }
}
function pCreator(word){
  return word.split('').reverse().join('') === word ? true : false
}
function removeLetter(str){
  //ortaya kadar kontrol etmemiz yeterli olacaktır
  let it = Math.floor(str.length/2)
  let arr = str.split('')

  for(let i = 0; i<it; i++){
   //en baştaki ve en sondaki eşit değilse
   if(str[i] != str[str.length-1-i]){
    arr.splice(i, 1)
    return [str[i], arr.join('')]
   }
  }
}
console.log(polindromeCreator("kjjjhjjj"))
console.log(polindromeCreator("abjchba"))

//aritGeo
const aritGeo = (arr) => {
let arit = arr[1] - arr[0]
let geo = arr[1] / arr[0]
let isArithmetic = true
let isGeometric = true

for(let i=2; i<arr.length; i++){
  if(arr[i] - arr[i-1] != arit){
    isArithmetic = false
  }
  if(arr[i] / arr[i-1] != geo){
    isGeometric = false
  }
}

if(isArithmetic === true){
  return "Arithmetic"
}else if(isGeometric === true){
  return "Geometric"
}else{
  return -1
}
}
console.log(aritGeo([2, 4, 8]))

//arrayAddition
const arrayAddition = (arr) => {
arr.sort((a, b) => a-b)
let endChar = arr[arr.length - 1]
let result = 0
for(let i=0; i<arr.length - 1; i++){
  result += arr[i]
}
return result === endChar ? true : false
}
console.log(arrayAddition([4, 6, 23, 10, 1, 3]))

//console style
console.log("%cConsole Style Örneği", "color:red;font-size:25px")
console.log("%cBöyle %crengarenk %cde %cyapılabilir", "color:purple;font-size:20px", "color:blue;font-size:20px", "color:green;font-size:20px", "color:orange;font-size:20px")

//letterCount
/*
her kelimede tekrar eden harf sayısına bakacağımız için kelime kelime incelemeliyiz
harf ve boşluk dışındaki karakterleri sil
hepsini küçük harf yap
stringi array yap
*/
const letterCount = (str) => {
let arr = str.replace(/^a-zA-Z/g, "").toLowerCase().split(" ")
let charsOfWords = []
for(let i=0; i<arr.length; i++){
  let obj = []
  arr[i].split("").forEach((char) => {
    char in obj ? obj[char] += 1 : obj[char] = 1
  })
  charsOfWords.push(obj)
}
let maxFrequencies = []
charsOfWords.forEach((object) => {
  maxFrequencies.push(Math.max(...Object.values(object)))
})
let maxValue = Math.max(...maxFrequencies)
return maxValue < 2 ? -1 :
(arr[maxFrequencies.indexOf(maxValue)]
? arr[maxFrequencies.indexOf(maxValue)] : -1)
}
console.log(letterCount("Today is the greatest day ever"))

//secondGreatLow
/*
en büyük ikinci değer ve en küçük ikinci değeri bul
birden fazla kullanılmış sayıları diziden çıkar
küçükten büyüğe sırala
*/
const secondGreatLow = (arr) => {
newArr = []
arr.forEach((num)=> {
!newArr.includes(num) && newArr.push(num)
})
newArr.sort((a, b) => a - b)
return `${newArr[1]} - ${newArr[newArr.length - 2]}`
}
console.log(secondGreatLow([7, 7, 12, 98, 106]))