function encode()
{
	var plain_text = document.getElementById("message").value;
	var to_encode = plain_text.toUpperCase();
	var alphabet=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',' ']	
	var morse_code = ['.-', '-...', '-.-.', '-..', '.', '..-.', '--.', '....', '..', '.---', '-.-', '.-..', '--', '-.', '---', '.--.', '--.-', '.-.', '...', '-', '..-', '...-', '.--', '-..-', '-.--', '--..',"/"]
	var cypher_text=[];
	
	for(var idx=0; idx<to_encode.length; idx++)
	{
		var input = alphabet.indexOf(to_encode[idx]);
		if(input==-1)
		{
			cypher_text.push(to_encode[idx]);
		}
		else
		{
			var letter = morse_code[input];
			cypher_text.push(letter, ' ');
		}
	}
	document.getElementById("output").innerHTML = cypher_text.join("");
}
function decode()
{
	var to_decode = document.getElementById("message").value;
	var alphabet=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',' ']	
	var morse_code = ['.-', '-...', '-.-.', '-..', '.', '..-.', '--.', '....', '..', '.---', '-.-', '.-..', '--', '-.', '---', '.--.', '--.-', '.-.', '...', '-', '..-', '...-', '.--', '-..-', '-.--', '--..',"/"]
	var cypher_text=[];
	for(var idx=0; idx<to_decode.length; idx++)
	{
		var split_decode = to_decode.split(' ');
		var input = morse_code.indexOf(split_decode[idx]);
		if(input==null)
		{
			cypher_text.push(to_decode[idx]);
			cypher_text.push("TEST1");
		}
		else
		{
			var letter = alphabet[input];
			cypher_text.push(letter);
		}
	}
	document.getElementById("output").innerHTML = cypher_text.join("");
}