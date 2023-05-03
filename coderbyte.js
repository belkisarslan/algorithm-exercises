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