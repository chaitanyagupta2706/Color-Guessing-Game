var numSquares = 9;
var colors = generateRandomColors(numSquares);
var h1 = document.querySelector("h1");
var rgbColor = document.getElementById("rgbColor");
var pickedColor = pickColor();
rgbColor.textContent = pickedColor;
var message = document.getElementById("message");
var squares = document.querySelectorAll(".square");
var reset = document.querySelector("#reset");
var easy = document.querySelector("#easy");
// var medium = document.querySelector("#medium");
var hard = document.querySelector("#hard");

easy.addEventListener("click", function(){
	this.classList.add("selected");
	// medium.classList.remove("selected");
	hard.classList.remove("selected");
	numSquares = 3;

	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	rgbColor.textContent = pickedColor;

	for(var i=0;i<squares.length;i++)
	{
		if(colors[i])
		{
			squares[i].style.background = colors[i];
		}
		else
		{
			squares[i].style.display = "none";
		}
	}
});

// medium.addEventListener("click", function(){
// 	this.classList.add("selected");
// 	easy.classList.remove("selected");
// 	hard.classList.remove("selected");
// 	numSquares = 6;

// 	colors = generateRandomColors(numSquares);
// 	pickedColor = pickColor();
// 	rgbColor.textContent = pickedColor;

// 	for(var i=0;i<squares.length;i++)
// 	{
// 		if(colors[i] && i<3)
// 		{
// 			squares[i].style.background = colors[i];
// 		}
// 		else
// 			if(colors[i] && i<6)
// 		{
// 			 squares[i].style.display = "none";	
// 		}
// 	}
// });

hard.addEventListener("click", function(){
	this.classList.add("selected");
	// medium.classList.remove("selected");
	easy.classList.remove("selected");
	numSquares = 9;

	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	rgbColor.textContent = pickedColor;

	for(var i=0;i<squares.length;i++)
	{
		squares[i].style.background = colors[i];
		squares[i].style.display = "block";	
	}
});

reset.addEventListener("click", function(){
	//generate all new colors
	colors = generateRandomColors(numSquares);

	//pick a new random color from array
	pickedColor = pickColor();

	//change rgbColor to match picked color
	rgbColor.textContent = pickedColor;
    this.textContent = "New Colors"
	message.textContent = "";

	//change color of squares
	for(var i=0;i<squares.length;i++)
	{
		squares[i].style.background = colors[i];
	}

	h1.style.background = "steelblue";
});

for(var i=0;i<squares.length;i++)
{
	// add initial colors to the squares
	squares[i].style.background = colors[i];

	//add click listeners to squares
	squares[i].addEventListener("click", function(){

  		//grab color of clicked square
		var clickedColor = this.style.background;

		//compare clickedColor with pickedColor
		if(clickedColor===pickedColor)
		{
			h1.style.background = clickedColor;
			changeColors(clickedColor);
			message.textContent = "Correct";
			reset.textContent = "Play Again?"
		}
		else
		{
		this.style.background = "#232323";
		message.textContent = "Try Again";
		}
	});
}

function changeColors(color)
{
	//loop through all colors

	for(var i=0;i<squares.length;i++)
	{
		//change each color to match given color
		squares[i].style.background = color;
	}
}
//function to generate random color from colors array
function pickColor(){
	var random = Math.floor(Math.random()*colors.length);
	return colors[random];
}

//function to generate x number of random colors4
function generateRandomColors(x)
{
	//make an array
	var arr = [];

	//add x random colors to array
	for(var i=1;i<=x;i++)
	{
		//get random color
		arr.push(randomColors());
	}

	//return that array
	return arr;
}

function randomColors()
{
	//pick a red from 0-255
	var r = Math.floor(Math.random() * 256);

	//pick a green from 0-255
	var g = Math.floor(Math.random() * 256);

	//pick a blue from 0-255
	var b = Math.floor(Math.random() * 256);

	return "rgb(" + r + ", " + g + ", " + b +")";
}