const zodiacSigns = [
 { sign: "Capricorn", start: "12-22", end: "01-19", message: "Today is a great day to
focus on your goals!" },
 { sign: "Aquarius", start: "01-20", end: "02-18", message: "Your creativity will shine
today!" },
 { sign: "Pisces", start: "02-19", end: "03-20", message: "Trust your intuition and
follow your heart!" },
 { sign: "Aries", start: "03-21", end: "04-19", message: "Be bold and take on new
challenges!" },
 { sign: "Taurus", start: "04-20", end: "05-20", message: "Focus on self-care and
relaxation today!" },
 { sign: "Gemini", start: "05-21", end: "06-20", message: "Communication will be
your strength today!" },
 { sign: "Cancer", start: "06-21", end: "07-22", message: "Embrace your emotions
and connect with loved ones!" },
 { sign: "Leo", start: "07-23", end: "08-22", message: "Your confidence will inspire
those around you!" },
 { sign: "Virgo", start: "08-23", end: "09-22", message: "Pay attention to details and
trust your logic!" },
 { sign: "Libra", start: "09-23", end: "10-22", message: "Balance is key – find
harmony in your day!" },
 { sign: "Scorpio", start: "10-23", end: "11-21", message: "Your passion will drive
you to success!" },
 { sign: "Sagittarius", start: "11-22", end: "12-21", message: "Adventure is calling –
take a leap of faith!" }
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
 let zodiac = zodiacSigns.find(z => (formattedDate >= z.start && formattedDate <=
z.end));
 if (!zodiac) zodiac = zodiacSigns.find(z => z.start > z.end && (formattedDate >=
z.start || formattedDate <= z.end));

 const funnyMessages = [
 "찁쯻쯼쯽쯾찂찃쯿찀 The stars say... Take a nap!",
 "荘荙荚荛荜 Today’s prediction: Pizza & good vibes!",
 "놌놅놆녿놀놋농 Laugh a little! It’s free therapy!",
 "뜜뜝뜡뜢뜞뜟뜠 Cosmic energy says… You rock!",
 "걡걢걣 Love is in the air! (Or maybe it’s just food)",
 "虶虷虸 Dance like nobody’s watching… But we are!"
 ];

 let randomFunnyMessage = funnyMessages[Math.floor(Math.random() *
funnyMessages.length)];


 const flipCardBack = document.querySelector(".flip-card-back");
 flipCardBack.innerHTML = `
 <p class="title">Your Sign: ${zodiac.sign}</p>
 <p>${zodiac.message} ${randomFunnyMessage}</p>
 <button id="funButton" class="fun-button">蔿蕀蕁蕂蕃蕄蕇蕈蕉蕊蕅蕆蕋 Want More Fun?</button>
 <p id="fun-suggestion"></p> <!-- 꼡 Now this is always in the HTML -->
 `;
 document.getElementById("funButton").addEventListener("click",
getFunSuggestion);

 let flipCard = document.querySelector(".flip-card");
 flipCard.style.display = "block";
 setTimeout(() => {
 flipCard.classList.add("show");
 }, 100);
}
function getFunSuggestion() {
 const funMessages = [
 "艓艔艕艖艗艘 Try dancing like nobody’s watching!",
 "蘒蘓蘔蘕蘖 Draw a crazy doodle and give it a name!",
 "虵 Sing your favorite song at full volume!",
 "荘荙荚荛荜 Order your favorite snack and enjoy!",
 "뜜뜝뜡뜢뜞뜟뜠 Imagine yourself on a space adventure!",
 "蘺蘻 Act out a scene from your favorite movie!",
 "뺶뺲뺷뺸뺳뺴뺵 Try telling the worst joke you know!",
 "뿌뿍뿎뿑뿏뿐 Take a funny selfie and send it to your best friend!",
 "负贠账贡财货责贤质贩败 Watch funny cat videos—guaranteed happiness!",
 "蘃蘁蘂 Rap battle yourself in the mirror!",
 "낧남납낪낫났낭낮낯낰낱낲낳내낵낶낷낸낹낺낻낼낽낾 Do 10 jumping jacks… then pretend it was a dance move!"
 ];
 let randomMessage = funMessages[Math.floor(Math.random() *
funMessages.length)];



 let funSuggestion = document.getElementById("fun-suggestion");
 if (funSuggestion) {
 funSuggestion.textContent = randomMessage;
 }
}
