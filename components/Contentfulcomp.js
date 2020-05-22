/******************************************
 *  Author : Author
 *  Created On : Thu May 21 2020
 *  File : Contentfulcomp.js
 *******************************************/

/*===Put imports here===*/
const contentful = require("contentful");

/*===Start code here===*/

const client = contentful.createClient({
  // This is the space ID. A space is like a project folder in Contentful terms
  space: "ef40ww67o2nx",
  // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
  accessToken: "zj3BwiovKyNON5IRKJIXkZagco2DpjVz2zDijyklLC4",
});
// This API call will request an entry with the specified ID from the space defined at the top, using a space-specific access token.
client
  .getEntry("7fJxFgrJD0EMJsbZQhhSIz")
  .then((entry) => console.log(entry))
  .catch((err) => console.log(err));

export default client;
/* ===Better Comments=== */
// "* Usage - Comment everything from the beginning, start a task by adding a comment, then work on task
// "! Alert - Whenever you need an alert
// "? Review - Look at this again
// "TODO: "This ..."  is still to do
// "//commented out
// "+ Highlight: This needs to be highlited for some reason
// "@param Explain Parameters
