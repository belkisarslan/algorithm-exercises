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