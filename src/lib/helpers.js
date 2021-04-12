/*
  Some helpful functions
*/

// Unique ID generator
// Got this from https://stackoverflow.com/a/21816636
export const getUID = () => Math.floor(100000 + Math.random() * 900000);

// Get current date as string
export const getNow = () => new Date().toDateString();

// Return a new "empty" story object
// Will overwrite template with anything provided in options obj
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

export const getTestStories = () => [
  {
    title: "Get new access token",
    id: getUID(),
    owner: "Louise Belcher",
    description: "Fix issue with multi-factor authentication",
    points: 3,
    col: 1,
    created: getNow()
  },
  {
    title: "Push code to production",
    id: getUID(),
    owner: "Louise Belcher",
    description: "Commit new changes and deploy to production server.",
    points: 2,
    col: 2,
    created: getNow()
  },
  {
    title: "Fix major security issue",
    id: getUID(),
    owner: "A Person",
    description: "Get that thing done",
    points: 6,
    col: 3,
    created: getNow()
  },
  {
    title: "Fix major security issue",
    id: getUID(),
    owner: "A Person",
    description: "Get that thing done",
    points: 6,
    col: 3,
    created: getNow()
  },
]