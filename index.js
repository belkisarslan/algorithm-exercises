//reverse string
function reverseString(str){
    const strArray = str.split("")
    //split methoduyla kelimeyi harflere ayırdık
    const arry= strArray.reverse()
    //reverse methoduyla ters çevirdik
    const result = arry.join("")
    //join ile birleştirdik
    console.log(result)
    return result
}
reverseString("hello")