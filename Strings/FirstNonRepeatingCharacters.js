//input string ="abcdcaf"
// output = index of b = 1

function nonRepeastingCharacter(string){
    const characterFrq = {}; //hashtable

    for(const char of string){
        if(!(char in characterFrq)) characterFrq[char] = 0;
        characterFrq[char]++;
    }
    for(let idx=0; idx<string.length;idx++){
        const character = string[idx];
        if(characterFrq[character] === 1) return idx;
    }
    return -1;
}

//ip = string = "abcdcaf"
//1 index which b
// for( a of string)
// if(!a in {})
//{a -> 0}
//b of string
//{a->0
// b->0}
//c of string
//{a->1, b->1,c->1,d->1}
//c in string
// c in characterFreq = true , characterFreq[c] =0;  c++; c->2