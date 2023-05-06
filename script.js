
// Declaring variables 
var exp_out = document.getElementById("expression_div");
var inp_ans = document.getElementById("answer");
var score_out = document.getElementById("score_div");
var water = document.getElementById("water");
var rope = document.getElementById("rope");
var distance_out = document.getElementById("height");
var play_agn_btn = document.getElementById("play_agn_btn");
var game_over_out = document.getElementById("game_over");
var game_div = document.getElementById("game_div");
var correct_ans;
var score = 0;
var waterdepth = 10;
var rope_len = 70;


function get_ans(){ // This function will generate random numbers and make an expression
// Declaring Random values for each variable //
var a = Math.floor(Math.random() * 50);
var b = Math.floor(Math.random() * 40);
var c = Math.floor(Math.random() * 30);
var d = Math.floor(Math.random() * 20);
var e = Math.floor(Math.random() * 10);
var f = Math.floor(Math.random() * 100);

// Declaring expression in array//
var expression = [
					e + ' * ' +  e  + ' + ( ' + a + ' - ' + b + ' ) ',
					c + ' / ' + a ,
					d + ' - ' + a + ' + ( ' + b + ' * ' + e + ')'

				];

var choose_exp = Math.floor(Math.random() * expression.length);
correct_ans = eval(expression[choose_exp]).toFixed(0);
exp_out.innerHTML = expression[choose_exp];
return correct_ans;
}

// This function will increase the water level of a game //
setInterval(()=>{
	waterdepth = waterdepth + 0.5;
	water.style.height = waterdepth+"%";
	score_out.innerHTML = "Score : " + score;
	distance_out.innerHTML = "Height : "+rope_len+"m";
	if(100 - (waterdepth + rope_len + 5) < 0){
		game_over();
	}

},1000);


function decrease_depth(){ // This will decrease the depth of water if answer is correct //
	waterdepth = waterdepth - 1;
	water.style.height = waterdepth + "%";
}
function decrease_rope(){ // This function will decrease the rope length and pull the man upward //
	rope_len = rope_len - 1;
	rope.style.height = rope_len + "%";
}
function game_over(){// This function will run when game is over //
	game_over_out.classList.remove("invisible");
	game_over_out.classList.add("visible");
	game_div.style.pointerEvent = "none";
}
rope.style.height = rope_len + "%";
// Running get_ans() function when page is loded //
get_ans();


// This function will run when user start to input
inp_ans.addEventListener('input',()=>{
	// Checking wether input_answer is equal to correct_ans or not //
	if(inp_ans.value == correct_ans){
		if(rope_len<=20){
			game_over();
		}
		else{
			get_ans();
			inp_ans.value = "";
			score++;
			decrease_depth();
			decrease_rope();
		}
	}
});

// This function will run when user want's to play again //
play_agn_btn.addEventListener('click',()=>{
	location.reload();
})