[![Netlify Status](https://api.netlify.com/api/v1/badges/bce698a2-6891-4e4c-b9f7-16f43f1ca2fe/deploy-status)](https://app.netlify.com/sites/victor-hugo-622845/deploys)

## Background

This site is built with [Victor Hugo](https://github.com/netlify/victor-hugo)
and hosted on [Netlify](https://netlify.com/).

## Local Development

Clone this repository, and run `npm install` from the new folder to install all
required dependencies.

Then start the development server with `npm start`.

See [package.json](package.json#L8) for all tasks.

### Adding an Image

Save image to `/site/static/img/`
Reference image like `/img/name_of_image.jpg`





### Site Structure

```text
|--site                // Everything in here will be built with hugo
|  |--content          // Pages and collections - ask if you need extra pages
|  |--data             // YAML data files with any data for use in examples
|  |--layouts          // This is where all templates go
|  |  |--partials      // This is where includes live
|  |  |--index.html    // The index page
|  |--static           // Files in here ends up in the public folder
|--src                 // Files that will pass through the asset pipeline
|  |--css              // Webpack will bundle imported css separately
|  |--index.js         // index.js is the webpack entry for your css & js assets
```

You can read more about Hugo's template language in their
[documentation](https://gohugo.io/templates/overview/).
An additional useful page documents
[the available Hugo functions](https://gohugo.io/templates/functions/).




## Add a New Page

```Copy and rename About:
X /site/content
X /site/layout/section
X /src/js/cms-preview-templates/

X site/static/admin/config.yml (added new section for communities, do we need to update homepage section?)
X src/js/cms.js
X site/layouts/partials/nav.html
```
The `src/index.js` file is the entrypoint for webpack and will be built to `/dist/main.js`

You can use **ES6** and use both relative imports or import libraries from npm.

Any CSS file imported into the `index.js` will be run through Webpack, compiled with [PostCSS Next](http://cssnext.io/), and
minified to `/dist/[name].[hash:5].css`. Import statements will be resolved as part of the build.

## Environment variables

To separate the development and production _- aka build -_ stages, all gulp tasks run with a node environment variable named either `development` or `production`.

You can access the environment variable inside the theme files with `getenv "NODE_ENV"`. See the following example for a conditional statement:

```hugo
{{ if eq (getenv "NODE_ENV") "development" }}You're in development!{{ end }}
```

All tasks starting with _build_ set the environment variable to `production` - the other will set it to `development`.

## Deploying to Netlify

- Push your clone to your own GitHub repository.
- [Create a new site on Netlify](https://app.netlify.com/start) and link the repository.

Now Netlify will build and deploy your site whenever you push to git.

## Edit Existing Page

For example Communities

```
/site/content/communities.html
/site/layout/section/communities
/src/js/cms-preview-templates/communities
```
The current main branch might even be deployed to <https://victor-hugo-622845.netlify.app/>.

## Enjoy!! 😸
