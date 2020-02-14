# Flip Box
## Version History
1.0 - 2/5/2020 - Initial release

1.1 - 2/14/2020 - Add diagonal flip
## Introduction
This is a flip box widget written in jQuery, CSS and HTML. Key features include:
1. Regular image used for flip box front instead of a background image. This is better for SEO.
2. Responsive.
3. Optional stretch to full height of container using flex box (equal height).
4. Multiple flip effects including regular flip, flip up, flip down, slide N flip, lift N flip.
5. Mobile friendly using touch events.
6. Supports multiple flip boxes on the same page.
## Prerequisites
This widget requires jQuery.
## Setup
Downdown widget from GitHub ...

There are two files in the src directory that need to be included in your html code. These files are flip-box.js and flip-box.min.css. The css file should be included in the HEAD section of the webpage on which you want to display the flip box.
```
<link rel="stylesheet" href="flip-box.min.css">
```
The js file should be included towards the bottom on your webpage before the closing <\body> tag.
```
<script src="flip-box.js"></script>
```
If your webpage does not already include jQuery then this also can be added at the end of the webpage, but above the flip-box.js file. For example, 
```
   <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
   <script src="flip-box.js"></script>
</body>
```
## Incorporating Flip Box in Website
In order to use the flip box on a webpage you need to insert the following code in the desired display location:
```
<div class="bod-flip-box">
   <div class="flip-inner">
      <div class="flip-front">
         <img class='flip-front-image' src="images/n-home-search.png" alt="">
         <div class='flip-front-content fbg-overlay'>
            <h2>Some Title</h2>
            <p>Here is somekind of a description.</p>
         </div>
      </div>
      <div class="flip-back">
         <div class='flip-back-content'>
            <h3>Some Title</h3>
            <p>Here is some example text so we can see if the height is ok</p>
            <a href="#" class="flip-btn">Button</a>
         </div>
      </div>
   </div>
</div>
```
### Front Image / Color
The image used in the above example, is the image displayed on the front side of the flip box.  
```
<img class='flip-front-image' src="images/n-home-search.png" alt="">
```
You would change the scr to point to the image you want to use, and supply your description for the alt tag.

If no image is supplied then a default background color will be used. This color along with the text color can be changed by applying a style to the class flip-front, for example:
```
.flip-front {
   background-color: #445566;
   color: #ffffff;
}
```

### Rear Color

The background color and text color used on the reverse side can be changed by applying a color to the flip-back class, for example:

```
.flip-back {
   background-color: #445566;
   color: #ffffff;
}
```
### Front / Rear Content
The content between the tags:
```
<div class='flip-front-content'></div>

<div class='flip-back-content'></div>
```
Will be displayed on the front and back/rear side of the flip box. This is where you put your own content including headings, text and buttons. 
### Effects
If no effect is specified then the default flip style effect will be used. Other effects include:
```
<div class="bod-flip-box slide-flip">
```
The slide-flip is similar to the regular flip but the top of the box appears slide from one side to the other while being flipped.  
```
<div class="bod-flip-box up-flip">
```
Instead of flipping left or right it flips up.
```
<div class="bod-flip-box down-flip">
```
Just like up but down :)
```
<div class="bod-flip-box diag-flip">
```
Flips diagonally from top right down to bottom left.
```
<div class="bod-flip-box diag-inv-flip">
```
Flips diagonally from top left down to bottom right.
```
<div class="bod-flip-box lift-flip">
```
Card appears to move towards you (lift effect) is flipped and then moves away from you back to its original position.
### Equal Height Flip Boxes
Flip boxes can be made to resize so that all those in the same row appear to be the same height. This is done by applying display:flex to the parent container. For example,
```
<div style="display:flex;">
   <div class="bod-flip-box">
      ...
   </div>
   <div class="bod-flip-box">
      ...
   </div>
   <div class="bod-flip-box">
      ...
   </div>
</div>
```