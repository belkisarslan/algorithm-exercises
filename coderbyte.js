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