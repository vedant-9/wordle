var hiddenSize = 5;
var totalTries = 6;
var tryCount = 1;
var currentWord = "";

var wordList = ["abuse","adult","agent","anger","apple","award","basis","beach","birth","block","blood","board","brain","bread","break","brown","buyer","cause","chain","chair","chest","chief","child","china","claim","class","clock","coach","coast","court","cover","cream","crime","cross","crowd","crown","cycle","dance","death","depth","doubt","draft","drama","dream","dress","drink","drive","earth","enemy","entry","error","event","faith","fault","field","fight","final","floor","focus","force","frame","frank","front","fruit","glass","grant","grass","green","group","guide","heart","henry","horse","hotel","house","image","index","input","issue","japan","jones","judge","knife","laura","layer","level","lewis","light","limit","lunch","major","march","match","metal","model","money","month","motor","mouth","music","night","noise","north","novel","nurse","offer","order","other","owner","panel","paper","party","peace","peter","phase","phone","piece","pilot","pitch","place","plane","plant","plate","point","pound","power","press","price","pride","prize","proof","queen","radio","range","ratio","reply","right","river","round","route","rugby","scale","scene","scope","score","sense","shape","share","sheep","sheet","shift","shirt","shock","sight","simon","skill","sleep","smile","smith","smoke","sound","south","space","speed","spite","sport","squad","staff","stage","start","state","steam","steel","stock","stone","store","study","stuff","style","sugar","table","taste","terry","theme","thing","title","total","touch","tower","track","trade","train","trend","trial","trust","truth","uncle","union","unity","value","video","visit","voice","waste","watch","water","while","white","whole","woman","world","youth","alcon","aught","hella","one’s","ought","thame","there","thine","thine","where","which","whose","whoso","yours","yours","admit","adopt","agree","allow","alter","apply","argue","arise","avoid","begin","blame","break","bring","build","burst","carry","catch","cause","check","claim","clean","clear","climb","close","count","cover","cross","dance","doubt","drink","drive","enjoy","enter","exist","fight","focus","force","guess","imply","issue","judge","laugh","learn","leave","let’s","limit","marry","match","occur","offer","order","phone","place","point","press","prove","raise","reach","refer","relax","serve","shall","share","shift","shoot","sleep","solve","sound","speak","spend","split","stand","start","state","stick","study","teach","thank","think","throw","touch","train","treat","trust","visit","voice","waste","watch","worry","would","write","above","acute","alive","alone","angry","aware","awful","basic","black","blind","brave","brief","broad","brown","cheap","chief","civil","clean","clear","close","crazy","daily","dirty","early","empty","equal","exact","extra","faint","false","fifth","final","first","fresh","front","funny","giant","grand","great","green","gross","happy","harsh","heavy","human","ideal","inner","joint","large","legal","level","light","local","loose","lucky","magic","major","minor","moral","naked","nasty","naval","other","outer","plain","prime","prior","proud","quick","quiet","rapid","ready","right","roman","rough","round","royal","rural","sharp","sheer","short","silly","sixth","small","smart","solid","sorry","spare","steep","still","super","sweet","thick","third","tight","total","tough","upper","upset","urban","usual","vague","valid","vital","white","whole","wrong","young","afore","after","bothe","other","since","slash","until","where","while","aback","abaft","aboon","about","above","accel","adown","afoot","afore","afoul","after","again","agape","agogo","agone","ahead","ahull","alife","alike","aline","aloft","alone","along","aloof","aloud","amiss","amply","amuck","apace","apart","aptly","arear","aside","askew","awful","badly","bally","below","canny","cheap","clean","clear","coyly","daily","dimly","dirty","ditto","drily","dryly","dully","early","extra","false","fatly","feyly","first","fitly","forte","forth","fresh","fully","funny","gaily","gayly","godly","great","haply","heavy","hella","hence","hotly","icily","infra","intl.","jildi","jolly","laxly","lento","light","lowly","madly","maybe","never","newly","nobly","oddly","often","other","ought","party","piano","plain","plonk","plumb","prior","queer","quick","quite","ramen","rapid","redly","right","rough","round","sadly","secus","selly","sharp","sheer","shily","short","shyly","silly","since","sleek","slyly","small","so-so","sound","spang","srsly","stark","still","stone","stour","super","tally","tanto","there","thick","tight","today","tomoz","truly","twice","under","utter","verry","wanly","wetly","where","wrong","wryly","abaft","aboon","about","above","adown","afore","after","along","aloof","among","below","circa","cross","furth","minus","neath","round","since","spite","under","until","aargh","adieu","adios","alack","aloha","avast","bakaw","basta","begad","bless","blige","brava","bravo","bring","chook","damme","dildo","ditto","frick","fudge","golly","gratz","hallo","hasta","havoc","hella","hello","howay","howdy","hullo","huzza","jesus","kapow","loose","lordy","marry","mercy","night","plonk","psych","quite","salve","skoal","sniff","sooey","there","thiam","thwap","tough","twirp","viola","vivat","wacko","wahey","whist","wilma","wirra","woops","wowie","yecch","yeeha","yeesh","yowch","zowie"];
// console.log(wordList);

