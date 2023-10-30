//input == string ="AAAAAAAAABBBBCCDDDDD"
//ouput = "9A4B2C5D"

function lengthOfLetters(string){
    const encodedStringChars =[];
    let currentRunLength = 1;

    for(let i =1; i<string.length -1;i++){
        const currentchar = string[i];
        const prevchar = string[i - 1];
        if(currentchar !== prevchar || currentRunLength ===9){
            encodedStringChars.push(currentRunLength.toString());
            encodedStringChars.push(prevchar);
            currentRunLength = 0;
        }
        currentRunLength++;
    }
    encodedStringChars.push(currentRunLength.toString());
    encodedStringChars.push(string[string.length - 1]);

    return encodedStringChars.join('');
}