init();

async function init() {
  if (location.search.split("=")[1] === undefined) {   // if last workout id undefined
    const workout = await API.getLastWorkout();     // get last workout
    if (workout) {
      location.search = "?id=" + workout._id;   // set location search property as last workout id
    } else {
      document.querySelector("#continue-btn").classList.add("d-none")   // disable continue button
    }
  }
}

