import "./app";
import "../main.css";

var script = document.createElement("SCRIPT");
script.innerText = `window.e = require('electron');
    var wallpaper = require('wallpaper');
    var got = require('got');
    var tempfile = require('tempfile');
    var path = require('path');
    var fs = require('fs');`;
script.type = "text/javascript";
document.getElementsByTagName("head")[0].appendChild(script);
