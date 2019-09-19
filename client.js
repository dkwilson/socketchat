$(function () {

    //Connect to socket.io
    var socket = io.connect('http://127.0.0.1:4000');

    //enter chat and add users
    $("a#enterChat").click(function(e) {
        e.preventDefault();

        let username = $('#username').val();
        localStorage.setItem('username', username);

        if(username != "") {
            socket.emit('username', username);
        } else {
            alert('You must enter a username!')
        }
    })
})