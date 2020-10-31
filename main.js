// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
function main(){
  clickLike()
}

function clickLike(){
  let heart = document.querySelector('.like-glyph')
  document.addEventListener('click', function(event){
    if (event.target === heart){      
      if (heart.innerText === EMPTY_HEART){
        heart.innerText =  FULL_HEART
        debugger
        return mimicServerCall('exampleURL')       
        .then (resp =>  console.log(resp))
        .catch (error => console.log(error))      
      } else if (heart.innerText === FULL_HEART){
        heart.innerText =  EMPTY_HEART
        debugger
      }
    }
  })
}

main()

//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
