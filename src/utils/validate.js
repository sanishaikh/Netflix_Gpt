export const checkValidData =(email, password)=>{
const isEmailValid = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email)
const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)
//const isNameValid = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name)
if(!isEmailValid) return "Email ID is not valid";
if(!isPasswordValid) return "Password ID is not valid"
//if(!isNameValid) return "Name should consist only letters"

return null
}