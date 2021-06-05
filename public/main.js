
document.getElementById("change-btn").addEventListener("click", changeBackground);

function changeBackground() {
    //Change background onclick
   fetch("https://source.unsplash.com/random/1920x1080/?wallpaper,landscape")
    .then( data => {
        document.body.style.backgroundImage= `url(${data.url})`;           
    })
		.then (
			fetch('https://type.fit/api/quotes')
    	.then(response => response.json())
    	.then(quotelist => {
				let randomIndexNum = Math.floor(Math.random()* quotelist.length);
				document.querySelector(".quote").innerHTML = quotelist[randomIndexNum].text;
				document.querySelector(".author").innerHTML = quotelist[randomIndexNum].author;
    }))

    

}
