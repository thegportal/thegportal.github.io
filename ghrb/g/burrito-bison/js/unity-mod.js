function UnityUrlFix(url) {
	console.log("--fx--UnityUrlFix--", url);
	if(url.indexOf("unity3d.com")>0 || url.indexOf("appspot.com")>0){
		url= "https://raw.githubusercontent.com/thegportal/thegportal.github.io/refs/heads/main/ghrb/g/burrito-bison/json/null.json?"+ url;
	}
	return url;
}
