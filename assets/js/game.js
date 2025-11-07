window.addEventListener('load', onWindowLoad);

/**
 * Activate the script on page load. Use this function to call scripts that may contain parameters as well.
 */
function onWindowLoad() {
  getGrades();
  getCSS();
}

/************************************************************************************************************************************************
 * GET GRADES FROM DOM AND ADD SOUND EVENTS
 ************************************************************************************************************************************************/

/**
 * Creates a loop to obtain all the grades in the DOM. Then call other functions to check and set play events.
 */
function getGrades() {
  const gradeClasses = document.getElementsByClassName('grade'); //First declare a variable that contains all DOM elements with the classname gradeElement.
  //This returns a collection, which can be iterated like an array.
  for (i = 0; i < gradeClasses.length; i++) { //Iterate through the collection, but do not use as-is.
    const gradeElement = gradeClasses[i]; //Gain access to the individual class elements. Because the parent element is looped, you gain access to them all. Work from here.
    const grade = parseFloat(gradeElement.innerText); //Declare the actual graded number inside the HTML and force it to become a number.
    testForGrade(gradeElement, grade); // Call function to test whether the grade passes.
  }
}

/**
 * Uses an if-statement to determine whether the grade passes or not, then call the next function with a pre-determined parameter value based on the check.
 * @param {Document} gradeElement Child from the gradeClasses variable.
 * @param {Number} grade Child's innertext value parsed into a floating point number.
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
 * Adds an event listener with the CSS ID as the grade parameter, string type. Based on the testForGrade function is either 'pass' or 'fail'.
 * @param {Document} gradeElement Child from the gradeClasses variable.
 * @param {idName} soundEffectId Corresponds to either 'pass' or 'fail' ID from the sound effects in the HTML.
 */
function addEvent(gradeElement, soundEffectId) {
  gradeElement.addEventListener("click", function() {
    playSound(soundEffectId);
  });
}

/**
 * Selects the sound effect in the HTML based on input from testForGrade function.
 * @param {idName} soundEffectId Corresponds to either 'pass' or 'fail' ID from the sound effects in the HTML.
 */
function playSound(soundEffectId) {
  const gradeAudioInHTML = document.getElementById(soundEffectId);
  gradeAudioInHTML.play();
}

/************************************************************************************************************************************************
 * LOAD THE GAME
 ************************************************************************************************************************************************/

/**
 * Create an array containing all CSS and favicon data on the HTML page.
 * @returns 
 */
function getCSS() {
  const links = document.getElementsByTagName("link");
  for (i = 0; i < links.length; i++) {
    link = links[i];
    console.log(link);
    if (/stylesheet/.test(link.rel)) {
      sheets.push(link);
    }
  }

  return sheets;
}

/**
 * Render the CSS I guess.
 */
function printView() {
  const title1 = "printVersion";
  for (i = 0; i < sheets.length; i++) {
    sheet = sheets[i];
    if (sheet.title == title1) {
      sheet.disabled = false;
    }
    else {
      sheet.disabled = true;
    }
  }
}