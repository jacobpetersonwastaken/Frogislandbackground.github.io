// SPEED_OF_FALLING_IMAGE = '19'
// const imageList = ['images/frogawe.png','images/frogball.png','images/frogchonk.png',
// 'images/frogcookie.png','images/frogcry.png','images/frogheart.png',
//  'images/frogknife.png','images/frogpfpdiscord.png','images/frogpillow.png',
//  'images/frogpog.png'];
// HEIGHT = '100'
// WIDTH = '100'
// NEW_IMAGES_CREATED = 100
// // BACKGROUND_CHANGE_SPEED = 30000
// BACKGROUND_CHANGE_SPEED = 3000
// const interval = setInterval(() => {
//     // Create the image element
//     const image = document.createElement('img');
    
    
//     const randomIndex = Math.floor(Math.random() * imageList.length);
//     const randomImage = imageList[randomIndex];
//     image.src = randomImage    



//     // Set the image source

//     // Set the image width and height
//     image.style.width = WIDTH + 'px';
//     image.style.height = HEIGHT + 'px';
//     image.style.setProperty("-webkit-filter", "drop-shadow(2px 5px 2px #222)");


//     // Set the image position on the x-axis
//     image.style.position = 'absolute';
//     image.style.left = Math.random() * window.innerWidth + 'px';
//     image.style.top = '0px';

 

//     // Add the image to the document
//     document.body.appendChild(image);

//     // Use CSS animation to move the image from the top of the screen to the bottom
//     image.style.animationName = 'moveDown';
//     image.style.animationDuration = SPEED_OF_FALLING_IMAGE + 's'; // Increase the duration of the animation
//     image.style.animationFillMode = 'forwards'; // Keep the image at the bottom of the screen when the animation is complete

// // Listen for the animationend event and remove the image from the document when it is triggered
//     image.addEventListener('animationend', () => {
//         image.remove();
//       });

// }, NEW_IMAGES_CREATED); // How long until each new image is created




// // Create the CSS animation
// const style = document.createElement('style');
// style.innerHTML = `
//     @keyframes moveDown {
//       from {
//         top: -200px; // Increase the initial value of the top property
//       }
//       to {
//         top: ${window.innerHeight + 800}px;
//       }
//     }
//   `;

// // Add the animation to the document
// document.head.appendChild(style);


// var colors = ['#395B64', '#54BAB9','#cad3c7'];
// var currentColor = 0;

// setInterval(function() {
//   /* Change the background color */
//   document.querySelector('body').style.backgroundColor = colors[currentColor];

//   /* Increment the current color index and reset if needed */
//   currentColor = (currentColor + 1) % colors.length;
// }, BACKGROUND_CHANGE_SPEED);





const imageList = ['images/frogawe.png','images/frogball.png','images/frogchonk.png',
'images/frogcookie.png','images/frogcry.png','images/frogheart.png',
 'images/frogknife.png','images/frogpfpdiscord.png','images/frogpillow.png',
 'images/frogpog.png'];
 const animationDuration = 5000; // 3 seconds
 const dropNext = 300; // 3 seconds
 BACKGROUND_CHANGE_SPEED = 3000
function dropImage() {
  // create the img element
  const img = document.createElement('img');
  const randomIndex = Math.floor(Math.random() * imageList.length);


  // set the image source
  img.src = imageList[randomIndex];

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