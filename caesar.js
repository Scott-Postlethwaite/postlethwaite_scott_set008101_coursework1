function encode()
{
	var plain_text = document.getElementById("message").value;
	var to_encode = plain_text.toUpperCase();
	var rotation_box = document.getElementById("rotations").value;
	var rotations = parseInt(rotation_box);
	var alphabet=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']	
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
			var coded = (input+rotations)%26;
			var letter = alphabet[coded];
			cypher_text.push(letter);
		}
	}
	document.getElementById("output").innerHTML = cypher_text.join("");
}
function decode()
{
	var plain_text = document.getElementById("message").value;
	var to_encode = plain_text.toUpperCase();
	var rotation_box = document.getElementById("rotations").value;
	var rotations = parseInt(rotation_box);
	var decode_rotations = 26-(rotations%26);
	var alphabet=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']	
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
			var coded = (input+decode_rotations)%26;
			var letter = alphabet[coded];
			cypher_text.push(letter);
		}
	}
	document.getElementById("output").innerHTML = cypher_text.join("");
}