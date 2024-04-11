function showSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.add('active');
}
function hideSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.remove('active'); 
}
function redirectToTalkToMe() {
    window.location.href = "https://w.app/joaoazulxy";
}
// let ZapButton = document.getElementById("ZapButton");

// ZapButton.onclick = function() {
//     document.body.classList.toggle("ZapButton");
//     if (document.body.classList.contains("ZapButton")) {
//         ZapButton.border = "0";
//     } else {
//         ZapButton.border = "";
//         }
//     }
