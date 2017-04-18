require('dotenv').config();
var express = require('express');
var request = require('request');
var path = require('path');
var app = express();

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
});


app.get('/auth/redirect', (req, res) => {
    var options = {
        uri: 'https://slack.com/api/oauth.access?code='
        +req.query.code+
        '&client_id='+process.env.CLIENT_ID+
        '&client_secret='+process.env.CLIENT_SECRET,
        method: 'GET'
    };
    request(options, (error, response, body) => {
        var JSONresponse = JSON.parse(body);
        if (!JSONresponse.ok){
            console.log(JSONresponse);
            res.send("Error encountered: \n"+JSON.stringify(JSONresponse)).status(200).end();
        }
        else{
            res.send('Your access token is: <div style="border: 1px solid #000; padding: 2px 4px; background: #333; color: #fff; font-family: monospace;">'+JSONresponse.access_token+'</div>');
        }
    });
});

app.listen(3090, function () {
    console.log('Example app listening on port 3090!');
});
