let basket = ["Apple","Banana","Orange","Pear"];


function preload(){
	
}

function setup() {
	createCanvas(500, 500);
	background(55);
	rectMode(CENTER);

}

function draw() {	
}
console.log(basket)

console.log(basket[0])
console.log(basket[basket.length-1])

for(let i=0;i<basket.length;i++){
	if(basket[i]=='Banana') {//hunts down Banana
		basket.splice(i,1,'kiwi');
		console.log(basket);
	}
}

basket.pop();
console.log(basket);

basket.unshift('Mango');
console.log(basket);

for(let i=0;i<basket.length;i++){
		console.log(basket[i]);
}

for(let i=0;i<basket.length;i++){
		console.log("Fruit " + (i+1) +": " + basket[i]);
}

for(let i=0;i<basket.length;i++){
	if(basket[i]=='Orange') {
		console.log("Orange found at index: " + i);
	} else if (i==(basket.length-1)){
		console.log("Orange not found");
	}
}










	//Prompt testing (Does not work)

	// let Fruits = []; //This will be a dummy array
	// let newFruit;
	// let order;

	// newFruit = prompt("Add a fruit"); //prompts user when page starts
	// if(newFruit){ //Checks if NewFruit is true
	// 	order = int(prompt("where do you want to put it? 1 - "+ basket.length ));

	// 	if(order){
			
			
	// 		for(let i=0;i<=basket.length;i++){ //fills dummy array and adds newFruit in the middle
	// 			if(i=(order-1)){
	// 				Fruits.push(newFruit)
	// 			}
	// 			else{
	// 				if(i=basket.length){
	// 					Fruits.push(basket[i-1])
	// 				}else{
	// 					Fruits.push(basket[i]);
	// 				}
	// 			}

	// 		}

	// 		for(let i=0;i<basket.length;i++){
	// 			basket.pop();
	// 		}

	// 		for(let i=0;i<Fruits.length;i++){
	// 			basket.push(Fruits[i]);
	// 		}

	// 		order = null;

	// 		//Note for self: Need to optimise the process above
	// 	} else {
	// 		basket.push(newFruit);
	// 		newFruit = null;
	// 	}
	// }
