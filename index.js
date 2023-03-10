const imageList = ['images/frogawe.png','images/frogball.png','images/frogchonk.png',
'images/frogcookie.png','images/frogcry.png','images/frogheart.png',
 'images/frogknife.png','images/frogpfpdiscord.png','images/frogpillow.png',
 'images/frogpog.png'];
 const animationDuration = 5000; // 3 seconds
 var dropNext; // 3 seconds
 BACKGROUND_CHANGE_SPEED = 3000




 const range = document.getElementById('myRange');
 dropNext = range.value;

// Add an event listener to the range slider to update the value element whenever the slider is moved
range.addEventListener('input', () => {
  dropNext = range.value;
});






function dropImage() {
  // create the img element
  const img = document.createElement('img');
  const randomIndex = Math.floor(Math.random() * imageList.length);


  // set the image source
  img.src = imageList[randomIndex];
  img.style.zIndex = -1;

  // set the initial position to be a random x-coordinate at the top of the screen
  const startX = Math.floor(Math.random() * window.innerWidth);
  img.style.setProperty("-webkit-filter", "drop-shadow(2px 5px 2px #222)");
  img.style.position = 'fixed';
  img.style.left = startX + 'px';
  img.style.top = '0px';

  // add the img element to the document
  document.body.appendChild(img);

  // animate the img element
  
  const endPosition = window.innerHeight + img.height + 100; // bottom of the screen
  const startTime = performance.now();

  function animate() {
    const currentTime = performance.now();
    const timeElapsed = currentTime - startTime;
    const position = (endPosition / animationDuration) * timeElapsed;
    img.style.top = position - img.height;

    if (timeElapsed < animationDuration) {
      requestAnimationFrame(animate);
    } else {
      // remove the img element from the document
      document.body.removeChild(img);
    }
  }

  // start the animation
  requestAnimationFrame(animate);

  // schedule the next drop
  setTimeout(dropImage, dropNext);
}




var colors = ['#395B64', '#54BAB9','#cad3c7'];
var currentColor = 0;

setInterval(function() {
  /* Change the background color */
  document.querySelector('body').style.backgroundColor = colors[currentColor];

  /* Increment the current color index and reset if needed */
  currentColor = (currentColor + 1) % colors.length;
}, BACKGROUND_CHANGE_SPEED);

// start the image drop sequence
dropImage();
