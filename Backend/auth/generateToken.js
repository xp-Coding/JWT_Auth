import jwt from "jsonwebtoken"

const generateToken = (res, userId)=>{
    const token = jwt.sign({userId}, "secret", {expiresIn: "1h"} )
    res.cookie("token", token, {httpOnly: true, secure:true, maxAge:3600})
}


export default generateToken;