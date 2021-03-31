/*
  Some helpful functions
*/

// Unique ID generator
// Got this from https://stackoverflow.com/a/21816636
export const getUID = () => Math.floor(100000 + Math.random() * 900000);

// Get current date as string
export const getNow = () => new Date().toDateString();

// Return a new "empty" story object
// Will overwrite default with anything provided in options obj
export const getNewStory = (options) => ({
  title: "",
  id: getUID(),
  owner: "",
  description: "",
  points: 0,
  col: 1,
  created: getNow(),
  ...options
})