// alert("This Website Is Created Only For College Project Not For Commercial Use Or Not Created For Hosting");
// alert("Zomato And Swiggy Link Are Used To Showcase Our Knowledge About Anchor Tag And Not For Any Wrong Intension");
// alert("SVG Used In This College Project Is Provided By Reshot.com For Project Use");
// alert("The Search Box Is Linked With The Search Box Of Google");

let btn = document.getElementsByClassName("adclose")[0];
let ad = document.getElementsByClassName("Ad")[0];
ad.hidden = true;

function adHide(){
    ad.hidden = true;
}

function adUnhide(){
    ad.hidden = false;
}

btn.addEventListener("click", adHide);

setInterval(adUnhide, 10000);

setInterval(adHide, 20000);

