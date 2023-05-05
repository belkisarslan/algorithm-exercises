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