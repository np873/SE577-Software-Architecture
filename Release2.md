# Steps to run Application
* Navigate to microservices directory

  * Install necessary npm or yarn services:
    * ``npm init -y``
    * ``npm i fastify``
    * ``npm i -D typescript @types/node``
    * ``npm  i fastify-cors``
    * ``yarn add yaml``

  * Run following cmd command to run microservice, which will start the microservice in localhost:

    * ``yarn run watch``

  * This microservice is set to listen on port 5087, if you want, you can change the port for running it on your local in server.ts file. Make sure you are in microservices directory when you run * `yarn run watch` command.

  * Run the folllowing address in your browser to validate the json output:
    * `http://localhost:5087/repoDetails`
  * You can also see the repo details by id. Run the following address in your browser.
    * `http://localhost:5087/repoDetails/1`

* Now, Open a new Terminal, and navigate to the main directory of the project.
* Run the following cmd to start the application:
  * `yarn`
  * `yarn dev`

* Open application in browser with following address and verify if the repoDetails tab are listing the repo details.
  * `http://localhost:5173/`
