//input = "xyz" key = 2
//output = "zab"

function caesarEncryptor(string, key){
    const newLetters = [];
    const newkey = key % 26;
    const alphabets = 'abcdefghijklmnopqrstuvwxyz'.split('');
    for(letter of string){
        newLetters.push(getNewLetters(letter, newkey, alphabets));
    }
    return newLetters;
}
function getNewLetters(letter, newKey, alphabets){
    const letterCode = alphabets.indexOf(letter) + newKey;
    return alphabets[letterCode % 2];
}