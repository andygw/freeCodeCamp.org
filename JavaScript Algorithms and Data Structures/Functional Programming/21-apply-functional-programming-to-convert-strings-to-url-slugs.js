// Only change code below this line
function urlSlug(title) {
  return title
    // Make the string lowercase
    .toLowerCase()
    // Split it into an array
    .split(" ")
    // Get rid of idiosyncratic spaces
    .filter(word => word != '')
    // Rejoin into a string
    .join("-")
}
// Only change code above this line
urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone");
