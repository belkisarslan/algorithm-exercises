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

//meanMode
const meanMode = (arr) => {

    const mean = calcMean(arr)
    const mode = calcMode(arr)
    //eğer ortalama değer mod değere eşitse 1 değilse 0 dön
    return mean === mode ? 1 : 0
}
const calcMean = (arr) => {

    let sum = 0
    for(let i=0; i<arr.length; i++){
        sum += arr[i]
    }
    return sum / arr.length
}
const calcMode = (arr) => {
    let freq = {}
    for(let j = 0; j < arr.length; j++){
        if(arr[j] in freq){
            freq[arr[j]] = freq[arr[j]] + 1
        }else{
            freq[arr[j]] = 1
        }
    }

    const max = Math.max(...Object.values(freq))
    // return freq (bu aşamada her sayıını kaçar adet olduğunu döndürdük)
    // return max  (bu aşamada en fazla tekrar eden sayının kaç tane olduğuna ulaştık)
    return iterateOverObj(freq, max)
}

const iterateOverObj = (freq, max) => {
  for(let j in freq){
    if(freq[j] === max){
        return parseInt(j)
    }
  }
}

console.log(meanMode([5, 3, 3, 3, 3, 3, 1]))