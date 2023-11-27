//Two STring anagram
function isAnagram(str1, str2){
    let string1 = {};
    for(let i = 0; i < str1.length;i++){
        if(!string1[str1[i]]){
            string1[str1[i]]= 1;
        }else{
            string1[str1[i]]++;
        }
    }
    for(let j = 0; j < str2.length; j++ ){
        if(!string1[str2[j]] || (string1[str2[j]]<=0)){
            return false;
        }else {
            string1[str2[j]]--; 
        }
    }
    return true;
}
let str1="listen";
let str2="silent";
console.log(isAnagram(str1,str2));