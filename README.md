# Wii Shop EC Log Dumper
This is a script to dump the EC Log from the Wii Shop Channel to a text file.<br>
*Only useful when debugging on real hardware, as you can access the EC Log on Dolphin through OSReport (see https://wiibrew.org/wiki/Accessing_Wii_Shop_Channel_from_PC)*
## How to use
**Note, you might have to use Apache or Nginx as a reverse proxy so that your Wii can connect**
* In a terminal/cmd window, do `git clone https://github.com/Ocarinaoftime/Wii-Shop-EC-Log-Dumper.git`
* `cd` into `Wii-Shop-EC-Log-Dumper`
* Make sure you have NodeJS installed and have expressjs installed
* Simply run `node main.js` to start the server.
* Link the file in this repository called `debug.html` to a route in your server.
* When in the Wii Shop Channel, head to the debug.html page
* Click `Send log to server` and look at the file created on the computer running the script
* Boom!
