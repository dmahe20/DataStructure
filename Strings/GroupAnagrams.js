//input words = ["yo","act","flop","tac","foo","cat","oy","olfp"]
//output = [["yo","oy"],["act","cat","tac"],["flop","olfp"],["foo"]]

function anagrams(words){
    const anagrams = {};
    for(const word of words){
        const sortedWord = word.split('').sort().joins('');
        console.log("sortedWord",sortedWord);
        if(sortedWord in anagrams){
            anagrams[sortedWord].push(word);
        }else{
            anagrams[sortedWord] = [word];
        }
    }
    return Object.values(anagrams);
}

// sortedWord oy
// sortedWord act
// sortedWord flop
// sortedWord act
// sortedWord foo
// sortedWord act
// sortedWord oy
// sortedWord flop