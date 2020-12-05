var MessagesView = {
  $chats: $("#chats"),

  initialize: function () {},

  render: function () {},

  renderMessage: function (data) {
    var message = "";
    if (data) {
      if (data.username && data.text && data.roomname) {
        message += MessageView.render(data);
      }
      this.$chats.append(message);
      console.log(this.$chats.message);
    }
  },
};



// console.log( data);


// createdAt: "2020-12-05T00:17:22.630Z"
// objectId: "Kr96nAZK2r"
// roomname: "test"
// text: "ss"
// updatedAt: "2020-12-05T00:17:22.630Z"
// username: "remy"