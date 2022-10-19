// document.body.style.backgroundColor = 'orange';

console.log('Set Cookies');

const cvalue = 'test-222';

const d = new Date();
d.setTime(d.getTime() + (2 * 24 * 60 * 60 * 1000));

document.cookie = "check=" + cvalue + ";expires=" + d.toUTCString() + ";path=/;";

let user = document.cookie;

// if (user != "") {
// 	alert("Welcome again " + user);
// } else {
// 	alert('Please add');
// }