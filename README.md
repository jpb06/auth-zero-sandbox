# Auth0 sandbox

Here is a little sandbox to experiment with OpenID and OAuth, using Auth0.

## Stack

- Typescript superset for the entire codebase.
- Express for the api.
- React for the front (using Create React App as bootstrapper).
- Redux for state management in the front app.
- Material UI as the UI Framework for the front app.

## Prerequisites

You will need to create an [Auth0 account](https://auth0.com/signup?&signUpData=%7B%22category%22%3A%22button%22%7D&email=undefined) and create a new application on one of your tenants.

Applications have two properties we will need to configure the sandbox:

1. Domain
2. Client ID

To configure the sandbox, simply edit the .env file in the front-react folder:

```env
REACT_APP_AUTH0_DOMAIN=<Your app domain (tenant)>
REACT_APP_AUTH0_CLIENT_ID=<Your app client id>
REACT_APP_AUTH0_CALLBACK_URL=http://localhost:3000/callback
REACT_APP_AUTH0_AUDIENCE=http://localhost:3001
REACT_APP_API_URL=http://localhost:3001
```

## Launch

You can launch both the dev api and the react frontend by going into the front-react folder and type a good old:

```cl
npm start
```

## Demo

![Use case](https://i.imgur.com/MZPh8GN.png)
