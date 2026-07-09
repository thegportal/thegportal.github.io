"use strict";
var scripts = document.getElementsByTagName("script"),
    scriptUrl = scripts[scripts.length - 1].src,
    root = scriptUrl.split("master-loader.js")[0],
    loaders = {
        unity: "https://raw.githubusercontent.com/thegportal/thegportal.github.io/refs/heads/main/ghrb/g/rooftop-snipers-2/unity.js", "unity-2020": "unity-2020.js"
    };
if (0 <= window.location.href.indexOf("pokiForceLocalLoader") 
	&& (loaders.unity = "https://raw.githubusercontent.com/thegportal/thegportal.github.io/refs/heads/main/ghrb/g/rooftop-snipers-2/unity.js", 
		
		root = "/loaders"), !window.config) throw Error("window.config not found");
var loader = loaders[window.config.loader];
if (!loader) throw Error('Loader "' + window.config.loader + '" not found');
if (!window.config.unityWebglLoaderUrl) {
    var versionSplit = window.config.unityVersion ? window.config.unityVersion.split(".") : [],
        year = versionSplit[0],
        minor = versionSplit[1];
          window.config.unityWebglLoaderUrl ="https://raw.githubusercontent.com/thegportal/thegportal.github.io/refs/heads/main/ghrb/g/rooftop-snipers-2/UnityLoader.js";
    // switch (year) {
    //     case "2019":
    //         window.config.unityWebglLoaderUrl = 1 === minor ? "./UnityLoader.2019.1.js" : "./UnityLoader.2019.2.js";
    //         break;
    //     default:
    //         window.config.unityWebglLoaderUrl = "https://game-cdn.poki.com/loaders/v2/unity/static/UnityLoader.js"
    // }
}
var sdkScript = document.createElement("script");
sdkScript.src = "https://thegportal.github.io/ghrb/g/rooftop-snipers-2/poki-sdk.js", sdkScript.onload = function() {
    var i = document.createElement("script");
    i.src = "https://raw.githubusercontent.com/thegportal/thegportal.github.io/refs/heads/main/ghrb/g/rooftop-snipers-2/unity.js", document.body.appendChild(i)
}, document.body.appendChild(sdkScript);
