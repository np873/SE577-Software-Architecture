import fastify from 'fastify'
import fastifyCors from '@fastify/cors'
import * as fs from 'fs'
import * as YAML from 'yaml'
import fastifyHttpProxy from "@fastify/http-proxy";
import dotenv from 'dotenv';

import {GetGHProxySecureOptions, GetGHProxyOptions } from "./proxy";

dotenv.config();

const server = fastify({
  logger: true
})

let proxyOptsSecure = GetGHProxySecureOptions(process.env.GH_Repo)
server.register(fastifyHttpProxy, proxyOptsSecure)

let proxyOpts = GetGHProxyOptions()
server.register(fastifyHttpProxy, proxyOpts)
// create the fastify task

//setup CORS
server.register(fastifyCors, {
    origin: "*",
    methods: ["GET"]
})

server.get('/repoDetails', async (request, reply) => {

const file = fs.readFileSync('./repoDetails.yaml', 'utf8')
const yamlData = YAML.parse(file)

    if ((yamlData == undefined)){
        reply.code(400).send('Error no repos defined')
        return;
    }

    reply.code(200).send(yamlData.repoDetails)
})

interface Repo {
  id: string;
  name: string;
  url: string;
  language: string;
  updated: string;
}

interface RepoData {
  repoDetails: Repo[];
}

interface Params {
  id: string
}

server.get('/repoDetails/:id', async (request, reply) => {

  const file = fs.readFileSync('./repoDetails.yaml', 'utf8');
  const yamlData = YAML.parse(file) as RepoData;

  if (yamlData == undefined) {
    reply.code(400).send('Error no repos defined');
    return;
  }

  const { id } = request.params as Params;
  const repo = yamlData.repoDetails.find((r: Repo) => r.id == id); 

  if (repo == undefined) {
    reply.code(404).send(`Repo with id ${id} not found`);
    return;
  }

  reply.code(200).send(repo);
});


server.listen(5087, (err, address) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.log(`Server listening at ${address}`)
})

