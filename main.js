var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');
const app = express();
app.use(bodyParser.text())
app.post("/ecs/log", bodyParser.text({type: "*/*"}), function(req, res) {
    console.log("Client sent EC log: " + req.body);
    // If you are on Windows, use .\ or C:\ when putting a directory. Ex. (C:\Users\<your username>\Downloads\ or whatever folder you want to store the logs in)
    // If you are on macOS / Linux / Unix-based system, use ./ or / when putting a directory. Ex. (/home/<your username>/ or /Users/<your name>/ and / or whatever the folder you want to store the logs in)
    // I do not recommend sharing these logs with anyone, as they contain your DeviceId, AccountId, Serial No., and much more about your Wii console.
    fs.writeFileSync("LOOK ABOVE FOR INSTRUCTIONS" + new Date().toString() + ".txt", req.body);
    res.status(200).send('got log!<br><a href="https://oss-auth.shop.wii.com/oss/serv/index.jsp">go back to shop</a>');
});
app.get("/ecs/log", function(req, res) {
    res.status(200).send('hi<br><a href="https://oss-auth.shop.wii.com/oss/serv/index.jsp">go back to shop</a>');
})

app.listen(8082, function() {
    console.log('server listening on port 8082')
})