const hiddenWord = getRandomWord();
// console.log(hiddenWord);

function getRandomWord() {
  let randomNumber = Math.floor(Math.random() * wordList.length);
  return wordList[randomNumber];
  // return "anger";
}

function isMeaningful() {
  if (wordList.indexOf(currentWord) > -1) return true;
  return false;
}

document.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    // alert('Enter is pressed!');
    if (currentWord.length == hiddenSize) {
      if (isMeaningful()) {
        if (hiddenWord == currentWord) {
          let blockId = (tryCount - 1) * hiddenSize + 1;
          console.log(blockId);
          for (let i = 0; i < hiddenSize; i++) {
            if (currentWord[i] == hiddenWord[i]) {
              document.getElementById("i" + blockId).style.backgroundColor =
                "green";
            }
            blockId++;
          }
          alert("You found the word!! " + tryCount + "/" + totalTries);
        } else {
          let blockId = (tryCount - 1) * hiddenSize + 1;
          // console.log(blockId);
          let letters = new Array();
          for (let i = 0; i < hiddenSize; i++) {
            if (currentWord[i] == hiddenWord[i]) {
              document.getElementById("i" + blockId).style.backgroundColor =
                "green";
            } else {
              letters.push(hiddenWord[i]);
              document.getElementById("i" + blockId).style.backgroundColor =
                "grey";
            }
            blockId++;
          }
          blockId = (tryCount - 1) * hiddenSize + 1;
          for (let i = 0; i < hiddenSize; i++) {
            if (
              currentWord[i] != hiddenWord[i] &&
              letters.indexOf(currentWord[i]) > -1
            ) {
              letters.splice(letters.indexOf(currentWord[i]), 1);
              document.getElementById("i" + blockId).style.backgroundColor =
                "orange";
            }
            blockId++;
          }

          tryCount++;
          currentWord = "";
          if (tryCount > totalTries) {
            alert("You lose!! Correct word was " + hiddenWord);
          }
        }
      } else {
        alert("Type meaningful word!!");
      }
    } else {
      alert("Enter " + hiddenSize + " length word!!");
    }
  } else if (event.keyCode == 8) {
    // alert('Backspace is pressed!');
    if (currentWord.length != 0) {
      let blockId = (tryCount - 1) * hiddenSize + currentWord.length;
      document.getElementById("i" + blockId).innerHTML = "";
      let temp = currentWord.slice(0, -1);
      currentWord = temp;
      // console.log(currentWord);
    }
  } else {
    var letter = event.key;
    // var code = event.code;
    // console.log(`Key pressed ${name} \r\n Key code value: ${code}`);
    if (letter >= "a" && letter <= "z") {
      if (currentWord.length < hiddenSize) {
        let blockId = (tryCount - 1) * hiddenSize + currentWord.length + 1;
        document.getElementById("i" + blockId).innerHTML = letter;
        currentWord += letter;
        // console.log(currentWord);
      }
    }
  }
});