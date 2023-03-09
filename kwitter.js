var firebaseConfig = {
    apiKey: "AIzaSyDeGXcbEDtSGb1wPoFrQZFelvqPoCL8ZQA",
    authDomain: "kwitter-c23bf.firebaseapp.com",
    databaseURL: "https://kwitter-c23bf-default-rtdb.firebaseio.com",
    projectId: "kwitter-c23bf",
    storageBucket: "kwitter-c23bf.appspot.com",
    messagingSenderId: "645494356138",
    appId: "1:645494356138:web:4075cfaec7ac6f2e2a38d3",
    measurementId: "G-YSWHKCJY07"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function adduser() {
    username = document.getElementById("user_name").value;
    localStorage.setItem("user_name", username);
    window.location = "kwitter_room.html";

}
