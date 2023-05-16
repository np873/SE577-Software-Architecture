# Steps to run Application
* Navigate to server directory

  * Install necessary npm or yarn services:
    * ``npm init -y``
    * ``npm i fastify``
    * ``npm i -D typescript @types/node``
    * ``npm  i fastify-cors``
    * ``yarn add yaml``

  * Run following cmd command to run microservice, which will start the microservice in localhost:

    * ``yarn run watch``

  * This microservice is set to listen on port 5087, if you want, you can change the port for running it on your local in server.ts file. Make sure you are in server directory when you run `yarn run watch` command.

  * Run the folllowing address in your browser to go to git api:
    * `http://localhost:5087/ghsecure`
  * You can also see the user details. Run the following address in your browser.
    * `http://localhost:5087/ghsecure/user`
