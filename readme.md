
# Hopefully Cool

## [here's the website](https://youtu.be/9tn-P2-lnnY) 😉

Hello there ! this is a documentation page for my final project on CS50 which titled "Hopefully Cool" 


**Hopefully Cool**

```
is basically a personal website of mine containing a few things i'm doing or have been done in the past !

it is just a basic website without anymore functionality except to contain my own stuff and for me to mess around with the website it self.
i made this using the THREE JS.
```

> **What is THREE JS ?** 🤔
>
>> Well, don't take it from me, but from wikipedia, Three.js is a cross-browser JavaScript library and application programming interface (API) used to create and display animated 3D computer graphics in a web browser using WebGL. The source code is hosted in a repository on GitHub

it allow us to create 3D website without worrying about all the lower level stuff. Basically a VERYBIG layer of abstraction (if we look back at what we did with C in CS50).
as you can see from my code, the stuff that you always need when using THREE JS, are : 
```
The scene 🌳

(basically the backround (the outerspace))

The camera 📷

(basically your eyeball on the website it self. what is the distance you're looking at, from what pov, and how you move your "eyeball")

And a renderer to actual render what we coded 🎞️
```
## **Object(s)**

and of course we need object(s) like shape to make the website much more interesting.

### __Torus__ ( Donut ) and Saitama 🥯

here, i'm using a torus ( that donut in the middle ) as the "main" object in the website 

of which (in the middle of it) will have a cube with saitama face on all 6 sides.

### __Meteor__ 🌑

next, i make 269 small "meteor" shaped ![icosahedron](https://images.app.goo.gl/Ni9LnAnWDzRFybWu5) all over the screen. (perhaps this is one of the thing that makes the site absolutely heavy).

### __Moon & Planet__ 🪐

and then i add a moon and a planet that is "wrapped" with some texture so that it looked "more realistic". 

### __Kanna__ 

Notice that besides the planet, there is a kanna shaped circle about to eat it :v
it's just a meme, don't worry about it :)

> i took a lot of inspiration from youtube for the css (or pretty much the entire website, since i learned everything on youtube). i actually am amaze by VS code, like, you CAN just click the small color box and change it there. No need for some tedious manual modification.

### __Camera__ 📷

for the " Movecam " function, you probably notice there is this "document.body.getBoundingClientRect().top;" line of code, which is really interesting, since it return the size of an element and its position relative to the viewport. Which basically calculate where to user is currently scrolled to.

### __Debateable and Mald__ 😖

okay, i did debate whether i want to make a 2D website or a 3D website, but since 3D website just looked so cool to do (be it mine isn't that cool which is why i titled it Hopefully Cool)
i choose to get into it. I also changed the kanna geometry to actually look 3D, but kinda hard to adjust it to my liking. so i choose the simpler, more convinient circle.
i was also considering to use a different shape for the saitama face, but all the others look very cursed on him... so i stick with the basic cube.

on the otherhand, the TORUS (donut) took sooooooo long to make... like, why isn't the light on it, why is the light on a weird shape, why is my torus not appearing, where is the mesh ? why is it still a blank page ? why can't the scrool do some weird thing to the torus, etc etc. 
i'm glad it worked out even tho it is very laggy :)

## let's talk about the files :)

1.  **what is.svg ?**
```
The SVG format stores images as vectors which are graphics made up of points, lines, and curves based on geometry and mathematical formulas.
They're also great for creating responsive websites that need to look good and function well across a variety of screen sizes. because they do not lose quality when zoomed in or resized
```

2. **what is gitignore ?**

gitignore is the file that tells Git which files to ignore when committing your project to the GitHub repository. it contain files that aren’t required by your project to function, and hence, we don’t need to keep
them in the repository. how do you know this stuff ? of course it's gonna be Youtube OR [go here](https://github.com/github/gitignore) :)


3. **let's talk about the jpg and png files**
```
those are just the images that i use for the website. you may notice that things like the moon image is a rectangular image. Why ? becasue it actually wrapped around the ball shape that i make in the code it self.
just imagine it like a paper that stick to a ball. Plus i add texture to it using the "normal.jpg" so it kinda looked more realistic.
```
4. **index.html**

&emsp;as you know, it contains the html for the website ! text like my hobbies, a bit of background, etc !


5. **main.js**
```
the MEAT. 🥩

The file where i make design like torus, "meteors", the planet, the moon, etc that i animate that will move on itself and move even faster when scrolled. 

it contain the other important stuff like camera or perspective (it mimics the human eyeball btw !), lighting, places or coordinate of the objects (like the random 269 "meteor"). 

for more information you can see the comments on the code itself ! i try to make it as clear as possible both for the future me, and for whoever is gonna be reading this :)
this file doesn't contain the css tho ! for that, let's move to the next number.
```

**6. style.css** 😎

here comes the styling of the HTML. starting from the :

- canvas 
literally the space background itself. it is setted to top left position with a fixed condition

- root 
basically i can use things like " --background " from the root to anything i want. pass it as a parameter, and they will have whatever is in " --background " in this case i pass it to the section {background}.

- Things like main, canvas, header, etc
are basically the styling for those element/tag (see the HTML). it contain the position, background, grid, paddings, font, etc


**7. package.json**
```
package.json file contains metadata about the project and also the functional dependencies that is required by the application
```

&emsp;**7.1 package.lock.json**

is created for locking the dependency with the installed version. It will install the exact latest version of that package in the application and save it in package.json.
```
notice that in the package.json file, i have a carot (" ^ ") symbol in this line of code "vite": "^2.3.0"

the reason why, is that i still want updates (minor updates) on vite.js, but i don't want it to update to anything major since that have a possibility of runing the code that i wrote.

but wait ! IF someone try to copy and play around with my github repo (in this case it is this project) and a minor hange happened, they will not get the "2.3.0" version ! 

probably vite already got updated to a new patch, and instead it is now a 2.4.0 version instead of the 2.3.0 and God forbid what will happen to the code that they copy. becasue i test the 2.3.0 version and not the 
2.4.0 version.
```
sooo, the node team actually invented this idea of package lock ! basiclaly when i push my code to my github repo, the person that will be copying it need to use the package.lock.json in order to avoid potential bug due to the difference in version when i make the code and when the person write the code.

anyway,

Those we're a little bit of documentation for my Final Project :)

## A VERY BIG THANK YOU 🙏
### &emsp;To David malan and CS50 team.
You guys did so much that i can't even comprehend the amount of effort that went into making the course SUPER enjoyable and very very VERY high quality.

I'm at lost for words. You guys did your absolute best 😄