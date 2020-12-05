var MessageView = {
  render: _.template(
    "<div class='chat'>" +
   "<div class='username'>" + "<%= username %>" + "</div>" +
   "<p class='text>" + "<%= text %>" +  "</p>" +
   "<p class='roomname'>" + "<%= roomname%>" + "</p>" +
   "</div>"
  )
};
