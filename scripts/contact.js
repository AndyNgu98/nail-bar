let button = document.querySelector('#submit-button');

button.addEventListener('click', () => {
  var name = document.querySelector('#name-field')
  var phone = document.querySelector('#phone-field')
  var email = document.querySelector('#email-field')
  var message = document.querySelector('#message-field')

  const valid = {
    name: !validator.isEmpty(name.value),
    email: validator.isEmail(email.value),
    phone: validator.isMobilePhone(phone.value, 'en-GB'),
    message: !validator.isEmpty(message.value),
  }

  var data = {
    service_id: 'Nail_Bar_56',
    template_id: 'Nail_Bar_56_id',
    user_id: 'user_kaDmIh78765z8Lve1hcbw',
    template_params: {
      email: email.value,
      message_html: message.value,
      from_name: name.value,
      phone: phone.value
    }
  }

  

  function allTrue(valid) {
    for(var key in valid)
      if(!valid[key]) return false;
      
    return true;
  }
  
  const validated = allTrue(valid)
  
  if(validated) {
    
    var sendEmail = (url, config) => {
      axios.post(url, config)
      .then( response => {
        console.log(response);
        name.value = ''
        email.value = ''
        message.value = ''
        phone.value = ''
        document.querySelector('#success-message').innerHTML = 'Thank You for Your Message'
      })
      .catch( err => {
        console.log(err);
      });
    }

    sendEmail('https://api.emailjs.com/api/v1.0/email/send', data);

  } else {
    console.log('incorrect form')
  }
  



  
})
