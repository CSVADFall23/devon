## Project 5 Readme

This library (plotManager.js) allows individuals to programmatically control the behavoir for all points being plotted by an axidraw by generating a python file to be interactively run on the axidraw. 

1. define settings in sketch setup
2. define movement sequence in setup 
3. generate imagery 
4. call generateCode() which will process the current state of the canvas and generate a python file 
5. run python file on axidraw (to do this you must have the [axidraw API installed](https://axidraw.com/doc/py_api/#about-axidraw)) 

Example 1: Cirlce with a 2 unit line in the positive X for each point

Example 2: Circle with an 8 unit diagonal line in the positive X and Y then draw a line in the -3 Y direction for each point

**currently there's something wrong with the way im processing the image which results in 2 instances of the canvas being plotted side by side, I cannot figure out whats wrong if you can let me know 

