const JSRSASign = require("jsrsasign");

// Generation

const claims = {
  Username: "praveen",
  Age: 27,
  Fullname: "Praveen Kataria"
};

const key = "$PraveenIsAwesome!";

const header = {
  alg: "HS512",
  typ: "JWT"
};

var sHeader = JSON.stringify(header);
var sPayload = JSON.stringify(claims);

// Generate the JWT
const sJWT = JSRSASign.jws.JWS.sign("HS512", sHeader, sPayload, key);
// Log it to the console.
// console.log("JSON Web Token:", sJWT);

const token =
  "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJVc2VybmFtZSI6InByYXZlZW4iLCJBZ2UiOjI3LCJGdWxsbmFtZSI6IlByYXZlZW4gS2F0YXJpYSJ9.KU0OySIUZi3vbA0WZ0MxPMCPoqyL3O0NSws-kR69s6zU2fv-BcP21zOlvzcsFc0tHM-18-85xWI7Ba-xrOCsfw";
const algorithm = "HS512";

// Log it to console
// console.log(
//   "Verification: ",
//   // Validation
//   JSRSASign.jws.JWS.verifyJWT(token, key, {
//     alg: [algorithm]
//   })
// );

// Decoding
const sJWS = token;
const aJWT = sJWS.split(".");
const uHeader = JSRSASign.b64utos(aJWT[0]);
const uClaim = JSRSASign.b64utos(aJWT[1]);
const pHeader = JSRSASign.jws.JWS.readSafeJSONString(uHeader);
const pClaim = JSRSASign.jws.JWS.readSafeJSONString(uClaim);
// Decoded Objects.
// Log it to the console.
// console.log("Header: ", pHeader);
// console.log("Claim: ", pClaim);
