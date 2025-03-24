function highlight() {
    let boldwords = document.querySelectorAll("strong")
	boldwords.forEach(word=>{
		word.style.color = "rgb(0, 128, 0)";
	});


}


function return_normal() {
    let normalwords = document.querySelectorAll("strong")
normalwords.forEach(word=>{
		word.style.color = "rgb(0, 0, 0)";
	});

    
}


