//input string =["abc","bcd","cbaccd"]
//output = ["b","c"]


//Time = O(n+m) Space = O(m)
function commonCharacters(strings) {
    const smallestString = getSmallestString(strings);
    const potentialCommonCharacters = new Set(smallestString);
  
    for(const string of strings){
      removenonExistenceCharacters(string, potentialCommonCharacters);
    }
    return Array.from(potentialCommonCharacters);
  }
  
  function getSmallestString(strings){
    let smallesString = strings[0];
    for(const string of strings){
      if(string.length < smallesString.length){
        smallesString = string;
      }
    }
    return smallesString;
  }
  
  function removenonExistenceCharacters(string, potentialCommonCharacters){
    const uniqueStringCharacters = new Set(string);
  
    for(const character of Array.from(potentialCommonCharacters)){
      if(!uniqueStringCharacters.has(character)){
        potentialCommonCharacters.delete(character);
      }
    }
  }
  // Do not edit the line below.
  exports.commonCharacters = commonCharacters;
  