var word="abcde"

var anagram="bcdea"
var anagramList=["bscade","abced","adsfg"];

//one word test
console.log(anagram)
anagramChecker(anagram);
console.log("of "+word)

//multiple words test
//for some reason it only runs once
for(i=0;i<anagramList.length;i++){
	console.log(anagramList[i])
	anagramChecker(anagramList[i]);
	console.log("of "+word)
}



function anagramChecker(anagram){

/*alphabet = { "a":0, "b":0, "c":0, "d":0, "e":0, "f":0, "g":0,
 "h":0, "i":0, "j":0, "k":0, "l":0, "m":0, "n":0, "o":0, "p":0, 
 "q":0, "r":0, "s":0, "t":0, "u":0, "v":0, "w":0, "x":0, "y":0, "z":0};
 */
 var alphabet=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

 //console.log(alphabet)

 var characterArray=word.split("");
 //console.log(characterArray)

//accordingly aughmenting the array by the characters in the word to compare


for(i=0;i<word.length;i++){
	
	if(characterArray[i]==="a"){
		alphabet[0]++
	}
	if(characterArray[i]==="b"){
		alphabet[1]++
	}
	if(characterArray[i]==="c"){
		alphabet[2]++
	}
	if(characterArray[i]==="d"){
		alphabet[3]++
	}
	if(characterArray[i]==="e"){
		alphabet[4]++
	}
	if(characterArray[i]==="f"){
		alphabet[5]++
	}
	if(characterArray[i]==="g"){
		alphabet[6]++
	}
	if(characterArray[i]==="h"){
		alphabet[7]++
	}
	if(characterArray[i]==="i"){
		alphabet[8]++
	}
	if(characterArray[i]==="j"){
		alphabet[9]++
	}
	if(characterArray[i]==="k"){
		alphabet[10]++
	}
	if(characterArray[i]==="l"){
		alphabet[11]++
	}
	if(characterArray[i]==="m"){
		alphabet[12]++
	}
	if(characterArray[i]==="n"){
		alphabet[13]++
	}
	if(characterArray[i]==="o"){
		alphabet[14]++
	}
	if(characterArray[i]==="p"){
		alphabet[15]++
	}
	if(characterArray[i]==="q"){
		alphabet[16]++
	}
	if(characterArray[i]==="r"){
		alphabet[17]++
	}
	if(characterArray[i]==="s"){
		alphabet[18]++
	}
	if(characterArray[i]==="t"){
		alphabet[19]++
	}
	if(characterArray[i]==="u"){
		alphabet[20]++
	}
	if(characterArray[i]==="v"){
		alphabet[21]++
	}
	if(characterArray[i]==="w"){
		alphabet[22]++
	}
	if(characterArray[i]==="x"){
		alphabet[23]++
	}
	if(characterArray[i]==="y"){
		alphabet[24]++
	}
	if(characterArray[i]==="z"){
		alphabet[25]++
	}
	
}

//console.log(alphabet)

//check if the word saved in variable anagram is actually an anagram
var anagramArray=anagram.split("");
//console.log(anagramArray)

for(i=0;i<anagram.length;i++){
	if(anagramArray[i]==="a"){
		alphabet[0]--
	}
	if(anagramArray[i]==="b"){
		alphabet[1]--
	}
	if(anagramArray[i]==="c"){
		alphabet[2]--
	}
	if(anagramArray[i]==="d"){
		alphabet[3]--
	}
	if(anagramArray[i]==="e"){
		alphabet[4]--
	}
	if(anagramArray[i]==="f"){
		alphabet[5]--
	}
	if(anagramArray[i]==="g"){
		alphabet[6]--
	}
	if(anagramArray[i]==="h"){
		alphabet[7]--
	}
	if(anagramArray[i]==="i"){
		alphabet[8]--
	}
	if(anagramArray[i]==="j"){
		alphabet[9]--
	}
	if(anagramArray[i]==="k"){
		alphabet[10]--
	}
	if(anagramArray[i]==="l"){
		alphabet[11]--
	}
	if(anagramArray[i]==="m"){
		alphabet[12]--
	}
	if(anagramArray[i]==="n"){
		alphabet[13]--
	}
	if(anagramArray[i]==="o"){
		alphabet[14]--
	}
	if(anagramArray[i]==="p"){
		alphabet[15]--
	}
	if(anagramArray[i]==="q"){
		alphabet[16]--
	}
	if(anagramArray[i]==="r"){
		alphabet[17]--
	}
	if(anagramArray[i]==="s"){
		alphabet[18]--
	}
	if(anagramArray[i]==="t"){
		alphabet[19]--
	}
	if(anagramArray[i]==="u"){
		alphabet[20]--
	}
	if(anagramArray[i]==="v"){
		alphabet[21]--
	}
	if(anagramArray[i]==="w"){
		alphabet[22]--
	}
	if(anagramArray[i]==="x"){
		alphabet[23]--
	}
	if(anagramArray[i]==="y"){
		alphabet[24]--
	}
	if(anagramArray[i]==="z"){
		alphabet[25]--
	}
}

//console.log(alphabet)

var counter=0;
for(i=0;i<alphabet.length;i++){
	if(alphabet[i]!==0){
		counter++
	}	
}
if(counter!==0){
	console.log(" is not an anagram")
}
else console.log(" is an anagram")

}