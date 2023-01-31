# Ecommerce (PostgresSQl , Express, ReactJS ,Node)
## Description
#### An ecommerce store built with PERN stack. This ecommerce store enable two main different flows or implementations:
1. Buyers browse the store categories, products and brands
2. Admins manage and control the entire store components

## Features
1. Node provides the backend environment for this application
2. Express middleware is used to handle requests, routes
3. Postgres is used for backend
4. React for displaying UI components
5. Redux to manage application's state

## Demo

This application is deployed on Render Please check it out 😄 [here](https://ecommercepg.onrender.com/).

## Install

Git command:
```
$ git clone https://github.com/manesha07/Ecommercepg.git
```
##Install Node Dependencies
```
npm install
```
##Run Migrations
```
npx knex migrate:latest
```


## Setup env file for backend

Create a new file named .env on the project root (the same level/folder as package.json) and add the following to it:
```
PORT= 8000
SALT=10
TOKEN_SECRET = 12345
TOKEN_EXPIRATION=1d
SALT=10
JWT_SECRET=dssfdsfdfvcxetgdfSDSDGDCXGFDGTRG    
JWT_EXPIRE= 5d

```
## Setup env file for frontend

Create a new file named .env on the project root (the same level/folder as package.json) and add the following to it:
```
REACT_APP_API_URL=http://localhost:8000
```
