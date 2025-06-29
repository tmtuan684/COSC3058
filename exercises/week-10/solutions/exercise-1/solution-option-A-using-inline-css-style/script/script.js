function togglePattern() {
  // get the video element
  var myPattern = document.getElementById('pattern');

  // get the current value of the pattern's display property
  var displaySetting = myPattern.style.display;

  // also get the id of reveal button, so we can change what it says
  var patternButton = document.getElementById('patternButton');

  // now toggle the pattern and the button text, depending on current state
  if (displaySetting == 'block') {
      // pattern is visible. hide it
      myPattern.style.display = 'none';
      // change button text
      patternButton.innerHTML = 'Show pattern';
  } else {
      // pattern is hidden. show it
      myPattern.style.display = 'block';
      // change button text
      patternButton.innerHTML = 'Hide pattern';
  }
}