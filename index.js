import { automate } from "./corporateFunctions.mjs";
import { usersCredentials } from "./static.mjs"

//automate("demoDriver","MithuChachhu")

var accounts = Object.keys(usersCredentials)
accounts.forEach((name,index,arr) => {
    automate(`${name} #${index}`,name)
})
