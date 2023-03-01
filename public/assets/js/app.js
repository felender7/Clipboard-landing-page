window.onload = function(){


//HERO SECTION
let heroSubTitle = "A history of everything you copy";
let heroDescription = "Clipboard allows you to track and organize everything you copy. </br>Instantly access your clipboard on all your devices"
let heroLinks =  '<a href="#tract-title" data-scroll  class="btn btn-success btn-lg shadow-sm">Download for iOS </a> <a href="#tract-title" data-scroll  class="btn btn-primary btn-lg shadow-sm">Download for Mac</a>'

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

//BRAND LOGOS SECTION

document.getElementById("brand-logos").innerHTML = `
<div class="col"><img src="assets/img/logo-google.png" class="img-fluid" alt=""></div>
<div class="col"><img src="assets/img/logo-ibm.png" class="img-fluid" alt=""></div>
<div class="col"><img src="assets/img/logo-microsoft.png" class="img-fluid" alt=""></div>
<div class="col"><img src="assets/img/logo-hp.png" alt="" class="img-fluid"></div>
<div class="col"> <img src="assets/img/logo-vector-graphics.png" class="img-fluid" alt=""></div>
`


//DOWNLOAD APPS 

let iosMacTitle="Clipboard for IOS and Mac OS";
let iosMacDesc = "free on the App Store. Download for Mac or iOS, sync with iCloud <br> and you’re ready to start adding to your clipboard"
let downloadLinksIosMac  =  '<a href="#" class="btn btn-success btn-lg me-2">Download for iOS </a> <a href="#" class="btn btn-primary btn-lg">Download for Mac</a>'

document.getElementById("ios-mac-title").innerHTML = iosMacTitle;
document.getElementById("ios-mac-desc").innerHTML = iosMacDesc;
document.getElementById("download-links").innerHTML = downloadLinksIosMac;




//FOOTER

document.getElementById("footer").innerHTML=`


<div class="container mt-10 p-3">
<div class="row">
    <div class="col">
        <img src="assets/img/logo.svg" class="img-fluid" width="35px" alt="" style="
        margin-top: 12px">
    </div>
    <div class="col">
        <ul>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Contact Us </a></li>

        </ul>
    </div>
    <div class="col">
        <ul>
            <li><a href="#">Privacy Policy</a></li>

        </ul>
    </div>
    <div class="col">
        <ul>
            <li><a href="#">Intall Guide</a></li>

        </ul>
    </div>
    <div class="col">
        <ul style="display: inline-flex; gap: 8px; padding-left: 0;">
            <li><a href="#" target="_blank"><i class="fa-brands fa-square-facebook"></i></a></li>
            <li><a href="#" target="_blank"><i class="fa-brands fa-twitter"></i></a> </li>
            <li><a href="#"><i class="fa-brands fa-instagram"></i></a></li>
        </ul>
    </div>
</div>
</div>
`

// All animations will take exactly 500ms
var scroll = new SmoothScroll('a[href*="#"]', {
	speed: 500,
	speedAsDuration: true
});

}



