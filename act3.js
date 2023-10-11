let password =prompt; ("Please enter your password")

    if (password.length == 8)
   {console.log ("Welcome");
}
  else if(password.length <= 8)
   { console.log ("Password is too short");
}  
else if(password.length >= 8)
   { console.log("Too long password & password should be 8 characters");
} else if(password == "")
{
console.log("Please provide a password");
}