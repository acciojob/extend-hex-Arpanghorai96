const extendHex = (shortHex) => {
  // write your code here
	let newhexcode="";
	for(let i=0;i<shortHex.lenghtl;i++)
		{
			if(shortHex.charAt(0)=="#")
			{
				continue;
			}
			else
			{
				newhexcode=newhexcode+shortHex.charAt(i)+shortHex.charAt(i);
			}
		}
	return "#"+newhexcode;
};

// Do not change the code below.
const shortHex = prompt("Enter Short Hex.");
alert(extendHex(shortHex));
