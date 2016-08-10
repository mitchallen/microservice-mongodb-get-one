examples / music-post
=====================

Demo implementing a microservice to post to MongoDB 
---------------------------------------------------------------------

### Install

Because the __package.json__ file should already contain what you need, simply use this command to install everything:

    $ npm install

### Install and run the app

From your projects root folder, execute the following at the command line:

    $ node index.js

If it fails to run, make sure the port isn't in use.

### Test the app using curl commands

Open a new terminal window and make sure that you change to the same folder.

At the command line, type:

    curl -i -X POST -H "Content-Type: application/json" -d @data.json http://localhost:8004/v1/music

You have to be in the same folder so that the curl command finds __data.json__.

### To stop the test app, in the original console window press __Ctrl-C__.