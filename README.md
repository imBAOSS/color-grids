# Summary
Create a color grid that randomly selects a square to change colors every 250ms. The only caveat is that a square cannot change colors if 2s has not elapsed since its last change.

This must be done with vanilla JavaScript, HTML and CSS. No additional libraries or frameworks were used.
# How to open
Simply copy the full path of the index.html file into your browser window.
# Implementation Logic
Selecting the individual squares was done by calling `document.getElementsByClassName` and passing in the `square` class. This created a NodeList of all the HTML elements with the class of `square`. The initial population of colors was performed by iterating through each of the nodes, as well as creating an array of four colors and randomly selecting a color to add to each node via HTML's `classList.add()` method.

After that, a `window.setInterval` was used to infinitely loop through a function every 250ms. Within this function, a random square that hasn't been changed in the last two seconds was selected (more on this logic in the next paragraph), and a random color class would be added to the node's class list.

Upon addition of the color to the class list, a `changed` class was also added to the class list, which served as a flag that indicated that 2s had not passed. A `setTimeout` was called passing in a callback that removed the `changed` class with `classList.remove('changed')`. During the selection of a random square, a random node was selected and assigned to a temp variable. The node was then checked by calling `classList.value.split(' ')` which produced an array of all the classes. If the class included 'changed', a new node was selected.
