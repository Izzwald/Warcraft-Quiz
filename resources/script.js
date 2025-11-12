

let rank = [ 
            "Kirklin",
            "Private", 
            "Corporal", 
            "Sergeant", 
            "Master Sergeant", 
            "Sergeant Major", 
            "Knight", 
            "Knight-Lieutenant", 
            "Knight-Captain",
            "Knight-Champion",
            "lieutenant Commander", 
            "Commander",
            "Marshal", 
            "Field Marshal",
            "Grand Marshal"
        ];
let questions = [
            {
                question: "What is the name of the planet where most of the World of Warcraft lore takes place?",
                answers: [
                    { text: "Azeroth", correct: true },
                    { text: "Northrend", correct: false },
                    { text: "Outland", correct: false },
                    { text: "Draenor", correct: false }
                ]
            },
            {
                question: "Who is the main antagonist in the 'Wrath of the Lich King' expansion?",
                answers: [
                    { text: "Arthas Menethil", correct: true },
                    { text: "Illidan Stormrage", correct: false },
                    { text: "Gul'dan", correct: false },
                    { text: "Deathwing", correct: false }
                ]
            },
            {
                question: "Which race is NOT part of the Horde faction?",
                answers: [
                    { text: "Orcs", correct: false },
                    { text: "Tauren", correct: false },
                    { text: "Night Elves", correct: true },
                    { text: "Undead", correct: false }
                ]
            },
            {
                question: "What is the maximum level a player can reach in World of Warcraft Classic?",
                answers: [
                    { text: "60", correct: true },
                    { text: "70", correct: false },
                    { text: "80", correct: false },
                    { text: "90", correct: false }
                ]
            },
            {
                question: "In which region would you find the tower known as 'Karazhan'?",
                answers: [
                    { text: "Westfall", correct: false },
                    { text: "Stranglethorn Vale", correct: false },
                    { text: "Deadwind Pass", correct: true },
                    { text: "Tanaris", correct: false }
                ]
            },
            {
                question: "Hammer of the righteous is a paladin ability.",
                answers: [
                    { text: "True", correct: true },
                    { text: "False", correct: false }
                ]
            },
            {
                question: "Which of these is NOT a World of Warcraft expansion?",
                answers: [
                    { text: "The Burning Crusade", correct: false },
                    { text: "Wrath of the Lich King", correct: false },
                    { text: "Shadowlands", correct: false },
                    { text: "Eternal Kingdoms", correct: true }
                ]
            },
            {
                question: "What is the name of the dragon aspect who guards the Emerald Dream?",
                answers: [
                    { text: "Ysera", correct: true },
                    { text: "Alexstrasza", correct: false },
                    { text: "Nozdormu", correct: false },
                    { text: "Malygos", correct: false }
                ]
            },
            {
                question: "Which class in World of Warcraft can have a pet to fight alongside them?",
                answers: [
                    { text: "Warrior", correct: false },
                    { text: "Priest", correct: false },
                    { text: "Hunter", correct: true },
                    { text: "Rogue", correct: false }
                ]
            },
            {
                question: "What is the name of the Human capital city of the Alliance faction?",
                answers: [
                    { text: "Orgrimmar", correct: false },
                    { text: "Stormwind", correct: true },
                    { text: "Thunder Bluff", correct: false },
                    { text: "Undercity", correct: false }
                ]
            },
            {
                question: "Which profession allows players to create potions and elixirs?",
                answers: [
                    { text: "Blacksmithing", correct: false },
                    { text: "Alchemy", correct: true },
                    { text: "Enchanting", correct: false },
                    { text: "Tailoring", correct: false }
                ]
            },
            {
                question: "which NPC claimed that Tempest Keep was merely a setback?",
                answers: [
                    { text: "Kael'thas Sunstrider", correct: true },
                    { text: "Malygos", correct: false },
                    { text: "Illidan Stormrage", correct: false },
                    { text: "Arthas Menethil", correct: false }
                ]
            },
            {
                question: "Who shouted the famous line, 'YOU ARE NOT PREPARED!'?",
                answers: [
                    { text: "Illidan Stormrage", correct: true },
                    { text: "Gul'dan", correct: false },
                    { text: "Kel'Thuzad", correct: false },
                    { text: "Ragnaros", correct: false }
                ]
            },
            {
                question: "Baron Geddon is the bane of which raid instance?",
                answers: [
                    { text: "Zul'Gurub", correct: false },
                    { text: "Blackwing Lair", correct: false },
                    { text: "Onyxia's Lair", correct: false },
                    { text: "Molten Core", correct: true }
                ]
            },
            {
                question: "What player class is known for using stealth and backstabbing enemies?",
                answers: [
                    { text: "Rogue", correct: true },
                    { text: "Warrior", correct: false },
                    { text: "Mage", correct: false },
                    { text: "Druid", correct: false }
                ]
            },
            {
                question: "Which city is home to the Forsaken?",
                answers: [
                    { text: "Orgrimmar", correct: false },
                    { text: "Stormwind", correct: false },
                    { text: "Undercity", correct: true },
                    { text: "Silvermoon", correct: false }
                ]
            },
            {
                question: "Which streamer is bad with mana?",
                answers: [
                    { text: "PirateSoftware", correct: true },
                    { text: "Savix", correct: false },
                    { text: "Pikabooirl", correct: false },
                    { text: "Sodapoppin", correct: false }
                ]
            },
            {
                question: "Sylvanas Windrunner burned down the tree in which major city?",
                answers: [
                    { text: "Darnassus", correct: true },
                    { text: "Ironforge", correct: false },
                    { text: "Stormwind", correct: false },
                    { text: "Orgrimmar", correct: false }
                ]
            },
            {
                question: "Which of these is NOT a type of World of Warcraft PvP battleground?",
                answers: [
                    { text: "Warsong Gulch", correct: false },
                    { text: "Arathi Basin", correct: false },
                    { text: "Alterac Valley", correct: false },
                    { text: "Deadwind Pass", correct: true }
                ]
            },
            {
                question: "What is the name of the orc who became the first Warchief of the Horde?",
                answers: [
                    { text: "Thrall", correct: false },
                    { text: "Gul'dan", correct: false },
                    { text: "Blackhand", correct: true },
                    { text: "Orgrim Doomhammer", correct: false }
                ]
            },
            {
                question: "Which player famously shouted their name before charging into battle?",
                answers: [
                    { text: "Swifty", correct: false },
                    { text: "Leroy Jenkins", correct: true },
                    { text: "Asmongold", correct: false },
                    { text: "Towelliee", correct: false }
                ]
            },
            {
                question: "Where can the Scarlet Monastery be found?",
                answers: [
                    { text: "Tirisfal Glades", correct: true },
                    { text: "Elwynn Forest", correct: false },
                    { text: "Duskwood", correct: false },
                    { text: "Stranglethorn Vale", correct: false }
                ]
            },
            {
                question: "Entering the Dark Portal takes you to which location?",
                answers: [
                    { text: "Northrend", correct: false },
                    { text: "Outland", correct: true },
                    { text: "Quel'Thalas", correct: false },
                    { text: "Azeroth", correct: false }
                ]
            },
            {
                question: "who sacrificed himself to destroy the Lich King?",
                answers: [
                    { text: "Tirion Fordring", correct: true },
                    { text: "Uther the Lightbringer", correct: false },
                    { text: "Saidan Dathrohan", correct: false },
                    { text: "Anduin Wrynn", correct: false }
                ]
            },
            {
                question: "What is the name of the tavern located in Goldshire?",
                answers: [
                    { text: "The Golden Pick", correct:  false},
                    { text: "The Drunken Dragon", correct: false },
                    { text: "The Gilded Rose", correct: false },
                    { text: "The Lion's Pride Inn", correct: true }
                ]
            },
            {
                question: "Kadgar is a powerful mage who was once an apprentice to which legendary figure?",
                answers: [
                    { text: "Medivh", correct: true },
                    { text: "Rhonin", correct: false },
                    { text: "Jaina Proudmoore", correct: false },
                    { text: "Antonidas", correct: false }
                ]
            },
            {
                question: "Queen Azshara was the?",
                answers: [
                    { text: "Queen of the Night Elves", correct: true },
                    { text: "Queen of the Blood Elves", correct: false },
                    { text: "Queen of the Forsaken", correct: false },
                    { text: "Queen of the Worgen", correct: false }
                ]
            },
            {
                question: "What is the name of the elemental lord that resides in the Molten Core?",
                answers: [
                    { text: "Ragnaros", correct: true },
                    { text: "Al'Akir", correct: false },
                    { text: "Neptulon", correct: false },
                    { text: "Therazane", correct: false }
                ]
            },
            {
                question: "Which of these is a World of Warcraft raid instance?",
                answers: [
                    { text: "Scholomance", correct: false },
                    { text: "Blackrock Depths", correct: false },
                    { text: "Stratholme", correct: false },
                    { text: "Blackwing Lair", correct: true }
                ]
            },
            {
                question: "In what year was World of Warcraft originally released?",
                answers: [
                    { text: "2004", correct: true },
                    { text: "2005", correct: false },
                    { text: "2006", correct: false },
                    { text: "2007", correct: false }
                ]
            },
            {
                question: "Who would I follow into battle?",
                answers: [
                    { text: "Jaina Proudmoore", correct: false },
                    { text: "Varian Wrynn", correct: false },
                    { text: "Garrosh Hellscream", correct: false },
                    { text: "Dunkums", correct: true }
                ]
            }
        ];

    let currentQuestionIndex = 0;
    let score = 0;


    let startButton = document.getElementById("start-btn");
    let nextButton = document.getElementById("next-btn");
    let restartButton = document.getElementById("restart-btn");

    let music = document.getElementById("background-music");
    music.volume = 0.2;
    let isMusicPlaying = false;



    // Shuffle 14 random questions from the question pool
    function startQuiz() {
        if (!isMusicPlaying) {
            music.play();
            isMusicPlaying = true;
        }
        questions = questions.sort(() => Math.random() - 0.5).slice(0, 14);
        currentQuestionIndex = 0;
        score = 0;
        startButton.style.display = "none";
        nextButton.style.display = "block";
        loadQuestion();
    }


    function loadQuestion() {
        let questionElement = document.getElementById("question");
        let answerButtonsElement = document.getElementById("answer-buttons");
        answerButtonsElement.innerHTML = "";

        let currentQuestion = questions[currentQuestionIndex];
        questionElement.textContent = currentQuestion.question;

        document.getElementById("question-number").textContent =
        `Question ${currentQuestionIndex + 1} of 14`;

        currentQuestion.answers.forEach((answer, index) => {
            let label = document.createElement("label");
            label.classList.add("answer-option");
            label.setAttribute("width", "100%");
            

            
            let input = document.createElement("input");
            input.type = "radio";
            input.name = "answer";
            input.value = answer.text;
            input.classList.add("btn");

            let span = document.createElement("span");
            span.textContent = answer.text;

            label.appendChild(input);
            label.appendChild(span);
            answerButtonsElement.appendChild(label);
        });
        document.getElementById("question-number").textContent =
        `Question ${currentQuestionIndex + 1} of 14`;
    }

    function submitAnswer() {
        let selected = document.querySelector('input[name="answer"]:checked');
      if(!selected){
            alert("Please select an answer before proceeding.");
            return;
      }
      let selectedText = selected.value;
      let currentAnswers = questions[currentQuestionIndex].answers;
      let correctAnswer = currentAnswers.find(a => a.correct).text;

      if (selectedText === correctAnswer) {
          score++; rankUp();
      }

      currentQuestionIndex++;
      if (currentQuestionIndex < 14) {
          loadQuestion();
      } else {
          showResults();
      }
    }

    function rankUp() {
        let currentRank = rank[Math.min(Math.floor(score / 1), rank.length - 1)];
        console.log(`Your current rank is: ${currentRank}`);
    }   

    function showResults() {
        let questionElement = document.getElementById("question");
        let answerButtonsElement = document.getElementById("answer-buttons");
        answerButtonsElement.innerHTML = "";
        questionElement.textContent = `Quiz Over! Your score: ${score} out of 14.`;
        

        let finalRank = rank[Math.min(Math.floor(score / 1), rank.length - 1)];
        let rankElement = document.createElement("p");
        rankElement.style.fontSize = "18px";
        rankElement.style.textAlign = "center";
        rankElement.style.fontWeight = "bold";
        rankElement.style.marginTop = "20px";
        rankElement.style.color = "#333";
        rankElement.style.textTransform = "capitalize";
        rankElement.style.letterSpacing = "1px";
        rankElement.style.textShadow = "1px 1px 2px rgba(0,0,0,0.1)";
        rankElement.style.fontFamily = "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif";
        rankElement.style.backgroundColor = "#f9f9f9";
        rankElement.style.padding = "10px";
        rankElement.style.borderRadius = "5px";
        rankElement.style.boxShadow = "0 2px 5px rgba(0,0,0,0.1)";
        rankElement.style.width = "fit-content";
        rankElement.style.margin = "20px auto";
        rankElement.style.border = "1px solid #ddd";
        rankElement.textContent = `Your rank is: ${finalRank}`;

        answerButtonsElement.appendChild(rankElement);

        document.getElementById("question-number").textContent = "";
        startButton.style.display = "none";
        nextButton.style.display = "none";
        restartButton.style.display = "inline-block";
    }


    function resetQuiz() {
        currentQuestionIndex = 0;
        score = 0;
        startButton.style.display = "inline-block";
        document.getElementById("question").textContent = "Are you ready to begin?";
        document.getElementById("question-number").textContent = "";
        document.getElementById("answer-buttons").innerHTML = "";
        restartButton.style.display = "none";
        nextButton.style.display = "none";
    }