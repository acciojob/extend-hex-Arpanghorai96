const extendHex = (shortHex) => {
  // write your code here
	let newhexcode="";
	let r=shortHex[0];
	let g=shortHex[1];
	let b=shortHex[2];
	let newhexcode=`#${r}${r}${g}${g}${b}${b}`;
		return newhexcode;
};

// Do not change the code below.
const shortHex = prompt("Enter Short Hex.");
alert(extendHex(shortHex));
