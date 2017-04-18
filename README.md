# ssid-to-slack-status-token-generator
Generate a Access token for [https://github.com/kirbo/ssid-to-slack-status](https://github.com/kirbo/ssid-to-slack-status).

You can generate the Access tokens here: [https://ssid-to-slack-status.tunkkaus.com/](https://ssid-to-slack-status.tunkkaus.com/).

#### ssid-to-slack-status-token-generator

    # Clone this repository
    git clone https://github.com/kirbo/ssid-to-slack-status-token-generator.git
    
    # Change directory
    cd ssid-to-slack-status-token-generator
 
    # Install dependencies
    npm install
 
    # Copy sample config file
    cp example.env .env
    
    # Register yourself a Slack app and get the client token and client secret:
    # https://api.slack.com/apps
    
    # Edit the file you just copied with your favorite editor, e.g.
    nano .env

    # Run the script
    node index.js

This repository is mainly to prove everyone that I don't save any data at any point to anywhere.
