# React Authentication Flow

Basic React application that shows how the authenticate users using `JSON Web Tokens`.

This example add Auth0 authentication with Strapi. For more information, please take a look at [`./strapi-auth0-backend/extensions/users-permissions`](./strapi-auth0-backend/extensions/users-permissions).

## Setup

**1 —** Clone the repository.
```bash
git clone git@github.com:heziode/strapi-auth0-example.git
```

**2 —** Go to the `login-react` example folder and install the front-end app dependencies.
```bash
cd login-react/react-login-front-end-app
npm install
```

**3 —** Start the front-end app server.
```bash
npm start
```
[Open the app in your browser](http://localhost:3000)

**4 -** Start the Strapi API:
```bash
cd strapi-auth0-backend
npm start
```

**5 -** [Create the Admin user](http://localhost:1337/admin/plugins/users-permissions/auth/register) by registering your first user.

**6 -** [Enable Auth0 provider](./doc/auth0_setup.md)

**7 -** (optional) [Enable Discord provider](./doc/discord_setup.md)

**8 -** (optional) [Enable Facebook provider](./doc/fb_setup.md)

**9 -** (optional) [Enable GitHub provider](./doc/github_setup.md)

**10 -** (optional) [Enable Google provider](./doc/google_setup.md)

**11 -** (optional) [Enable Microsoft provider](./doc/microsoft_setup.md)

**12 -** (optional) [Enable Twitch provider](./doc/twitch_setup.md)

**13 -** (optional) [Enable Twitter provider](./doc/twitter_setup.md)

**14 -** (optional) [Enable Instagram provider](./doc/instagram_setup.md)

**15 -** (optional) [Enable VK provider](./doc/vk_setup.md)

> Note you may see the `Redirect URL to add in your provider's configuration` is dynamic so make sure to enter the right path in your provider's app configurations.

## Front-end App Architecture

We use the [React boilerplate](https://github.com/react-boilerplate/react-boilerplate) architecture to implement the authentication flow.

### Routing

We have 3 containers associated with routes :
- AuthPage accessible responsible for the authentication flow.
- ConnectPage in charge of sending a request to the backend to retrieve the user's jwtToken when authenticating with a custom provider.
- HomePage which is accessible without being logged in.
- SecurePage that is accessible only if the user is logged in.
- NotFoundPage the name is explicit.

> [Check out the routing](./react-login-front-end-app/app/containers/App/index.js)

### Protecting a route

In the example, only logged in users can access the [SecurePage](./react-login-front-end-app/app/containers/SecurePage/index.js) container. To do so we have a React Higher Order Component [ProtectedRoute](./react-login-front-end-app/app/containers/ProtectedRoute/index.js) that checks if the user is logged in before accessing the route and redirects him to the [AuthPage container](./react-login-front-end-app/app/containers/AuthPage/index.js) if he is not.


With this HoC it's really easy to prevent a user from accessing a protected route for example:

**In your route declaration** `./containers/App/index.js`
```js
import React from 'react';
import { Switch, Route } from 'react-router-dom';

// HoC that blocks the navigation if the user is not logged in
import ProtectedRoute from 'containers/ProtectedRoute';
import FooPage from 'containers/FooPage';

export default function App() {
  return (
    <Switch>
      <ProtectedRoute exact path="/foo" component={FooPage} />
    </Switch>
  );
}

```
