# ETRADE UI Tearsheets

## How this project is intended to be used.
Tearsheets are individual views or ui patterns taken from an experience and translated into static (mostly logicless) html & css. The goal is to combine the design intent with front end structure & best practices. 


1. Tearsheets are intended to be static websites. If you need a backend you're probably making on a prototype.
1. Tearsheets are meant to be __mostly logicless__. The exceptions would be demonstrating component level behaviors like carousel transitions or modal animations. Tearsheets **shouldn't** get too deep into state-to-state transitions.

###How this project is organized
1. All tearsheets live in the `public` directory as [harp](http://harpjs.com/docs/) projects. Each tearsheet (or related groups of tearsheets) should be organized by folder. There's a tearsheet template to get you started (see below).
1. The `public` directory is a small express app. This is mostly for hosting and http auth. You shouldn't need to touch anything outside of `public`.
1. Because you're building static pages you shouldn't need to run that express app or even install the dependencies in the root package.json. All of your work lives in your folder in `public`.

---

## Creating a tearsheet

###Using the tearsheet template
Inside `public/tearsheet-template` you'll find a bare-bones [harp](http://harpjs.com/docs/) project template. Copy/rename that directory to get started.

#### What's included
```
├── bower.json
├── package.json
└── src
    ├── _layout.ejs
    ├── css
    │   ├── etrade-bootstrap.scss
    │   └── tearsheet.scss
    ├── index.ejs
    └── js
        └── tearsheet.js
```

* A bower.json file with the latest version of etrade-bootstrap as a dependency.
* A package.json file with npm scripts to assist development (see __using npm...__ below).
* A skeleton `src` directory.

## Using npm scripts to watch and build
Everything you need to run a server and watch files during development and then build a dist for deployment is managed via the scripts in your folder's package.json file. No gulp, no grunt.

* `npm install -g browser-sync` - run this first to install browser-sync for automatic reloading on port 8081 when files change.
* `npm start` - will install your bower deps and start a [harp server](http://harpjs.com/docs/environment/server) on port 8080 (which browser-sync watches and pipes to 8081). harp compiles .ejs and .scss as you work so no need to watch/compile anything.
* `npm run build` - will compile your `src` to `dist` and zip dist into a `download.zip` file.

## Deploying your work 
First, add a bitbucket remote if you dont' have it already.  
`git remote add bb git@bitbucket.org:etradecreative/tearsheets.git`
Now when you `git remote` you should see `origin` and `bb`.

To deploy:
* `git checkout deploy && git merge YOUR_BRANCH`
* `git push bb`

Give continuous integration a minute and your changes should be live.


## Getting your tearsheet listed on the homepage
* If express finds a path to `public/your_folder/dist/index.html` it will publish a link to your `dist/index.html` as well as `download.zip`
