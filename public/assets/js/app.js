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
            organize everything`;

let quickSearchTitle = "Quick Search";
let quickSearchDescription = "Easily search your snippets by content,category, web address, application, and more";
let icloudSyncTitle = "iCloud Sync";
let icloudSyncDescription ="Instantly saves and syncs snippets across all your devices" ;
let completeHistory = "Complete History";
let completeHistoryDesc = "Retrieve any snippets from the first moment you started using the app"


document.getElementById("tract-title").innerHTML = trackTitle;
document.getElementById("track-description").innerHTML = trackDescription;
document.getElementById("track-description")
document.getElementById("track-image").src="assets/img/image-computer.png";
document.getElementById("quick-search-title").innerHTML = quickSearchTitle;
document.getElementById("quick-search-description").innerHTML = quickSearchDescription;
document.getElementById("icloud-sync-title").innerHTML = icloudSyncTitle;
document.getElementById("icloud-sync-description").innerHTML = icloudSyncDescription;
document.getElementById("complete-history-title").innerHTML = completeHistory;
document.getElementById("complete-history-desc").innerHTML = completeHistoryDesc;

//ACCESS CLIPBOARD SECTION

let accessClipboardTitle ="Access Clipboard anywhere" ;
let accessClipboardDesc ="Whether youre on the go, or at your computer, you can access all your Clipboard <br> snippets in a few simple clicks." ;
let accessClipboardImg ="assets/img/image-devices.png";

document.getElementById("access-clipboard-title").innerHTML = accessClipboardTitle;
document.getElementById("access-clipboard-desc").innerHTML = accessClipboardDesc;
document.getElementById("access-clipboard-img").src= accessClipboardImg;

//WORKFLOW SECTION
let superchargeTitle = "Supercharge your workflow";
let superchargeDesc = 'We’ve got the tools to boost your productivity';

document.getElementById("supercharge-title").innerHTML = superchargeTitle;
document.getElementById("supercharge-desc").innerHTML=superchargeDesc;

document.getElementById("3-cols").innerHTML = 
`
<div class="col">
<img src="assets/img/icon-blacklist.svg" alt="" class="mb-5">
<h4>Create blacklists</h4>
<p>Ensure sensitive information never makes its way to your clipboard by excluding certain sources</p>
</div>

<div class="col">
<img src="assets/img/icon-text.svg" alt="" class="mb-5">
<h4>Plain text snippets</h4>
<p>Remove unwanted formatting from copied
    text for a consistent look.</p>
</div>

<div class="col">
<img src="assets/img/icon-preview.svg" alt="" class="mb-5">
<h4>Sneak preview </h4>
    <p>Quick preview of all snippets on your Clipboard for easy access</p>
</div>

`

}



