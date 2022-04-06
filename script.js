
"use strict";
class Game{
	constructor(startButton){
		this.startButton = startButton;
	}
	usrPtLbl = document.getElementById("userPoints");
	cpuPtlbl = document.getElementById("cpuPoints");
	usrChImg = document.getElementById("userChoice");
	cpuChImg = document.getElementById("cpuChoice");
	userPoints = 0;
	cpuPoints = 0;
	answers = {	
		ans: ["rock", "paper", "scissors"], 
		pics: ["img/rock.png", "img/paper.png", "img/scissors.png"]
	}
	getUserChoice(){
		const userChoice = prompt("rock, paper, scissors?").toLowerCase();
		const answer = {};
		if (this.answers.ans.includes(userChoice)) {
			const index = this.answers.ans.indexOf(userChoice);
			answer.ans = this.answers.ans[index];
			answer.pic = this.answers.pics[index];
			return answer;
		}
		return false;
	}
	getCpuChoice(){
		const randIndex = Math.floor(Math.random()*3);
		const answer = {};
		answer.ans = this.answers.ans[randIndex];
		answer.pic = this.answers.pics[randIndex];
		return answer;
	}
	getWinner(userChoice, cpuChoice){
		if (userChoice===cpuChoice) return "draw";
		else if (userChoice==="rock"&&cpuChoice==="scissors"
			||userChoice==="scissors"&&cpuChoice==="paper"
			||userChoice==="paper"&&cpuChoice==="rock") {
			return "user";
		}
		else return "cpu";
	}
	winnerAction(winnerAnswer, userChoice, cpuChoice){
		const {pic: userImg} = userChoice;
		const {pic: cpuImg} = cpuChoice;
		this.usrChImg.src =  userImg;
		this.cpuChImg.src = cpuImg;
		setTimeout(() => {
			if (winnerAnswer=="cpu") {
				this.cpuPtlbl.innerText++;
				alert("Cpu wins")
			}
			else if(winnerAnswer=="user") {
				this.usrPtLbl.innerText++;
				alert("User wins")
			}
			else if (winnerAnswer=="draw") alert("Draw");
			else alert("Something went wrong");
		}, 1500);
	}
	start(){
		this.startButton.onclick = ()=>{
			const userChoice = this.getUserChoice();
			if (userChoice) {
				const cpuChoice = this.getCpuChoice();
				const winnerAnswer = this.getWinner(userChoice.ans, cpuChoice.ans);
				this.winnerAction(winnerAnswer, userChoice, cpuChoice);
			}
			else alert("Invalid choice");
		}
	}
}

const button = document.getElementById("start");
const game = new Game(button);
game.start();
