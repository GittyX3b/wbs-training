Store and retrieve data
=======================

#### Objective:

Get the value of an input field, store it in `localStorage` as an array of strings

#### Instructions:

Store data:

1.  From the boilerplate, get the contents of the input once the form is submitted.
2.  Make sure the input is not empty before saving!
3.  Store this value in `localStorage` as part of an array. Store the new value at the beginning of the array!
4.  Reset the form

Retrieve data:

1.  Every time you hit the "Submit" button, add a new list item to the empty `ul`. Make sure the new item is at the top!
2.  Make sure that when the document loads, you populate the contents of your storage item into the list. You can try to add an event listener of type `load` to the window itself!

Reload:

1.  Just because we can. Add an event to the `reload` button so it [reloads the preview](https://developer.mozilla.org/en-US/docs/Web/API/Location/reload). Your store data should reload too!

**Tip:** Verify the Storage section in the browser's developer tools to make sure the data is there!