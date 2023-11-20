import {auth} from 'express-oauth2-jwt-bearer'

const jwtCheck = auth({
    audience: "http://localhost:8000",
    issuerBaseURL: "https://dev-uq2o01tpyetv1y51.us.auth0.com",
    tokenSigningAlg: "RS256"
})

export default jwtCheck