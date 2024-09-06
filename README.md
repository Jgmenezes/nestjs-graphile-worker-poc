## Overview
This repository contains a Proof of Concept (PoC) demonstrating the integration of Graphile Worker into a NestJS application using the nestjs-graphile-worker library. Graphile Worker is a task queue and job processing system.


## Prerequisites
* Node.js, nvm and npm installed
* Docker installed

## Installation
1. Clone this repository:
```bash
git clone https://github.com/your-username/nestjs-graphile-worker-poc.git
```

2. Install dependencies:
```bash
cd nestjs-graphile-worker-poc
nvm use
npm ci
```

## Running the Application
```bash
docker-compose up -d
```

The application will be running on http://localhost:9090. You can interact with it using the following endpoints:

### Create a Single Task:
Method: `POST`

URL: `localhost:9090`

### Create 100 Tasks:
Method: `POST`

URL: `localhost:9090/bulk`