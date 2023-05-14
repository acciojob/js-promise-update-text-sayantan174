//your JS code here. If required.
const output = document.getElementById("output");
function updateText() {
	return new Promise(resolve=>{
	    setTimeout(resolve, 1000, "Hello, world!");
	})
}
const promise = updateText();
promise.then(data=>{
	output.innerText=data;
})
