//LOOPS 
// For loop:
console.log("for loop ........");
for (i = 1 ; i <= 5 ; i++){
    console.log(i);
    
}

//while loop
console.log("while loop ........");
let itemNumber = 1;

while (itemNumber <= 3){
    console.log("Item Number " + itemNumber);
    itemNumber++;
    
}

//do while loop
console.log("do while loop ........");
let correctPin = "1234" ;
let enteredPin ;
do{
    enteredPin = prompt("enter PIN:")
    if (enteredPin == correctPin) {
        alert("logged in successfully");
    }
    else{
        alert("incorrect Pin");
    }

}while(enteredPin != correctPin)

//Loop with User Input
console.log("Loop with User Input..........")
let helloCount = Number(prompt("how many times do you wanna print HELLO"));
for (i=0 ; i<helloCount ; i++)
{
    console.log("Hello");
    
}

//Bonus...
console.log("........Bonus.........");
//numbers from 10 to 1:
for (i=10 ; i>=1 ; i--){
    console.log(i);
    
}
//even numbers (1-10)
console.log("Even numbers.......");
for (i=1 ; i<=10 ; i++){
    (i%2 == 0) ? console.log(i) : null;
    
    
}





