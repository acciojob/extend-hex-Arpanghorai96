const extendHex = (shortHex) => {
  // write your code here
	let newhexcode="";
	let r,g,b;
	if(shortHex[0]=="#")
	{
		
	r=shortHex[1];
	g=shortHex[2];
	b=shortHex[3];
	}
	else
	{	
	r=shortHex[0];
	g=shortHex[1];
	b=shortHex[2];
	}
	newhexcode=`#${r}${r}${g}${g}${b}${b}`;
		return newhexcode;
};

// Do not change the code below.
// const shortHex = prompt("Enter Short Hex.");
// alert(extendHex(shortHex));
