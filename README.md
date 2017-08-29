# IIFE-XHRs-and-Callbacks-Oh-My

##What is this supposed to do? 
****Display all of the animals in the DOM.

##What is the Goal of this exercise? 
****Learning iife,xmlHttpRequest, and callbacks, I guess. 

<!-- Create two JSON files. One should contain an array of carnivores, and the other should contain an array of herbivores. -->
<!-- Create an IIFE with the name of Predator. -->

Predator should have two private arrays to store carnivores and herbivores.

Predator should expose two public functions to load each JSON file and store the array of animals in the appropriate private array. Each of those functions should accept one argument that will store the callback function to be executed.

In the iife-xhr.js file, define two functions that will be executed after each type of animal is loaded then display those animals in your DOM. (Example given below)

In the Predator IIFE, invoke the callback function, passed in from iife-xhr.js, after each file is loaded.
