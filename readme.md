# Gustavo's 3D portfolio :)

Welcome! I made this portfolio and I actively work on it for a while now. I will keep trying to work on it periodically but no promises. If there is an interest feel free to contact me, I'd love to chat about this project.

# Starting this ThreeJS with Vite Starter Pack project Setup:
### Prerequisites
Before you start, make sure you have Node.js installed on your machine: (https://nodejs.org/en/download/)

### Installation
Once you've cloned or downloaded this project file to your local machine, navigate to this project directory in your terminal.

Run the following command to install the necessary dependencies:

``` bash
npm install
```
### Running the project
To start the development server, run the following command:

``` bash
npm run dev
```
This will start the server and open your default browser to your localhost. The site will reload automatically as you make changes to your code.

### When deploying to vercel...

To prevent errors in the automatic build, the vite config file is set for the build (aka dist folder) to be built on the src folder. When deploying it (vercel, or whatever) the code needs to manually delete the dist folder in the root of the project and replace it with the newly generated dist in the src folder
