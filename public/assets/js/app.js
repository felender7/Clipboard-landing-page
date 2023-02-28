window.onload = function(){


//HERO SECTION
let heroSubTitle = "A history of everything you copy";
let heroDescription = "Clipboard allows you to track and organize everything you copy. </br>Instantly access your clipboard on all your devices"
let heroLinks =  '<a href="#" class="btn btn-success btn-lg shadow-sm">Download for iOS </a> <a href="#" class="btn btn-primary btn-lg shadow-sm">Download for Mac</a>'

document.getElementById("hero-logo").src = "assets/img/logo.svg";
document.getElementById("hero-subtitle").innerHTML = heroSubTitle;
document.getElementById("hero-description").innerHTML = heroDescription;
document.getElementById("hero-links").innerHTML = heroLinks

//KEEP TRACT SECTION
let trackTitle = "Keep track of your snippets Clipboard";
let trackDescription = `Clipboard
            instantly stores any item you copy in the cloud, meaning you can access <br> your
            snippets immediately on all your devices. Our Mac and iOS apps will help you <br>
            organize everything`

let quickSearchTitle = "Quick Search";
let quickSearchDescription = "Easily search your snippets by content,category, web address, application, and more"

document.getElementById("track-image").src="assets/img/image-computer.png";
document.getElementById("quick-search-title").innerHTML = quickSearchTitle;
document.getElementById("quick-search-description").innerHTML = quickSearchDescription;
}



