examples / music-get
=====================

Demo implementing a microservice to get a record from MongoDB 
---------------------------------------------------------------------

### Prerequisite

In order to get a record from the database you first need to create a record in the database. So first you need to go through the instructions in  __examples/music-post__ to post something to the database.  When you do, save the document id number that is returned.  You will need it in the curl command below.

### Install

Because the __package.json__ file should already contain what you need, simply use this command to install everything:

    $ npm install

### Install and run the app

From your projects root folder, execute the following at the command line:

    $ node index.js

If it fails to run, make sure the port isn't in use.

### Test the app using curl commands

Open a new terminal window.

At the command line, type the following replacing {id} with the id result from the post command (see Prerequisite section above):

    curl -i -X GET http://localhost:8005/v1/music/{id}

### To stop the test app

To stop the test app: in the original console window press __Ctrl-C__.