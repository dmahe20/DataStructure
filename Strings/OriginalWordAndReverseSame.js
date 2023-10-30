//input = ["diaper","abc","test","cba","repaid"]
//output = [["diaper","repaid"],["abc","cba"]]

function semordnilap(words){
    const wordsSet = new Set(words);
    const semordnilaPairs = [];

    for(const word of words ){
        const reverse = word.split('').reverse().join('');
        if(wordsSet.has(reverse) && reverse != word){
          semordnilaPairs.push([word, reverse]);
          wordsSet.delete(word);
          wordsSet.delete(reverse);
        }
      }
      return semordnilaPairs;
}