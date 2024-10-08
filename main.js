var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');
const app = express();
app.use(bodyParser.text())
app.post("/ecs/log", bodyParser.text({type: "*/*"}), function(req, res) {
    console.log("Got log file!\nWriting to file...");
    // If you are on Windows, use .\ or C:\ when putting a directory. Ex. (C:\Users\<your username>\Downloads\ or whatever folder you want to store the logs in)
    // If you are on macOS / Linux / Unix-based system, use ./ or / when putting a directory. Ex. (/home/<your username>/ or /Users/<your name>/ and / or whatever the folder you want to store the logs in)
    // I do not recommend sharing these logs with anyone, as they contain your DeviceId, AccountId, Serial No., and much more about your Wii console.
    var fileName = new Date().toString() + ".txt"
    fs.writeFileSync("Your Directory" + fileName, req.body);
    console.log("\nDone! Log should be where you put the directory");
    res.status(200).send('got log!<br><a href="https://oss-auth.shop.wii.com/oss/serv/index.jsp">go back to shop</a>');
});
app.get("/ecs/log", function(req, res) {
    res.status(200).send('hi<br><a href="https://oss-auth.shop.wii.com/oss/serv/index.jsp">go back to shop</a>');
})
app.get("/trace", function(req, res) {
    console.log("Trace message: " + decodeURIComponent(req.query.msg));
    res.status(200).send("Got trace!")
})
app.listen(8082, function() {
    console.log('server listening on port 8082')
})
