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
    testForGrade(gradeElement, grade); // Call function to test whether the grade passes. Grade
  }
}

/**
 * Uses an if-statement to determine whether the grade passes or not, then call the next function.
 * @param {Document} gradeElement Child from the gradeClass variable.
 * @param {Number} grade Child's innertext value parsed into a floating point number. Then passed to the next function as a string parameter.
 * @returns 
 */
function testForGrade(gradeElement, grade) {
    if (grade >= 5.5 && grade <= 10) {
    gradeElement.className = 'grade passingGrade';
    return addEvent(gradeElement, 'pass'); // Sets the grade parameter value to the string 'pass'.

  } else if (grade > 0 && grade < 5.5) {
    gradeElement.className = 'grade failedGrade';
    return addEvent(gradeElement, 'fail'); // Sets the grade parameter value to the string 'fail'.

  } else {
    return;
  }
}

/**
 * Adds an event listener with the CSS class as the grade parameter, string type. Based on the testForGrade function is either 'pass' or 'fail'.
 * @param {Document} gradeElement Child from the gradeClass variable.
 * @param {className} grade Child's innertext set as a string, either 'pass' or 'fail'.
 */
function addEvent(gradeElement, grade) {
  gradeElement.addEventListener("click", function() {
    playSound(grade);
  });
}

/**
 * Test whether or not the grade passes, then plays the corresponding sound.
 * @param {className} grade Child's innertext set as a string, either 'pass' or 'fail'.
 */
function playSound(grade) {
    const gradeAudioInHTML = document.getElementById(grade);
    gradeAudioInHTML.play();
}