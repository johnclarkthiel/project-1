To begin ... Layout: 

Attacking HTML first, then JS, and finally CSS. 

Basic HTML layout:
For HTML, I'm thinking three container divs. Two will be oriented vertically on the sides as side bars. One will be oriented between the sidebars. The left sidebar will contain buttons for betting, dealing, hitting, standing, splitting (might not do this), doubling down, and walking away, all which control gameplay. The right sidebar will contain game information; i.e., dealer/player turn, card totals, money totals and so on, all of which will be housed in divs. The middle div will contain the cards (either just the player cards or the player in the dealer cards ... haven't decided yet). 

JS--data structures, game play, winning parameters, reset

Data:
Oh man, let's see ... There will need to be variables defined for the player and the computer. There will need to be some kind of array or object that will store the card data ... perhaps a constructor? Will experiment with this ... I'm thinking contstructor is maybe a good way to go. You can define one for each number set and then apply them to four different sets of numbers, which will be the suits. Will try that first ... 

Player starts off with a pot of $1000. Minimum bet is $100, so there's a minimum of five games (with doubling down). The player can play as long as his/her pot does not hit $0.  

Game play:
Ok, moving on to game functionality ... We have the buttons on the side bar. On click they should all do something. Bet shoud take the initial bet, deal should deal the cards to the player then the dealer (thinking this will add numbers to a zero starting point ... arrays might also be an option), double down will increase bet by two, walk away will cause the player's money to go to zero (which brings up another point, the player needs a game value and a money pot), etc. Deal can use a Math.random method to pick a card, take it's numerical value and add it to the player or dealer card total. 

After the initial deal, the card values need to be checked for winning combinations (i.e, black jack ... an alert should go off if this happens and the player and dealer totals should be reset). After the player sees the initial value he/she can choose to either hit, stand, double down (which doubles the bet and adds one more card value to the total befor checking for winning parameters), split (maybe) and quit (which resets the pot and declares the player a loser of the game).

Winning parameters: 
Let's see, this shoud be fairly simple. The higher value of the player and dealer up to 21 wins (unless they're equal, which results in a push). If either player goes over 21 it will automatically declare that player to have lost the game. The dealer will have to hit up to 17 ... once it hits 17 the dealer stops adding value, so 17-21 the dealer stops, over 21 the dealer loses.

CSS: 

Will probably add more to this later. I want a simple, green background, with white blocks on the sidebards and white outlines for where the cards should go. When the cards are dealth, I want the cards to appear in the card divs (maybe use card images, not sure yet). I want this to be animated somehow ... will need to figure all this out ... I think this will be the last part of the game, as functionality is more important at this stage. 

Timeline:
Thursday: Get layout down and data structures. Try to start adding gameplay functionality. 

Friday: Finish layout and data structures, finish basic game play functionality.

Saturday: Add more complexity to game play (make sure all basic functions work first, then move on) and start working on design.

Sunday: Continue this ... need a pretty, working version by Monday. 

Monday: Hone everything ... you need something halfway decent to present. 



