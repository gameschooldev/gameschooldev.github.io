//Checking if the page is loaded in an iframe
if(window.self != window.top) {
//Analyzing URL to check embed link
try {
if(window.parent.location.hostname.indexOf("https://kings-schoolwork.vercel.app/Pages/games.html, https://kingman11211-git-main-gameschooldev.vercel.app/Pages/games.html, https://kingman11211-gameschooldev.vercel.app/Pages/games.html, https://kings-schoolwork-git-main-gameschooldev.vercel.app/Pages/games.html, https://kings-schoolwork-gameschooldev.vercel.app/Pages/games.html") == -1) {
window.location.href = "https://kings-schoolwork.vercel.app/Pages/games.html, https://kingman11211-git-main-gameschooldev.vercel.app/Pages/games.html, https://kingman11211-gameschooldev.vercel.app/Pages/games.html, https://kings-schoolwork-git-main-gameschooldev.vercel.app/Pages/games.html, https://kings-schoolwork-gameschooldev.vercel.app/Pages/games.html";
} else {
//iFrame from host site
}
} catch (ex) {
//Blocking Embed...
window.location.href = "https://gamehub100.vercel.app/";
}
} 
