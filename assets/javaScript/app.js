
// Initialize Firebase
var config = {
  apiKey: "AIzaSyCiZh4_U2WCFxes509WTtCLi68k2kKougM",
  authDomain: "project1-8aae6.firebaseapp.com",
  databaseURL: "https://project1-8aae6.firebaseio.com",
  projectId: "project1-8aae6",
  storageBucket: "project1-8aae6.appspot.com",
  messagingSenderId: "106844699602"
};
firebase.initializeApp(config);
var database = firebase.database();


function addNew() {
  var list = document.getElementById('addQuestion');
  var question = document.getElementById('ask').value;
  var entry = document.createElement('li');
  entry.appendChild(document.createTextNode("Question:" + question + ' '));
  list.appendChild(entry);
  return false;
}
