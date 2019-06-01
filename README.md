<h1>#Friend Finder Application</h1>

<h2>Description</h2>
Friend Finder implements friend matching based on the user's responses to a ten question survey. The user responds to questions with values from 1 (Strongly Disagree) to 5 (Strongly Agree). When the survey is submitted, an existing user record closest to the current user's responses is found and returned. The closest set of user responses is defined as the set with the lowest absolute difference for all ten questions combined.

Friend Finder application is meant to simulate a simple dating app. The application is implemented using a Node.js and Express server on the back end and the Materialize CSS framework on the front end.

<h3>Demo</h3>
Friend Finder is deployed to Heroku. Please check it out here.

<h3>Installation</h3>
To install the application follow the instructions below:

git clone git@github.com:vienhong20/Friend_Finder.git

cd friend-finder

npm install

<h3>Running Locally</h3>
To run the application locally and access it in your browser, first set the PORT environment variable to the value of your choice. An example is shown below.

export PORT=8080
After the PORT environment variable has been set, run the Node.js application with the command below.

node server.js

The application will now be running locally on PORT, in this case that is port 8080. You can then access it locally from your browser at the URL localhost:PORT, in this case localhost:8080.
