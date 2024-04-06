function myFunction(){
    alert("Confirm your email")
}
// Add an event listener to the document that waits until the DOM is ready
document.addEventListener("DOMContentLoaded", function () {
	// Grab the UL for #blockGallery and assign it to the variable 'blockGallery'
	let blockGallery = document.getElementById("blockGallery");

	// Create an array called 'blockLinks' to contain all the A elements inside the above variable
	let blockLinks = blockGallery.querySelectorAll("a");

	// Make a loop that iterates through each item in the 'blockLinks' array
	for (var i = 0; i < blockLinks.length; i++) {
		// For each one of the A elements inside the array 'blockLinks', attach an onclick attribute that calls an anonymous function
		blockLinks[i].onclick = function () {

			// Capture the value of the href attribute as a variable called 'blockHref'
			let blockHref = this.getAttribute("href");

			// Grab the IMG element just below the UL containing the links to each of the block images with the appropriate ID
			let blockImage = document.getElementById("blockImage");

			// Change the src attribute of the above IMG element using the setAttribute method, using the 'blockHref' variable
			blockImage.setAttribute("src", blockHref);

			// Obtain the title attribute of the link clicked and set it as the value for a new variable called 'blockCaption'
			let blockCaption = this.getAttribute("title");

			// Create a variable called 'blockCaptionParagraph' that represents the P element with the id 'blockCaption'
			let blockCaptionParagraph = document.getElementById("blockCaption");

			// Set the text of that paragraph to be equal to the value of the title attribute for the link clicked
			blockCaptionParagraph.firstChild.nodeValue = blockCaption;

			// Cancel the default behaviour of each hyperlink
			return false;
		}
	}
});