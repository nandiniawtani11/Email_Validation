<html>
    <head>
        <title>Email Validation</title>
        <script>
            function Validate()
            {
                var user1=document.getElementById("user").value;
                var regx=/^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+).([a-z]{2,8})(.[a-z]{2,8})?$/;
                if(regx.test(user1))
                {
                    document.getElementById("key").innerHTML="Valid";
                    document.getElementById("key").style.visibility="visible";
                    document.getElementById("key").style.color="green";
                    document.getElementById("user").style.border="solid 3px green";
                }
                else{
                    document.getElementById("key").innerHTML="Invalid";
                    document.getElementById("key").style.visibility="visible";
                    document.getElementById("key").style.color="red";
                    document.getElementById("user").style.border="solid 3px red";
                }
            }
        

        </script>
        <body>
            <input id="user" placeholder="Email" type="text">
            <label id="key" style="color: darkred; visibility: hidden;">Invalid</label> 
            <br><br>
            <button onclick="Validate()">Submit</button>
            <br><br>
            <img src="email.png" wigth="670">
        </body>
    </head>
</html>
