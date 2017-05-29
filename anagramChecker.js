var word="abcde"

var anagram="acbde"
var anagramList=["abcde","b","a","abced","bscade","abced","adsfg"];
var wordDict = {};



//transposes a string into its dicionary version
function dictionaryCreator(word){
  for(var index in word){
    var letter = word[index];
    if(wordDict[letter]){
      wordDict[letter]++;
    }
    else{
      wordDict[letter] = 1;
    }
  }
};

function checkIfAnagram(originalDict , test){

  if(word.length !== test.length){
    return false;
  }

  for(var i in test){
    var letter = test[i];
    if(originalDict[letter] < 1){
      return false;
    }
    else{
      originalDict[letter] --;
    } 
  }

  return true;
};

//multiple checks
for(var index in anagramList){
  wordDict={};
  dictionaryCreator(word);
  var result = checkIfAnagram(wordDict,anagramList[index]);

  if(result){
    console.log(anagramList[index], " is an anagram of ", word);
  }
  else console.log(anagramList[index], " is not an anagram of ", word);
}
