var MessageView = {
  render: _.template(`
  <div class="chat">
  <div class="username" <%= username %>
  </div>
  <div> <%= text %> </div>
  </div>
  `)
};
// allows us to output html with formed template