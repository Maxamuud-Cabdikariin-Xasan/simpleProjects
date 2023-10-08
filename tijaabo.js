// vote program Js code
function voteProgram() {
    baseAge = 18;
    unBorn = 0;
    let age = prompt("Enter your Age: ");
    document.getElementById("vote-program-title").style.margin="0px";
    age > baseAge?document.getElementById("voteResult").innerHTML="You can vote"
    :age <=unBorn?document.getElementById("voteResult").innerHTML="This person is not born yet!!"
    :document.getElementById("voteResult").innerHTML="Sorry! you can't vote";

}

function numCheck() {
    // number checker program Js code
    number = prompt("Enter a Number: ");
    document.getElementById("num-checker-title").style.margin="0px";
    isNaN(number)?alert("Enter a valid Number")
    :number %2==0?document.getElementById("numResult").innerHTML="Even Number"
    :document.getElementById("numResult").innerHTML="Odd Number"

}

function inc$Statement() {
    cost$ = prompt("Enter Your Cost:");
    expense$ = prompt("Enter Your Expense:");
    document.getElementById("income-statement-title").style.margin="0px";
    cost$ > expense$ ?document.getElementById("profitResult").innerHTML="You Profit"
    :document.getElementById("profitResult").innerHTML="Your Loss"
}