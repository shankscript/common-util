try {
	console.log(require("../index")("Shanks"));
	console.log("Test passed");
} catch(e) {
	console.error("Test Failed : - " + e);
}