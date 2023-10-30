//input characters = "abcabc"
//      document = "aabbccc"
// ouput = false as one C is missing in characters

function generateDocument(characters, document) {
    const characterCount ={};
  
    for(const char of characters){
      if(!(char in characterCount)) characterCount[char] =0;
  
      characterCount[char]++;
    }
  
    for(const character of document){
      if(!(character in characterCount) || characterCount[character] ===0 ) return false;
      characterCount[character]--;
    }
    return true;
  }
  
  // Do not edit the line below.
  exports.generateDocument = generateDocument;
  