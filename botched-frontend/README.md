# See the bottom of this file

# refactionjs

Refactoring and showcase exercise for JavaScript.

To run:

```
npm install
npm start
```

Browse to [http://localhost:3000](http://localhost:3000)

The exercise is to clean up this code and put it in a sensible structure, using the best of idiomatic ES, modern libraries, and frameworks possible. The application runs correctly, but there's a lot of duplication and tangling of concerns, the rendering is all server-side, and its filtering use case is limited.

## Important - the requirements

- The code must run in the latest 8.x version of Node
- The code must be able to be built and run with npm commands - no extra scripts or tools that can't be run started from what's in the package.json
- You are welcome to introduce any libraries you feel are useful, but these must run on Windows, Mac, and Linux
- Use React as a Single Page App
- Generalise the filtering system (e.g. so you can select all people who are both male and 20 years old)

## Guidance

There is no "right answer", but some good things to do might be:

- Use Redux, or your favourite state management library
- Introduce a task runner (we like Webpack :-)) with a transpiler to take advantage of even more modern ES features
- Separate concerns: untangle business logic, web serving, and data access
- Use ES6+ features (only the ones available in Node 6.x) to improve the readability, scoping, reuse, and checking
- Introduce a linter
- Improve the configurability by replacing hardcoding of values with appropriate mechanisms for specifying them
- Improve error handling
- Add useful comments
- Add logging

## Comments

Hello lovely reviewer, and congratulations if you are reading this! You made it to the bottom of the readme. 

I have left this code along with this note to explain and document my learnings and findings. React is relatively simple for me to understand since I know nodeJS/javascript. However I haven't coded browser apps since some time ago, so I'm a bit rusty. Redux (and in general react states) still a bit of a mistery for me and there is only so much that one can learn in 2 days. (This is my first react app!)

This fromtend is botched precisely because of that. I added babel, webpack, transpilers, linters etc, but redux and redux-thunk took me some doing, and I didn't get to propagate the states properly from the graphql backend. After some struggle and on the interest of time I went down the path of least resistance and used a native implementation of graphql (apollo-client) in the frontend, which talks directly with the server, rather than a pure fetch API, which was my first thought. 

If you wanna run this repo and laugh at my failures: 
- `npm run start`
- run the backend `cd ../backend && npm run start`

The repo will build, transpile, and fetch the data from the server, but won't display the data because I didn't get to render it correctly. You can see it via the console tho.

This repo is badly stitched from [here](https://github.com/leonardomso/react-bolt) and [here](https://github.com/ohansemmanuel/fake-medium). Of course there is not all copy/paste. I did some refactor and kinda made it work. 

Questions? leave a comment. 

Andres. 