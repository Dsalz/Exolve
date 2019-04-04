# Pali Coding Challenge

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

POST `/meals/least_ingredients`

BODY : { mealIds: [ ``Input Meal Ids in array`` ]}

SUCCESSFULL RESPONSE: {
    "id": ``Id of meal with least ingredients``,
    "meal": ``Name of meal with least ingredients``,
    "ingredients": ``Array of ingredients for meal with least ingredients``,
    "ingredientNo": ``Number of ingredients for meal with least ingredients``,
    "message":``Message indicating if the meal is tied with another in the array for least ingredients``
}

UNSUCCESSFULL RESPONSE: {
    "message":``Descriptive message indicating why the request was unsuccessful``
}

## Notes

I tried to cater for all possible edge cases that the platform may face