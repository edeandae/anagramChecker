var word="abcde"

var anagram="acbde"
var anagramList=["abcde","b","a","abced","bscade","abced","adsfg"];
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
}

//checks if the given string is an anagram of the word
function anagramComparison(anagram){
  if(word.length!==anagram.length) return false
  for(var index in anagram){
    var letter = anagram[index];
    if(wordDict[letter]){
      wordDict[letter]--;
    }
    else{
      return false
    }
  }
}

function newChecker(anagram){ 
  //console.log(count)
  wordDict={};//reseting the dictionary
  dictionaryCreator(word);
  if(anagramComparison(anagram)===false) return false
  var count=0
  for(var index in wordDict){
    count=count+Math.abs(wordDict[index]);
  }
  if(count===0) {
    return true
  }
  else {
    return false
  }
}

//newTests for single one, it works
//newChecker(anagram);

function checkIfAnagram(originalDict , test){

  if(word.length !== test.length){
    return false
  }

  for(var i in test){
    var letter = test[i];
    if(originalDict[letter] < 1){
      return false
    }
    else{
      originalDict[letter] --;
    } 
  }

  return true
}

//for modified check if Anagram


//multiple checks
for(var index in anagramList){
  wordDict={}
  dictionaryCreator(word)
  var result = checkIfAnagram(wordDict,anagramList[index])

  //var result=newChecker(anagramList[index]);
  //console.log(result)

  if(result){
    console.log(anagramList[index], " is an anagram of ", word);
  }
  else console.log(anagramList[index], " is not an anagram of ", word);
}