window.addEventListener('load', onWindowLoad);

/**
 * 
 */
function onWindowLoad() {
  const gradeClass = document.getElementsByClassName('grade'); //First declare a variable that contains all DOM elements with the classname gradeElement.
  //This returns a collection, which can be iterated like an array.
  for (i = 0; i < gradeClass.length; i++) { //Iterate through the collection, but do not use as-is.
    const gradeElement = gradeClass[i]; //Gain access to the individual class elements. Because the parent element is looped, you gain access to them all. Work from here.
    const grade = parseFloat(gradeElement.innerText); //Declare the actual graded number inside the HTML and force it to become a number.
    addEvent(gradeElement, grade); // Pass the following variables to the next function.
  }
}

/**
 * 
 * @param {Document} gradeElement Child from the gradeClass variable.
 * @param {Number} grade Child's innertext value parsed into a floating point number. Used to pass to next function.
 */
function addEvent(gradeElement, grade) {
  gradeElement.addEventListener("click", function() {
    playSound(grade);
  });
}

/**
 * Test whether or not the grade passes, then plays the corresponding sound.
 * @param {Number} grade gradeClass.gradeElement.innerText floating point value representing grade.
 */
function playSound(grade) {
  if (grade >= 5.5) {
    const passAudioInHTML = document.getElementById("pass");
    passAudioInHTML.play();
    console.log(`Passed grade ${grade}`);
  } else if (grade < 5.5) {
    const failAudioInHTML = document.getElementById("fail");
    failAudioInHTML.play();
    console.log(`Failed grade ${grade}`);
  } else {
    console.warn(`This grade is not a number. ${grade}.`)
  }
}