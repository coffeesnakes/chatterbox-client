var MessagesView = {
  $chats: $("#chats"),

  initialize: function () {},

  render: function () {},
  //  render individual messages so you can append individual messages
  // to the dom
  renderMessage: function (data) {
    // var message = '';
    // console.log('helllppp', data);
    _.each(Messages, (message) => {
      // debugger;
      console.log("underscoreEach:", Messages);
      var $message = MessageView.render(message);
      console.log($message);
      MessagesView.$chats.append($message);
      console.log("alooooha", $message);
    });
    // if (data) {

    //   if (data.username && data.text && data.roomname) {

    //     message += MessageView.render(data);
    //     // debugger;
    //   }
    //   this.$chats.append(message);
    //   // console.log(this);
    // }
    // let $message = MessageView.render({
    //   username: data.username,
    //   text: data.text
    // });
    // this.$chats.append($message);
  },
};

// console.log( data);

// createdAt: "2020-12-05T00:17:22.630Z"
// objectId: "Kr96nAZK2r"
// roomname: "test"
// text: "ss"
// updatedAt: "2020-12-05T00:17:22.630Znpm"
// username: "remy"

/* <script>
  window.open('https://www.youtube.com/watch?v=ZXsQAXx_ao0&ab_channel=MotivaShian')
</script>; */
