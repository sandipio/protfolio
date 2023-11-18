let isOn = false;
// Function to toggle the state
function toggleSwitch() {
  isOn = !isOn;
  
  // Perform actions based on the state
  if (isOn) {
    // Turned ON
    console.log("Switch is now ON");
    // Perform additional actions if needed
  } else {
    // Turned OFF
    console.log("Switch is now OFF");
    // Perform additional actions if needed
  }
}
