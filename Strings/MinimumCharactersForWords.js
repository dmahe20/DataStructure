//input words = ["this","that","did","deed","them!","a"]
//output = ["t","t","h","i","s","a","d","d","e","e","m","!"]

function minimumCharactersForWords(words) {
    const maximumCharacterFrequencies = {};
  
    for(const word of words){
      const characterFrequencies = countCharacterFrequencies(word);
      updateMaximumFrequencies(characterFrequencies, maximumCharacterFrequencies);
    }
    return makeArrayFromCharacterFrequencies(maximumCharacterFrequencies);
  }
  
  function countCharacterFrequencies(string){
    const characterFreq = {};
  
    for (const character of string){
      if(!(character in characterFreq)){
        characterFreq[character] =0;
      }
      characterFreq[character]+=1;
    }
    return characterFreq;
  }
  
  function updateMaximumFrequencies(frequencies, maximumFrequencies){
    for(const character in frequencies){
      const frequency = frequencies[character];
  
      if(character in maximumFrequencies){
        maximumFrequencies[character] = Math.max(frequency, maximumFrequencies[character]);
      }else{
        maximumFrequencies[character] = frequency;
      }
    }
  }
  
  
  function makeArrayFromCharacterFrequencies(characterFreq) {
    const characters = [];
  
    for (const character in characterFreq) {
      const frequency = characterFreq[character];
  
      for (let idx = 0; idx < frequency; idx++) {
        characters.push(character);
      }
    }
    return characters;
  }
  
  // Do not edit the line below.
  exports.minimumCharactersForWords = minimumCharactersForWords;
  