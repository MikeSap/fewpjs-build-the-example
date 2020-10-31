// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
function main(){
  clickLike()
}

function likePost(e){
  e.target.innerText =  FULL_HEART
  debugger
  return mimicServerCall('exampleURL')       
  .then (resp =>  console.log(resp))
  .catch (error => console.log(error)) 
      
}

function unlikePost(e){
  e.target.innerText =  EMPTY_HEART
  debugger
  return mimicServerCall('exampleURL')       
  .then (resp =>  console.log(resp))
  .catch (error => console.log(error))  

}

function clickLike(){
  document.addEventListener('click', function(e){
    if (e.target.innerText === EMPTY_HEART){ 
      likePost(e)     
    } else if (e.target.innerText === FULL_HEART){
      unlikePost(e)
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
