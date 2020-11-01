// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

function main(){
  clickLikeListener()
}

function flipGlyph(resp, e){
  const heart = e.target 
  heart.innerText =  (heart.innerText == FULL_HEART? EMPTY_HEART : FULL_HEART)
  heart.classList.contains('activated-heart')? heart.classList.remove('activated-heart') : heart.classList.add('activated-heart')
  console.log("Success!", resp)
}

function likeError(error){
  const modal = document.querySelector('#modal')
    modal.classList.remove('hidden')
    modal.innerHTML = error
    console.log("Failed!", error)
    setTimeout(function(){
      modal.classList.add('hidden')}, 3000)
}

function likePost(e){  
  return mimicServerCall('exampleURL')       
  .then (resp => {
    flipGlyph(resp, e)
  })
  .catch (error => {
    likeError(error)
  }) 
}

function clickLikeListener(){
  document.addEventListener('click', function(e){
    if (e.target.classList.contains('like-glyph')){ 
      likePost(e)     
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
