




# Bookiply Review
[![Build Status](https://travis-ci.com/shayanypn/bookipy-reviews.svg?branch=master)](https://travis-ci.com/shayanypn/bookipy-reviews)

Simple UI implemented in React, Redux and Bootstrap, to show bookiply review page

Features:
 - Responsive 
 - Pagination
 - Filtering by `score` and by `channels`
 

[Live Preview](https://shayanypn.github.io/bookipy-reviews/)

![screen record of preview](https://github.com/shayanypn/bookipy-reviews/blob/master/preview.gif)


## Available Scripts


    git clone https://github.com/shayanypn/bookipy-reviews.git
    cd bookipy-reviews
    yarn install
    yarn start

    //test
    yarn run test
    yarn run test:coverage

    //build
    yarn run build
    


## Interesting Code

To help guide you through the interesting pieces of this implementation note the following.



### Component Structure
All code in this application should follow the below structure to be consistent with other parts of the application. The name of component or service ... consists of a folder/directory name and the entry point is the `index.js` file. For other additional files like tests, you should add them under this folder with a suffix name, like `index.test.js` or `index.stories.js`, and for style, we use a consistent name as `main.css`

    /[component name]
        /index.js
        /index.test.js
        /index.stories.js
        /main.css

