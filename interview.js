/*
abcabcbb => abc uzunluğu 3
bbbbbbb => b uzunluğu 1
*/

const lengthOfLongest = (s) =>{
 let set = {}
 let start = 0
 let max = 0
 for(let i=0; i<s.length; i++){
    if(set[s[i]] !== undefined){
        start = Math.max(start, set[s[i]] + 1)
    }
    set[s[i]] = i
    max = Math.max(max, i-start+1)
    /*
    set = {
        a: 0,
        b: 1,
        c: 2,
        a: 3 diyemeyiz yukardaki a değerini 3 olarak güncelleriz
    }
    */
   }
    return max
}
console.log(lengthOfLongest("abcabcbb"))

