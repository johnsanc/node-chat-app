let socket = io();

socket.on('connect', function() {
    console.log('Connected to server');
}); 

socket.on('disconnect', function() {
    console.log('Disconnected from server');
});

socket.on('newMessage', function (message) {
    console.log('Got new message', message);
    let li = jQuery('<li></li>');
    li.text (`${message.from}: ${message.text}`);

    jQuery('#messages').append(li);
});

jQuery('#message-form').on('submit', function(e) {
    e.preventDefault();  // prevents default behavior, ie.e page refresh on submit for forms, etc

    socket.emit('createMessage', {
        from: 'User',
        text: jQuery('[name=message]').val()
    }, function() {

    });
});