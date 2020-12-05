var Messages = {
  $chats: $('#chats'),
  add: function () {
    $('.submit').click(function (event) {
      var $input = $('#message').val();
      MessagesView.$chats.append($input);
    });
  },
};
