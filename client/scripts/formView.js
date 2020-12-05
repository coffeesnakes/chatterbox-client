var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.off('submit');
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();

    console.log('click!');
    let msg = {};
    msg.username = App.username;
    msg.text = $('#send').find('input[name="message"]').val();
    Parse.create(msg, ()=>{});
    location.reload();
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};