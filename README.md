# Youtube-mp3-download-interface

## Description
This is a simple web interface for youtube-dl. At the moment only mp3 downloads are supported.  
The site is meant to be hosted on a local server or VM, so anyone within your LAN can access it. The mp3 will be saved on the server, and there is an option to download the mp3 to the client.

## Requirements
* Web server with PHP >= 5.4 and Python 2.6, 2.7, or 3.2+
* [Youtube-dl](https://github.com/rg3/youtube-dl)

## Installation
* Clone this repository to the root directory of the webserver (ex. var/www).
* Configure vhost on the server.
* If necessary, change permissions of the "downloads" directory.

## Screenshots
![Download in progress](https://github.com/RobinDeHerdt/Youtube-mp3-download-interface/tree/master/assets/img/download-in-progress.png "Download in progress")
![Finished downloading](https://github.com/RobinDeHerdt/Youtube-mp3-download-interface/tree/master/assets/img/download-done.png "Finished downloading")
