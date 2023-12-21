function makeid(l) {
  // write your code here
	let ans='';
	for(let i=0;i<l;i++){
		if(i%2===0)ans+='1';
		else ans+='a';
	}
	return ans;
}

// Do not change the code below.
const l = prompt("Enter a number.");
alert(makeid(l));