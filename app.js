const game=() =>{
	let pScore=0;
	let cScope=0;

	const startgame=()=>{
		const playBtn=document.querySelector(".intro button");
		const match = document.querySelector(".intro");
		playBtn.addEventListener("click".()=>{
			introscreen.classList.add("fadeOut");
			match.classList.add("fadeIn");
		});
	};
	const playMatch=()=>{
		const options=document.querySelectorAll(".options button");
		const playerHand=document.querySelector(".player-Hand");
		const computerHand=document.querySelector(".computer-hand");
		const hands=document.querySelectorAll(".hands img");

		hands.forEach(hand =>{
			hand.addEventListener("animationed"function(){

			});
			const computerOption=["rock","paper","scissors"];
			options.forEach(option=>{
				option.addEventListener{"click",function(){
					const computerNumber=Math.floor(Math.random()*3);
					const computerChoice=computerOptions[computerNumber];

					setTimeout()=>{
						computerHands(this.textContent,computerChoice);

					},2000);
					playerHand.style.animation="shakePlayer 2s ease";
					playerHand.style.animation="shakeComputer 2s ease";

				};
			});
		};

		const updateScore=()=>{
		const playerScore=document.querySelector{".player-score p")
        const computerScore=document.querySelector(".computer-score p");

        playerScore.textContent=pScore
        computerScore.textContent=cScore

		};

		const computerHands=(playerChoice,computerChoice)=>{
			const winner= document.querySelector(".winner");
			if(playerChoice==="rock"){
				if(computerChoice==="scissors"){
					winner.textContent="computer wins";
					pScore++;
					updateScore();
					return;
				}else{
					winner.textContent="player wins"
					cScore++;
					updateScore();
					return;
				}
			}
		};
		startGame();
		playMatch();
	     
	    };
	    game(); 

			


			
				
			
		
	