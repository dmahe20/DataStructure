//input string = "Algoexpert is the best"
//output = "best the is Algoexpert"
//dont use inbuilt functions

function reverseWordsInString(string) {
    const characters = [];
  
    for(const char of string){
      characters.push(char);
    }
  
    reverseListRange(characters, 0, characters.length - 1);
    let startOfWord = 0;
    while(startOfWord < characters.length){
      let endOfWord = startOfWord;
      while(endOfWord < characters.length && characters[endOfWord] != ' '){
        endOfWord++;
      }
      reverseListRange(characters, startOfWord, endOfWord - 1);
      startOfWord = endOfWord + 1;
      console.log("characters", characters);
    }
    return characters.join('');
  }
  function reverseListRange(list, start, end){
    while(start < end){
      const temp = list[start];
      list[start] = list[end];
      list[end] = temp;
      start++;
      end--;
      console.log("list",list);
    }
  }
  // Do not edit the line below.
  exports.reverseWordsInString = reverseWordsInString;
  