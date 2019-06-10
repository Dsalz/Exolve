# Exolve Coding Challenge

## About

Rest API returning stock exchange data for the US Stock Exchange

## Instructions to run

### Locally

#### Without Docker

- Clone repo
- Open folder
- Run `npm install` to install dependencies
- Run `npm run build` to transpile files
- Run `npm start` to start server
- App is now served at `http://localhost:4000`

#### With Docker

- Clone repo
- Open folder
- Run `docker build -t app .` to create docker image with the tag 'app' with the project files
- Run `docker run -p 4000:4000 app` to start the container on port 4000
- App is now served at `http://localhost:4000`

## Api Endpoints

GET `/stock/prices`

SUCCESSFULL RESPONSE: {
    "prices": ``Stock Prices``,
}

UNSUCCESSFULL RESPONSE: {
    "message":``Descriptive message indicating why the request was unsuccessful``
}

## Notes

- Keys needed for API call were written plainly in the code for the purposes of this challenge but on a real application it will be stored in environmental variables
