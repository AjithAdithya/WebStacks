function Login()
{
    var a,b;
    a=document.getElementById("username-input").value;
    b=document.getElementById("password-input").value;
    if(a=="")
        window.alert("Enter Username");
    if(b=="")
        window.alert("Enter Password");
    if(a=="a")
    {
        if(b=="a")
        {
            console.log("Login Successful");
            document.getElementById("password-input").value="";
            document.getElementById("username-input").value="";
        }
        else
        {
                console.log("Check Your Password");
                document.getElementById("password-input").value="";
        }
    }
    else
    {
        console.log("Check Your Username");
        document.getElementById("password-input").value="";
        document.getElementById("username-input").value="";
    }
}