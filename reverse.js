function encode()
{
	var plain_text = document.getElementById("message").value;
	var to_encode = plain_text.toUpperCase();
	var alphabet=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']	
	var reverse=['Z','Y','X','W','V','U','T','S','R','Q','P','O','N','M','L','K','J','I','H','G','F','E','D','C','B','A']
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
			var letter = reverse[input];
			cypher_text.push(letter);
		}
	}
	document.getElementById("output").innerHTML = cypher_text.join("");
}
function decode()
{
	var plain_text = document.getElementById("message").value;
	var to_encode = plain_text.toUpperCase();
	var alphabet=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']	
	var reverse=['Z','Y','X','W','V','U','T','S','R','Q','P','O','N','M','L','K','J','I','H','G','F','E','D','C','B','A']
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
			var letter = reverse[input];
			cypher_text.push(letter);
		}
	}
	document.getElementById("output").innerHTML = cypher_text.join("");
}