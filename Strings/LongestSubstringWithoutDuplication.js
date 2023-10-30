//input string = "clementisacap"
//output =          "mentisac"


//startIdx = 0
// lastSeen c :0
            // L:1
            // e:1
            // m:1
            //StartIdx = max(startIdx , lastSeen[char] + 1)

            function longestSubstringWithoutDuplication(string) {
                const lastSeen = {};
                let longest = [0, 1];
                let startIdx = 0;
                for(let i =0; i < string.length; i++){
                  const char = string[i];
                  if(char in lastSeen){
                    startIdx = Math.max(startIdx, lastSeen[char] + 1);
                  }
                  if(longest[1] - longest[0] < i + 1 - startIdx){
                    longest = [startIdx, i + 1];
                  }
                  lastSeen[char] = i;
                }
                return string.slice(longest[0], longest[1]);
              }
              
              // Do not edit the line below.
              exports.longestSubstringWithoutDuplication = longestSubstringWithoutDuplication;
              
