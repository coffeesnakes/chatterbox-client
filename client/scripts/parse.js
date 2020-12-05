var Parse = {
  server: `http://parse.${window.CAMPUS}.hackreactor.com/chatterbox/classes/messages`,

  create: function (message, successCB, errorCB = null) {
    $.ajax({
      url: Parse.server,
      type: "POST",
      data: JSON.stringify(message),
      contentType: "application/json",
      success: successCB || function (data) {
        console.log('this message was sent to chatterbox');
        console.log(data);
      },
      error:
        errorCB ||
        function (data) {
          console.error("Failed to send", data);
        },
    });
  },

  readAll: function (successCB, errorCB = null) {
    $.ajax({
      url: Parse.server,
      type: "GET",
      data: { order: "-createdAt" },
      contentType: "application/json",
      success: successCB,
      error:
        errorCB ||
        function (error) {
          console.error("chatterbox: Failed to fetch messages", error);
        },
    });
  },
};
