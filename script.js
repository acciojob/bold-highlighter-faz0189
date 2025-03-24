function highlight() {
    let boldwords = document.querySelectorAll("strong")
	boldwords.forEach(pet=>{
		pet.style.color = "rgb(0, 128, 0)";
	});


}


function return_normal() {
    let normalwords = document.querySelectorAll("strong")
normalwords.forEach(pet=>{
		pet.style.color = "rgb(0, 0, 0)";
	});

    
}

