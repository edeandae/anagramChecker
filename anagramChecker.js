var word="abcde"

var anagram="acbde"
var anagramList=["abced","bscade","abced","adsfg"];
var wordDict = {};


/* //example on traversing dictionaries
var brothers = {
  "juan":30,
  "nora":28,
  "yael":42
};
for(var index in brothers){
  console.log(brothers[index])
}
*/

function newChecker(anagram){ 
  for(var index in word){
    var letter = word[index];
    if(wordDict[letter]){
      wordDict[letter]++;
    }
    else{
      wordDict[letter] = 1;
    }
  }
  //console.log("the dictionary", wordDict);
  for(var index in anagram){
    var letter = anagram[index];
    if(wordDict[letter]){
      wordDict[letter]--;
    }
    else{
      wordDict[letter]=-1;
    }
  }
  //console.log("the compared dict", wordDict)
  var count=0
  for(var index in wordDict){
    count=count+Math.abs(wordDict[index]);
  }
  //console.log(count)
  if(count===0){
    console.log(anagram, " is an anagram of ", word)
  }
  else console.log(anagram, " is not an anagram of ", word)
  wordDict={};//reseting the dictionary
}

//newTests for single one, it works
//newChecker(anagram);


//multiple checks
for(var index in anagramList){
  newChecker(anagramList[index]);
}
