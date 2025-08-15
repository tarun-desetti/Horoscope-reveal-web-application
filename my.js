const zodiacSigns = [
    { sign: "Capricorn", start: "12-22", end: "01-19", message: "Today is a great day to focus on your goals!" },
    { sign: "Aquarius", start: "01-20", end: "02-18", message: "Your creativity will shine today!" },
    { sign: "Pisces", start: "02-19", end: "03-20", message: "Trust your intuition and follow your heart!" },
    { sign: "Aries", start: "03-21", end: "04-19", message: "Be bold and take on new challenges!" },
    { sign: "Taurus", start: "04-20", end: "05-20", message: "Focus on self-care and relaxation today!" },
    { sign: "Gemini", start: "05-21", end: "06-20", message: "Communication will be your strength today!" },
    { sign: "Cancer", start: "06-21", end: "07-22", message: "Embrace your emotions and connect with loved ones!" },
    { sign: "Leo", start: "07-23", end: "08-22", message: "Your confidence will inspire those around you!" },
    { sign: "Virgo", start: "08-23", end: "09-22", message: "Pay attention to details and trust your logic!" },
    { sign: "Libra", start: "09-23", end: "10-22", message: "Balance is key – find harmony in your day!" },
    { sign: "Scorpio", start: "10-23", end: "11-21", message: "Your passion will drive you to success!" },
    { sign: "Sagittarius", start: "11-22", end: "12-21", message: "Adventure is calling – take a leap of faith!" }
];

function getHoroscope() {
    let birthdate = document.getElementById("birthdate").value;
    if (!birthdate) {
        alert("Please select your birthdate!");
        return;
    }

    let date = new Date(birthdate);
    let month = (date.getMonth() + 1).toString().padStart(2, '0');
    let day = date.getDate().toString().padStart(2, '0');
    let formattedDate = `${month}-${day}`;

    let zodiac = zodiacSigns.find(z => (formattedDate >= z.start && formattedDate <= z.end));
    if (!zodiac) zodiac = zodiacSigns.find(z => z.start > z.end && (formattedDate >= z.start || formattedDate <= z.end));

    
    const funnyMessages = [
        "🧐 The stars say... Take a nap!",
        "🍕 Today’s prediction: Pizza & good vibes!",
        "😂 Laugh a little! It’s free therapy!",
        "🚀 Cosmic energy says… You rock!",
        "💖 Love is in the air! (Or maybe it’s just food)",
        "🎶 Dance like nobody’s watching… But we are!"
    ];
    
    let randomFunnyMessage = funnyMessages[Math.floor(Math.random() * funnyMessages.length)];
    
   
    const flipCardBack = document.querySelector(".flip-card-back");
    flipCardBack.innerHTML = `
        <p class="title">Your Sign: ${zodiac.sign}</p>
        <p>${zodiac.message} ${randomFunnyMessage}</p>
        <button id="funButton" class="fun-button">🎉 Want More Fun?</button>
        <p id="fun-suggestion"></p> <!-- 🔹 Now this is always in the HTML -->
    `;

    document.getElementById("funButton").addEventListener("click", getFunSuggestion);

   
    let flipCard = document.querySelector(".flip-card");
    flipCard.style.display = "block"; 
    setTimeout(() => {
        flipCard.classList.add("show");
    }, 100);
}


function getFunSuggestion() {
    const funMessages = [
        "🌟 Try dancing like nobody’s watching!",
        "🎨 Draw a crazy doodle and give it a name!",
        "🎵 Sing your favorite song at full volume!",
        "🍕 Order your favorite snack and enjoy!",
        "🚀 Imagine yourself on a space adventure!",
        "🎭 Act out a scene from your favorite movie!",
        "🤣 Try telling the worst joke you know!",
        "🤳 Take a funny selfie and send it to your best friend!",
        "🐱 Watch funny cat videos—guaranteed happiness!",
        "🎤 Rap battle yourself in the mirror!",
        "🕺 Do 10 jumping jacks… then pretend it was a dance move!"
    ];
    let randomMessage = funMessages[Math.floor(Math.random() * funMessages.length)];
    
 
 
    let funSuggestion = document.getElementById("fun-suggestion");
    if (funSuggestion) {
        funSuggestion.textContent = randomMessage;
    }
}
