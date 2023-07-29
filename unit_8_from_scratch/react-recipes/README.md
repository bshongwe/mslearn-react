In this module, we used a starter project to get up and running quickly. This setup allowed us to focus on React and some of the new syntax. You're free to use the starter project for your own work.

You might want to try building a project from scratch. To start from an empty folder, follow the steps in this unit. The steps use Snowpack, just like in the starter project.

This unit is optional. If you don't need to create your own project, continue to the next unit.

Understand the project structure
Our core setup has two main folders that store code:

public
Contains any HTML, CSS, images, or other static files
Stores our index.html and index.css files
src
Contains any files that need to be rendered
Stores all .jsx files
We'll also create two files to configure our application:

package.json: Contains the list of packages and scripts for our application
snowpack.config.js: Contains configuration options for Snowpack
We need three main packages for our application:

Snowpack: Used to render JSX to HTML and JavaScript
React: Used to create our components
React-DOM: Used to mount our application
