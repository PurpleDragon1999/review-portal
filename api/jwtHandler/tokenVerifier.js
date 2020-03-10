const jwt = require("jsonwebtoken");
const fs = require("fs");

module.exports = (token) => {

    const privateKEY = "qmnwnmekjejohrfcgtlmknlkycxxdfxulkmnklnklnilkomncp";

    var i  = 'CyberGroup India Pvt. Ltd.';          // Issuer 
    var s  = 'User Auth';                           // Subject 
    var a  = 'someone@cygrp.com';                   // Audience

    var verifyOptions = {
        issuer:  i,
        subject:  s,
        audience:  a,
        expiresIn:  "12h",
        algorithm:  ["RS256"]
    };

    //const publicKEY  = fs.readFileSync('./public.key.txt', 'utf8');
    try{
        let verify = jwt.verify(token, privateKEY, verifyOptions);
        // console.log("------------------------->", verify);
        return(verify);
    }
    catch(error){
        return false;
    }
}