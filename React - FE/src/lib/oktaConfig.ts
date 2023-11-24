export const oktaConfig = {
    clientId : '0oad5vmgufGrdK2Cj5d7',
    issuer : 'https://dev-57830341.okta.com/oauth2/default',
    redirectUri : 'https://localhost:3000/login/callback',
    scopes : ['openid', 'profile', 'email'],
    pkce : true,
    disableHttpsCheck : true,
}