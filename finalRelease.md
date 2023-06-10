# Steps to run Application
* Navigate to server directory
  * First make .env file in following pattern at server directory
    * GH_Repo = {token}

  * Install necessary npm or yarn services:
    * `yarn`

  * Run following cmd command to run microservice, which will start the microservice in localhost:
    * ``yarn run watch``

  * This microservice is set to listen on port 5087, if you want, you can change the port for running it on your local in server.ts file. Make sure you are in server directory when you run `yarn run watch` command.

  * Run the folllowing address in your browser to go to git api:
    * `http://localhost:5087/ghsecure`
    
  * You can also see the user details. Run the following address in your browser.
    * `http://localhost:5087/ghsecure/user`
    
 * Then navigate to client directory
   * Install necessary npm or yarn services:
     * ``yarn``
    
   * Run following cmd command
     * ``yarn dev``
    
   * Run the folllowing address in your browser
     * `http://localhost:5173/`
    
    
 # Architectural Description
  * This application contain 2 Architectures, client-side architecture and server-side architecture.
  * client-side Architecture
    * The client-side architecture of the application follows a component-based approach, with various components functionalities and pages. These components include GitHub API Gist, Profile, Home, Login, GitHub API Repos, and Static Repos from Yaml file.
  
    * Each component represents a distinct page or feature and takes charge of rendering the user interface and handling user interactions. For instance, the GitHub API Gist and GitHub API repos components are responsible for fetching data from the GitHub API.
  
    * At the core of the client-side application is the App.vue file, which is the stating point. It utilizes Vue Router to define different routes for various pages, enabling navigation within the application.
    
  * server-side Architecture
    * The server-side Architecture uses Typescript, a popular web application framework, to create the server.
    
    * API Frameworks makes an API call using JSON/HTTP, to access GitHub Proxy and data from Yaml file.
    
    * Upon receiving the request, the server responds by sending the fetched data as a JSON response to the client.
    
    * To access the GitHub API, an access token is required, which should be provided through the .env file.
    
    * The dotenv library is then used to load .env file into the server-side code, ensuring secure access to the token when interacting with the GitHub API.
    
 # Quality Attribute
 * Scalability
   * The architectural design of the project enables seamless scalability by effectively separating responsibilities between the front-end and back-end components. This separation allows for straightforward expansion of the application by introducing new features, components, and API endpoints as the project evolves.
  
   * By separating the concerns between the front-end and back-end, the project's architecture fosters scalability. This modular approach allows developers to incrementally enhance the application's capabilities by introducing new components, features, and API endpoints, enabling the application to grow and evolve smoothly.
  
 * Security
   * Security is a top priority in the application's design, and several measures are in place to ensure the protection of sensitive information. One crucial security measure is the utilization of an access token for authenticating requests to the GitHub API.
  
   * This architectural design significantly enhances the security of the GitHub credentials and tokens, preventing unauthorized access or potential misuse. By centralizing the interaction with GitHub within the server-side code, the application establishes a secure and controlled environment for handling sensitive information.
  
