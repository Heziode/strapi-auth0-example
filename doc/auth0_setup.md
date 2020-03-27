# Auth0 Setup

Visit your Auth0 tenant dashboard.

In API section, create a new API.
In application, create a `machine-to-machine` application and select the API that you have just create.
In settings of this app set theses values:

- **Allowed Callback URLs**: `http://localhost:1337/connect/auth0/callback`
- **Allowed Logout URLs**: `http://localhost:3000`
- **Allowed Web Origins**: `http://localhost:3000`

At the bottom of settings, show "Advanced Settings" and go to the Grant Types. Ensure that theses grants are checked/enabled:
- Implicit
- Authorization Code
- Refresh Token
- Client Credentials

## API Setup

Visit the User Permissions provider settings page: http://localhost:1337/admin/plugins/users-permissions/providers
Click on the **Auth0** provider

Then fill the informations:

- Enable: ON
- Client ID: `<Your Auth0 Client ID>`
- Client ID: `<Your Auth0 Client Secret>`
- Subdomain: `<Your Auth0 tenant url>`, example it is the part in bold in the following url:  https://**my-tenant.eu**.auth0.com/
- The redirect URL to your front-end app: https://localhost:3000/connect/auth0
