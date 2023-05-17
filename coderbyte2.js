//divisionStringified
const divisionStringified = (n1, n2) => {
    const division = Math.floor(n1/n2).toString()
    if(division.length < 4) return division

    const divisionArr = division.split('')
    const backwordsArr = division.split('').reverse()

    let arr = []
    let j = 0

    for(let i =0; i<backwordsArr.length; i++){
        if(j != 0 && j % 3 === 0){
            arr.push(backwordsArr[i] + ",")
        }else{
            arr.push(backwordsArr[i] )
        }
        j++
    }
    return arr.reverse().join("")
}
console.log(divisionStringified(123456789, 1000))