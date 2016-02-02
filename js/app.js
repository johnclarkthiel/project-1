//To begin ... 
$(function() {

// Constructor that creates a suit, a set of 12 objects (last object is an array of two objects), and a function that takes a random number between 0-12, and 
//returns the index position of the number that is randomly generated
function Cards(suit) {
	this.suit = suit;		//should I use an array of objects here? { name: "Two", value : 2} ???
	this.cards = [{name : "Two", text : "2", value : 2, fresh : true}, {name : "Three", text : "3", value : 3, fresh : true}, 
	{name : "Four", text : "4", value : 4, fresh : true}, {name :"Five", text: "5", value : 5, fresh : true},
	{name : "Six", text : "6", value : 6, fresh : true},{name : "Seven", text : "7", value :7, fresh : true},
	{name : "Eight", text: "8", value : 8, fresh : true},{name : "Nine", text : "9", value : 9, fresh : true},
	{name : "10", text : "10", value : 10, fresh : true}, {name : "Jack", text : "J", value :10, fresh : true},
	{name:"Queen", text : "Q", value :10, fresh : true},{name : "King", text : "K", value :10, fresh : true},
	[{name: "Ace", text : "A", value :1, fresh : true},{name: "Ace", text : "A", value : 11, fresh : true}]]; 
	this.getCard = function () {
		var card = Math.floor(Math.random()*13);
			switch(card) {
				case 0 : 
					alert(this.cards[0].name + " of "); //should be 2
					return this.cards[0];
					break;
				case 1 : 
					alert(this.cards[1].name + " of "); //should be 3
					return this.cards[1];
					break;
				case 2 : 
					alert(this.cards[2].name + " of "); //should be 4
					return this.cards[2];
					break;
				case 3 :
					alert(this.cards[3].name + " of "); //should be 5
					return this.cards[3];
					break;
				case 4 :
					alert(this.cards[4].name + " of "); // should be 6
					return this.cards[4];
					break;
				case 5 :
					alert(this.cards[5].name + " of "); // should be 7
					return this.cards[5];
					break;
				case 6 :
					alert(this.cards[6].name + " of ");	//should be 8
					return this.cards[6];
					break;					
				case 7 :
					alert(this.cards[7].name + " of "); // should be 9
					return this.cards[7];
					break;
				case 8 :
					alert(this.cards[8].name + " of "); // should be 10
					return this.cards[8];
					break;
				case 9 :
					alert(this.cards[9].name + " of "); // should be jack 
					return this.cards[9];
					break;	
				case 10 :
					alert(this.cards[10].name + " of "); //should be Queen 
					return this.cards[10];
				case 11:
					alert(this.cards[11].name + " of "); //should be King 
					return this.cards[11];
					break;					
				case 12:
					alert(this.cards[12][0].name + " of "); //should be Ace ... if it is Ace, runs through a number of conditions based on the player and comp totals before returning the value
					if ( playerTotal < 11 && computerTotal < 11) {
							return this.cards[12][1];
						} else if ( playerTotal >= 11 && computerTotal >= 11 ) {
							return this.cards[12][0];
						} else if ($('#Player-Card-Two').is(':parent') && $('#Computer-Card-One').is(':parent') !== true) {
							return this.cards[12][1];
						} else if ($('#Computer-Card-One').is(':parent') && computerTotal < 11 || ('#Computer-Card-Two').is(':parent') && computerTotal < 11) {
							return this.cards[12][1];
						} else if ($('#Computer-Card-One').is(':parent') && computerTotal > 11 || $('#Computer-Card-Two').is(':parent') && computerTotal > 11) { 
							return this.cards[12][0];
						} else {
							var ace = prompt("1 or 11?");
							if (ace === "1") { 
								return this.cards[12][0];
							} else {
								return this.cards[12][1];
							}
					}
					break;					
					default:
					alert("This did not work.")
			}
	}
}
//this creates copies of the constructor with each suit
var hearts = new Cards("Hearts");
var spades = new Cards("Spades");
var diamonds = new Cards("Diamonds");
var clubs = new Cards("Clubs");

//uses a switch statement switch statement that takes generates a number between 0-3 and returns a suit of cards that are defined above
var getCardValue = function() {
	var rando = Math.floor(Math.random()*4);
	console.log(rando);

	switch(rando) {
		case 0 : 
				var draw = hearts;
				return draw;
			break;
		case 1 : 
				var draw = spades;
				return draw;
			break;
		case 2: 
				var draw = diamonds;
				return draw;
			break;
		case 3:
				var draw = clubs;
				return draw;
			break;
		default:
			alert("This did not work.")
	}

}//<-----getCardValue end

//arrays for naming the buttons, totals, and card divs
var buttonsArray = ['Bet', 'Deal', 'Hit', 'Stand', 'Double Down', 'Walk Away'];
var totalsArray = ['Player Total: ', 'Dealer Total: ',, 'Pot: ', 'Player Money: '];
var compCardArray = ['Comp-Card-One', 'Comp-Card-Two'];
var playerCardArray = ['Player-Card-One', 'Player-Card-Two'];

//Now the board ... creating it per my notes


//adding the first container, appending it to the body
var $containerOne = $('<div>').addClass('sidebar');
$('body').append($containerOne);
//adding 6 buttons, giving them a class of buttons, adding them to container one
for (var i = 0; i < 6; i++) {
	var $buttons = $('<button>').addClass('buttons').text(buttonsArray[i]);
	($containerOne).append($buttons);
}
//creating containertwo, giving it a class card-container, appending it to the body
var $containerTwo = $('<div>').addClass('card-container');
$('body').append($containerTwo);
//creating two card container divs, appending them to container two
for (var i = 0; i < 2; i++) {
	var $cardContainers = $('<div>').addClass('card-holders');
	($containerTwo).append($cardContainers);
}

//creating two divs for each card-holder divand giving them ids -- these will be the card divs
for (var i = 0; i < 2; i++ ) {
	var $compCards = $('<div>').attr('id', compCardArray[i]);
	$('.card-holders').eq(0).append($compCards);
	
	var $playerCards = $('<div>').attr('id', playerCardArray[i]);
	$('.card-holders').eq(1).append($playerCards);
}

var $containerThree = $('<div>').addClass('sidebar');
$('body').append($containerThree);

for (var i = 0; i  < 4; i++) {
	var $totals = $('<div>').addClass('totals').text(totalsArray[i]);
	$containerThree.append($totals);
}

//Now give it some functionality ... starting with a prompt that gives the rules

var heyhey = alert("Hi there, welcome to Simple Black Jack! The rules are simple. You get $1000 dollars to begin. Minimum bets are $100. You must bet in increments of $100. Payouts are 2:1, unless you win with black jack (21) ... The payout is 5:2 in that case. Press the bet button to start the game and place your bet. Press the deal button to deal the cards. After that, you can choose to hit, stand, double down or walk away. The dealer will hit until 17. Enjoy.");
//give buttons functionality

//Defines a number of variables that are used below ... also adds text to the computer and player totals
var playerTotal = 0;
var computerTotal = 0;

var $playerTotalStatus = $('.totals').eq(0).text("Player Total: " + playerTotal);
var computerTotalStatus = $('.totals').eq(1).text("Computer Total: " + computerTotal);

var userBet = 0;
var $userBetStatus = $('.totals').eq(2).text("Bet: " + userBet);

var playerMoney = 1000;
var $playerMoneyStatus = $('.totals').eq(3).text("Player Money: " + playerMoney);

var minimumBet = 100;
var doubleDown = 0;

var playerCardOne = 0;
var playerCardOneVal = 0;
var playerCardTwo = 0;
var playerCardTwoVal = 0;
var computerCardOne = 0;
var computCardOneVal = 0;
var computerCardTwo = 0;
var computerCardTwoVal = 0;
var hitCardVal = 0;
var compHitCard = 0;
var newHitCardVal = 0;
var newCompHitCardVal = 0;
var newerHitCardVal = 0;
var newerCompHitCardVal = 0;

//Bet button <<<<----------
$('.buttons').eq(0).click(function(){
	//asks the user how much they want to bet
	userBet = prompt("How much do you want to bet?");
	//if the bet is less than 100, not divisible by 100, more money than the player has, or zero, an alert will appear telling the user to re-bet
	if (userBet < minimumBet || userBet%100 !== 0 || userBet > playerMoney + 1 || userBet === 0) {
		alert("Minimum bet is $100, you cannot bet more than you have, and you must bet in increments of $100.");
	} else {
		//userBet is subtracted from player money, amd the totals text boxes get updated
		playerMoney = playerMoney - userBet;
		$('.totals').eq(2).text("Bet: " + userBet);
		$('.totals').eq(3).text("Player Money: " + playerMoney);
		return userBet;
	}
}); //<<<<<<<-------Bet button end

//Deal button <<<<<-----Deal button
$('.buttons').eq(1).click(function(){ //
	//only deals if there's nothing in the second player card box and there's a bet
	if (userBet !== 0 && $('#Player-Card-Two').is(':parent') !== true ) {
		playerCardOne = getCardValue(); //gets suit
		playerCardOneVal = playerCardOne.getCard(); //gets index position
		alert(playerCardOne.suit); //alerts suit

		$('#Player-Card-One').addClass(playerCardOne.suit).text(playerCardOneVal.text); //adds the suit as a class and the text of the object to the card div

		playerCardTwo = getCardValue(); //gets suit
		playerCardTwoVal = playerCardTwo.getCard(); //gets index position
		alert(playerCardTwo.suit); //alerts suit

		$('#Player-Card-Two').addClass(playerCardTwo.suit).text(playerCardTwoVal.text); //adds the suit as a class and the text of the object to the card div

		playerTotal = playerCardOneVal.value + playerCardTwoVal.value; //updates player total
		$('.totals').eq(0).text("Player Total: " + playerTotal); //updates player total text

		computerCardOne = getCardValue(); //gets suit
		computerCardOneVal = computerCardOne.getCard(); //gets index position
		alert(computerCardOne.suit); //alerts suit

		computerTotal = computerCardOneVal.value; //updates computer total
		$('#Comp-Card-One').addClass(computerCardOne.suit).text(computerCardOneVal.text); //adds the suit as a class and the text of the object to the card div

		$('.totals').eq(1).text("Computer Total: " + computerTotal); //updates comp total

		alert("You have: " + playerTotal + " and the dealer has " + computerTotal + ". Choose your next move."); //alerts the player with the totals
	} else {
		alert("You need to place your bet before playing, and you can't deal twice."); //<<<<<----- if no bet or there's already cards dealt, sends an alert
	}	
}); //<<<<<<----Deal button end

//sets a hit count
var hitCount = 0;
//Hit button <<<<<<<<----------Hit button ... basically checks a lot of scenarios and adds hit cards to the player and comp based on them
$('.buttons').eq(2).click(function(){
	//checks if the cards have been dealt, if they haven't sends an alert (bottom)
	if ($('#Player-Card-Two').is(':parent')) {

			//if there's been two hits and the computer has 17 or more
			if (hitCount === 2 && computerTotal >= 17 ) {
				//adds an additional hit card to the card container div
				var $newerHitCard = $('<div>');
				$('#Player-Card-Two').append($newerHitCard);

				//gets the value of the third hit card
				var newerhitcard = getCardValue(); //gets suit
				newerHitCardVal = newerhitcard.getCard(); //gets index position
				alert(newerhitcard.suit); //alerts suit
				$newerHitCard.addClass(newerhitcard.suit).text(newerHitCardVal.text); //adds a suit class and text to the card

				playerTotal = playerCardOneVal.value + playerCardTwoVal.value + hitCardVal.value + newHitCardVal.value + newerHitCardVal.value; //new player total
				$('.totals').eq(0).text("Player Total: " + playerTotal);

				hitCount += 1; //adds to the hit count
				//if the hit count is 2 and the comp has less than 17, create a new hit card for the player and comp
			} else if (hitCount === 2 && computerTotal <= 17 && standCount < 1) {
				var $newerHitCard = $('<div>');
				$('#Player-Card-Two').append($newerHitCard);

				//gets the value of the second hit card
				var newerhitcard = getCardValue(); //gets suit
				newerHitCardVal = newerhitcard.getCard(); //gets index position
				alert(newerhitcard.suit); //alerts suit
				$newerHitCard.addClass(newerhitcard.suit).text(newerHitCardVal.text); //adds a suit class and text to the card

				playerTotal = playerCardOneVal.value + playerCardTwoVal.value + hitCardVal.value + newHitCardVal.value + newerHitCardVal.value; //new player total
				$('.totals').eq(0).text("Player Total: " + playerTotal);

				var $newCompHitCard = $('<div>');
				$('#Comp-Card-Two').append($newCompHitCard);

				//gives comp hit card a value, puts it in the comp hit card text
				var newcomphitcard = getCardValue(); //gets suit
				newCompHitCardVal = newcomphitcard.getCard(); //gets index position
				alert(newcomphitcard.suit); //alerts suit
				$newCompHitCard.addClass(newcomphitcard.suit).text(newCompHitCardVal.text);

				//adds the comp hit card value and the comp card totals in a new variable then announces the score
				computerTotal = computerCardOneVal.value + computerCardTwoVal.value + compHitCardVal.value + newCompHitCardVal.value; 
				$('.totals').eq(1).text("Computer Total: " + computerTotal);

				hitCount += 1;
				//create a another hit card for the player if hit count is over three
			} else if ( hitCount >= 3 ) {
				var $newestHitCard = $('<div>');
				$('#Player-Card-One').append($newestHitCard);

				//gets the value of the second hit card
				var newesthitcard = getCardValue(); //gets suit
				newestHitCardVal = newesthitcard.getCard(); //gets index position
				alert(newesthitcard.suit); //alerts suit
				$newestHitCard.addClass(newesthitcard.suit).text(newestHitCardVal.text); //adds suit class and text to card

				playerTotal = playerCardOneVal.value + playerCardTwoVal.value + hitCardVal.value + newHitCardVal.value + newerHitCardVal.value + newestHitCardVal.value; //new player total
				$('.totals').eq(0).text("Player Total: " + playerTotal);
				hitCount += 1;
				//if there's been at least one hit
			} else if (hitCount >= 1 ) { 

				//adds an additional hit card to the second player card div
				var $newHitCard = $('<div>');
				$('#Player-Card-One').append($newHitCard);

				//gets the value of the second hit card
				var newhitcard = getCardValue(); //gets suit
				newHitCardVal = newhitcard.getCard(); //gets index position
				alert(newhitcard.suit); //alerts suit
				$newHitCard.addClass(newhitcard.suit).text(newHitCardVal.text);

				//totals player cards and hit cards
				playerTotal = playerCardOneVal.value + playerCardTwoVal.value + hitCardVal.value + newHitCardVal.value;


				$('.totals').eq(0).text("Player Total: " + playerTotal);

						// if the hit count is one or more and if the dealer has more than 17 ... do nothing but announce the score of the player and dealer
						if (computerTotal >= 17) {
							hitCount += 1;
							alert("You have: " + playerTotal + " and the dealer has " + computerTotal + ". Choose your next move.");

						//if the computer DOES NOT have 17, and there's been two stands and a hit or two hits and a stand, add another comp hit card
						} else if (standCount >=2 && hitCount >= 1 || hitCount >=2 && standCount >= 1) {
								var $newerCompHitCard = $('<div>');
								$('#Comp-Card-One').append($newerCompHitCard);

								//gives comp hit card a value, puts it in the comp hit card text
								var newercomphitcard = getCardValue(); //gets suit
								newerCompHitCardVal = newercomphitcard.getCard(); //gets index position
								alert(newercomphitcard.suit); //alerts suit
								$newerCompHitCard.addClass(newercomphitcard.suit).text(newerCompHitCardVal.text);

								//adds the comp hit card value and the comp card totals in a new variable then announces the score
								computerTotal = computerCardOneVal.value + computerCardTwoVal.value + compHitCardVal.value + newCompHitCardVal.value + newerCompHitCardVal.value; //this doesn't work
								$('.totals').eq(1).text("Computer Total: " + computerTotal);
								
								hitCount += 1;
								//if there's only been a hit and no stand, add a comp hit card
						} else {

							var $compHitCard = $('<div>');
							$('#Comp-Card-One').append($compHitCard);

							//gives comp hit card a value, puts it in the comp hit card text
							var comphitcard = getCardValue(); //gets suit
							compHitCardVal = comphitcard.getCard(); //gets index position
							alert(comphitcard.suit); //alerts suit
							$compHitCard.addClass(comphitcard.suit).text(compHitCardVal.text);

							//adds the comp hit card value and the comp card totals in a new variable then announces the score
							computerTotal = computerCardOneVal.value + computerCardTwoVal.value + compHitCardVal.value;
							$('.totals').eq(1).text("Computer Total: " + computerTotal);

							alert("You have: " + playerTotal + " and the dealer has " + computerTotal + ". Choose your next move.");
							
							hitCount += 1;
					}
			//if there was no hit (i.e., the player is looking to hit for the first time)
			}	else {
					//if there's three cards on the table, the player will get a hit  card and the computer will get its second card
					if (standCount < 1) {

						computerCardTwo = getCardValue(); //gets suit
						computerCardTwoVal = computerCardTwo.getCard(); //gets index position
						alert(computerCardTwo.suit); //alerts suit

						computerTotal = computerCardOneVal.value + computerCardTwoVal.value; //new comp total

						$('.totals').eq(1).text("Computer Total: " + computerTotal); //new comp total text
						$('#Comp-Card-Two').addClass(computerCardTwo.suit).text(computerCardTwoVal.text); //assigns suit class and gives card text


						var $hitCard = $('<div>'); //player hit card
						$('#Player-Card-Two').append($hitCard);

						var hitcard = getCardValue(); //gets suit
						hitCardVal = hitcard.getCard(); //gets index position
						alert(hitcard.suit); //alerts suit
						$hitCard.addClass(hitcard.suit).text(hitCardVal.text); //add suit class and give card text

						playerTotal = playerCardOneVal.value + playerCardTwoVal.value + hitCardVal.value; //new player total
						$('.totals').eq(0).text("Player Total: " + playerTotal); //player text

						alert("You have: " + playerTotal + " and the dealer has " + computerTotal + ". Choose your next move.");

						hitCount += 1;
						//if the comp has less than 17 and there's been a stand, the comp will hit and the player will hit
				} else if ( computerTotal < 17 && standCount < 2 ) {

					var $hitCard = $('<div>');
					$('#Player-Card-Two').append($hitCard);

					var hitcard = getCardValue(); //gets suit
					hitCardVal = hitcard.getCard(); //gets index position
					alert(hitcard.suit); //alerts suit
					$hitCard.addClass(hitcard.suit).text(hitCardVal.text); 

					playerTotal = playerCardOneVal.value + playerCardTwoVal.value + hitCardVal.value; 
					$('.totals').eq(0).text("Player Total: " + playerTotal);

					var $compHitCard = $('<div>');
					$('#Comp-Card-One').append($compHitCard);

					//gives comp hit card a value, puts it in the comp hit card text
					compHitCard = getCardValue(); //gets suit
					compHitCardVal = compHitCard.getCard(); //gets index position
					alert(compHitCard.suit); //alerts suit
					$compHitCard.addClass(compHitCard.suit).text(compHitCardVal.text); 

					//adds the comp hit card value and the comp card totals in a new variable then announces the score
					computerTotal = computerCardOneVal.value + computerCardTwoVal.value + compHitCardVal.value; 
					$('.totals').eq(1).text("Computer Total: " + computerTotal);

					alert("You have: " + playerTotal + " and the dealer has " + computerTotal + ". Choose your next move.");

					hitCount += 1;
					//if the computer has 17 and there's been a stand, the player will hit
				} else {
					var $hitCard = $('<div>');
					$('#Player-Card-Two').append($hitCard);

					var hitcard = getCardValue(); //gets suit
					hitCardVal = hitcard.getCard(); //gets index position
					alert(hitcard.suit); //alerts suit
					$hitCard.addClass(hitcard.suit).text(hitCardVal.text); //assigns card suit, gives text

					playerTotal = playerCardOneVal.value + playerCardTwoVal.value + hitCardVal.value;
					$('.totals').eq(0).text("Player Total: " + playerTotal);
					alert("You have: " + playerTotal + " and the dealer has " + computerTotal + ". Choose your next move.");

					hitCount += 1;
				}
			} //if there's been no cards dealt this message will display
		} else {
			alert("The cards need to be dealt before you hit."); //<<<<<<<<-----Cards need to be dealt alert
		}
		console.log(hitCount);
}); //<<<<<<<<<<<--------- End of hit button function

//counts the number of stands the user has
var standCount = 0;
//Stand button <<<<<<<<<<-------Stand function
$('.buttons').eq(3).click(function() { 
	//checks if computer card two id has a value, and if so it checks the following conditions
	if ($('#Comp-Card-Two').is(':parent') ) {

		// computertotal = computerCardOneVal.value + computerCardTwoVal.value;
		//if there was a hit and no stand or a stand and no hit and the dealer's cards are less than 17, hit the dealer
			if (hitCount < 2 && standCount < 1 || standCount < 2 && hitCount < 1 && computerTotal < 17 ) {
				var $compHitCard = $('<div>');
				$('#Comp-Card-One').append($compHitCard);

				//gives comp hit card a value, puts it in the comp hit card text
				var comphitcard = getCardValue(); //gets suit
				compHitCardVal = comphitcard.getCard(); //gets index position
				alert(comphitcard.suit); //alerts suit
				$compHitCard.addClass(comphitcard.suit).text(compHitCardVal.text);

				computerTotal = computerCardOneVal.value + computerCardTwoVal.value + compHitCardVal.value; //new total
				$('.totals').eq(1).text("Computer Total: " + computerTotal);
				standCount += 1;
			//if there's been a hit and a stand, hit the dealer again
			} else if (hitCount < 2 && standCount < 2 && computerTotal < 17) { 
					var $newCompHitCard = $('<div>');
					$('#Computer-Card-Two').append($newCompHitCard);

					//gives comp hit card a value, puts it in the comp hit card text
					var newcomphitcard = getCardValue(); //gets suit
					newCompHitCardVal = newcomphitcard.getCard(); //gets index position
					alert(newcomphitcard.suit); //alerts suit
					$newCompHitCard.addClass(newcomphitcard.suit).text(newCompHitCardVal.text);

					computerTotal = computerCardOneVal.value + computerCardTwoVal.value + compHitCardVal.value + newCompHitCardVal.value; //new total
					$('.totals').eq(1).text("Computer Total: " + computerTotal);
					standCount += 1;
				//if there's been more than two stands and the computer total is less than 17, hit the computer again
			} else if (standCount === 2 && computerTotal < 17) { 
					var $newCompHitCard = $('<div>');
					$('#Comp-Card-Two').append($newCompHitCard);

					//gives comp hit card a value, puts it in the comp hit card text
					var newcomphitcard = getCardValue(); //gets suit
					newCompHitCardVal = newcomphitcard.getCard(); //gets index position
					alert(newcomphitcard.suit); //alerts suit
					$newCompHitCard.addClass(newcomphitcard.suit).text(newCompHitCardVal.text);

					computerTotal = computerCardOneVal.value + computerCardTwoVal.value + compHitCardVal.value + newCompHitCardVal.value; //new total
					$('.totals').eq(1).text("Computer Total: " + computerTotal);
					standCount += 1;
					//if there's more than two hits, less than two stands and vice versa, and the computer has less than 17, hit the computer again
			} else if (hitCount === 2 && standCount < 2 && computerTotal < 17 || hitCount <2 && standCount === 2 && computerTotal < 17 ) {

					var $newerCompHitCard = $('<div>');
					$('#Computer-Card-One').append($newerCompHitCard);

					//gives comp hit card a value, puts it in the comp hit card text
					var newercomphitcard = getCardValue(); //gets suit
					newerCompHitCardVal = newercomphitcard.getCard(); //gets index position
					alert(newercomphitcard.suit); //alerts suit
					$newerCompHitCard.addClass(newercomphitcard.suit).text(newerCompHitCardVal.text);

					//adds the comp hit card value and the comp card totals in a new variable then announces the score
					computerTotal = computerCardOneVal.value + computerCardTwoVal.value + compHitCardVal.value + newCompHitCardVal.value + newerCompHitCardVal.value; //this doesn't work
					console.log(computerTotal);
					$('.totals').eq(1).text("Computer Total: " + computerTotal);
					standCount += 1;
					//if there's been three or more stans and the computer is still less than 17, hit the dealer a final time
			} else if (standCount >= 3 && computerTotal < 17 ) {
					var $newestCompHitCard = $('<div>');
					$('#Computer-Card-Two').append($newestCompHitCard);

					//gives comp hit card a value, puts it in the comp hit card text
					var newestcomphitcard = getCardValue(); //gets suit
					var newestCompHitCardVal = newestcomphitcard.getCard(); //gets index position
					alert(newestcomphitcard.suit); //alerts suit
					$newestCompHitCard.addClass(newestcomphitcard.suit).text(newestCompHitCardVal.text);

					//adds the comp hit card value and the comp card totals in a new variable then announces the score
					computerTotal = computerCardOneVal.value + computerCardTwoVal.value + compHitCardVal.value + newCompHitCardVal.value + newerCompHitCardVal.value + newestCompHitCardVal.value; //this doesn't work
					$('.totals').eq(1).text("Computer Total: " + computerTotal);
					standCount +=1;
			} else { //if the dealer/computer has 17 or more, the dealer does nothing
					console.log(computerTotal);
					alert("Dealer stands."); 
					standCount += 1;
			}

	} else { 
			if ($('#Comp-Card-One').is(':parent') ) {
				//if there's no stand or hit, give the comp/dealer its second card
				if (standCount < 1 && hitCount < 1 && computerTotal < 17) {
					computerCardTwo = getCardValue(); //gets suit
					computerCardTwoVal = computerCardTwo.getCard(); //gets index position
					alert(computerCardTwo.suit); //alerts suit
					computerTotal = computerCardOneVal.value + computerCardTwoVal.value;

					$('.totals').eq(1).text("Computer Total: " + computerTotal);
					$('#Comp-Card-Two').addClass(computerCardTwo.suit).text(computerCardTwoVal.text);

					standCount += 1;

				} else { //if there was a stand or hit, give the dealer/comp a hit card
						var $compHitCard = $('<div>');
						$('#Comp-Card-One').append($compHitCard);

						//gives comp hit card a value, puts it in the comp hit card text
						var comphitcard = getCardValue(); //gets suit
						compHitCardVal = comphitcard.getCard(); //gets index position
						alert(comphitcard.suit); //alerts suit
						$compHitCard.addClass(comphitcard.suit).text(compHitCardVal.text);

						//adds the comp hit card value and the comp card totals in a new variable then announces the score
						computerTotal = computerCardOneVal.value + computerCardTwoVal.value + compHitCardVal.value; //this doesn't work
						$('.totals').eq(1).text("Computer Total: " + computerTotal);
						standCount += 1;
						}
			} else {
				alert("You need to be dealt a hand first.");
			}
		}
}); //<<<<<----END STAND BUTTON function

//Double Down button <<<<<<-----DOUBLE DOWN function
$('.buttons').eq(4).click(function(){
	//checks if the cards have been dealt ... if they haven't, alerts the user that the cards need to be dealt
	if ($('#Player-Card-One').is(':parent') && $('#Player-Card-Two').is(':parent')) {
		if (hitCount === 0 && standCount === 0 && doubleDown === 0 && userBet <= playerMoney) { //prevents the user from doubling down twice, sends an alert below
			playerMoney = playerMoney - userBet; //substracts the userbet from player money again
			userBet = userBet*2; //doubles the user bet
			$('.totals').eq(2).text("Bet: " + userBet); //updates the text box
			$('.totals').eq(3).text("Player Money: " + playerMoney); //updates the text bos
			doubleDown += 1;
			} else {
				alert("You can't double down again, dude-bro. And you can't bet more than you have.");
			}
	} else {
		alert("You need to play a hand before you can double-down!");
	}


}); //<<<<<<<<------End double down function

//Walk away button <<<<<<<<<--------walk away function
$('.buttons').eq(5).click(function(){ //resets player total, computer total, user bet, the counts, and text boxes, alerts the user of their total money and reloads the page
	playerTotal = 0; 
	computerTotal = 0;
	userBet = 0;
	hitCount = 0;
	standCount = 0;
	doubleDown = 0;
	$('.totals').eq(0).text("Player Total: " + playerTotal);
	$('.totals').eq(1).text("Computer Total: " + computerTotal);
	$('.totals').eq(2).text("Bet: " + 0);
	alert("You walk away with: " + playerMoney + ". Have a great day.");
	playerMoney = 0;
	$('.totals').eq(3).text("Player Money: " + playerMoney);
	location.reload();
}); //<<<<<<<<---------End walk away function

//winning conditions <<<<<<<<--------Winner check function
var checkWinner = function() { //runs through a number of scenarios for winning (if the player has 21, if the computer has 21, etc.) and restets everything and adds the userbet to the player money for wins
	if (playerTotal === 21) {
		alert("You win.");
			playerTotal = 0;
			computerTotal = 0;
			playerMoney = userBet*2.5 + userBet*1 + playerMoney;
			userBet = 0;
			hitCount = 0;
			standCount = 0;
			doubleDown = 0;
			$('.card-holders div').empty();
			$('div').removeClass('Hearts Diamonds Clubs Spades');	
			$('.totals').eq(0).text("Player Total: " + playerTotal);
			$('.totals').eq(1).text("Computer Total: " + computerTotal);
			$('.totals').eq(2).text("Bet: " + userBet);
			$('.totals').eq(3).text("Player Money: " + playerMoney);
	}

	if (playerTotal === 21 && computerTotal === 21) {
		alert("It's a tie.");
			playerTotal = 0;
			computerTotal = 0;
			playerMoney = userBet*1 + playerMoney;
			userBet = 0;
			hitCount = 0;
			standCount = 0;
			doubleDown = 0;
			$('.card-holders div').empty();
			$('div').removeClass('Hearts Diamonds Clubs Spades');	
			$('.totals').eq(0).text("Player Total: " + playerTotal);
			$('.totals').eq(1).text("Computer Total: " + computerTotal);
			$('.totals').eq(2).text("Bet: " + userBet);
			$('.totals').eq(3).text("Player Money: " + playerMoney);
	}

	if (computerTotal === 21 && playerTotal !== 21) {
		alert("You lose.");
			playerTotal = 0;
			computerTotal = 0;
			userBet = 0;
			hitCount = 0;
			standCount = 0;
			doubleDown = 0;
			$('.card-holders div').empty();
			$('div').removeClass('Hearts Diamonds Clubs Spades');			
			$('.totals').eq(0).text("Player Total: " + playerTotal);
			$('.totals').eq(1).text("Computer Total: " + computerTotal);
			$('.totals').eq(2).text("Bet: " + userBet);
			$('.totals').eq(3).text("Player Money: " + playerMoney);
	}

	if (playerTotal > 21) {
		alert("You lose.");
		playerTotal = 0;
		computerTotal = 0;
		userBet = 0;
		hitCount = 0;
		standCount = 0;
		doubleDown = 0;
		$('.card-holders div').empty();
		$('div').removeClass('Hearts Diamonds Clubs Spades');		
		$('.totals').eq(0).text("Player Total: " + playerTotal);
		$('.totals').eq(1).text("Computer Total: " + computerTotal);
		$('.totals').eq(2).text("Bet: " + userBet);
		$('.totals').eq(3).text("Player Money: " + playerMoney);
	}

	if (computerTotal > 21) {
		alert("You win.");
		playerTotal = 0;
		computerTotal = 0;
		playerMoney = userBet*2 + userBet*1 + playerMoney;
		userBet = 0;
		hitCount = 0;
		standCount = 0;
		doubleDown = 0;
		$('.card-holders div').empty();
		$('div').removeClass('Hearts Diamonds Clubs Spades');		
		$('.totals').eq(0).text("Player Total: " + playerTotal);
		$('.totals').eq(1).text("Computer Total: " + computerTotal);
		$('.totals').eq(2).text("Bet: " + userBet);
		$('.totals').eq(3).text("Player Money: " + playerMoney);
	}

	if (playerTotal <=21 && computerTotal > 21) {
		alert("You win.");
		playerTotal = 0;
		computerTotal = 0;
		playerMoney = userBet*2 + userBet*1 + playerMoney;
		userBet = 0;
		hitCount = 0;
		standCount = 0;
		doubleDown = 0;
		$('.card-holders div').empty();
		$('div').removeClass('Hearts Diamonds Clubs Spades');	
		$('.totals').eq(0).text("Player Total: " + playerTotal);
		$('.totals').eq(1).text("Computer Total: " + computerTotal);
		$('.totals').eq(2).text("Bet: " + userBet);
		$('.totals').eq(3).text("Player Money: " + playerMoney);
	}

	if (computerTotal >= 17 && computerTotal === playerTotal) {
		alert("It's a tie.");
		playerTotal = 0;
		computerTotal = 0;
		playerMoney = userBet*1 + playerMoney;
		userBet = 0;
		hitCount = 0;
		standCount = 0;
		doubleDown = 0;
		$('.card-holders div').empty();
		$('div').removeClass('Hearts Diamonds Clubs Spades');			
		$('.totals').eq(0).text("Player Total: " + playerTotal);
		$('.totals').eq(1).text("Computer Total: " + computerTotal);
		$('.totals').eq(2).text("Bet: " + userBet);
		$('.totals').eq(3).text("Player Money: " + playerMoney);
	}

	if (computerTotal >= 17 && playerTotal <= 21 && playerTotal > computerTotal ) {
		alert("You win.");
		playerTotal = 0;
		computerTotal = 0;
		playerMoney = userBet*2 + userBet*1 + playerMoney;
		userBet = 0;
		hitCount = 0;
		standCount = 0;
		doubleDown = 0;
		$('.card-holders div').empty();
		$('div').removeClass('Hearts Diamonds Clubs Spades');	
		$('.totals').eq(0).text("Player Total: " + playerTotal);
		$('.totals').eq(1).text("Computer Total: " + computerTotal);
		$('.totals').eq(2).text("Bet: " + userBet);
		$('.totals').eq(3).text("Player Money: " + playerMoney);
	}

	if (computerTotal >= 17 && computerTotal <=21 && playerTotal > 20 && computerTotal > playerTotal) {
		alert("You lose.");
		playerTotal = 0;
		computerTotal = 0;
		userBet = 0;
		hitCount = 0;
		standCount = 0;
		doubleDown = 0;
		$('.card-holders div').empty();
		$('div').removeClass('Hearts Diamonds Clubs Spades');	
		$('.totals').eq(0).text("Player Total: " + playerTotal);
		$('.totals').eq(1).text("Computer Total: " + computerTotal);
		$('.totals').eq(2).text("Bet: " + userBet);
		$('.totals').eq(3).text("Player Money: " + playerMoney);
	}
} //<<<----_<<_<_<_---- END CHECK WINNER FUNCTION

//interval that runs the winner check function every half a second
var winnerCheck = setInterval(function(){
	checkWinner(); 
},500);

});//<<<<<-------END FUNCTION




