var App = {

  $spinner: $('.spinner img'),

  username: 'dog the bounty hunter',

  initialize: function() {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();

    // Fetch initial batch of messages
    // App.startSpinner();
    App.fetch(function () {
      App.stopSpinner();
    });

  },

  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {

      // examine the response from the server request:
      Messages = data.results;
      // console.log('log from app.js: ', Messages);

      MessagesView.renderMessage(data.results);

      callback();
    });
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};
