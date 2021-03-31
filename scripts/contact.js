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

    var data = {
      email: email.value,
      message_html: message.value,
      from_name: name.value,
      phone: phone.value
    };


    sendEmail('.netlify/functions/server', data);

  } else {
    console.log('incorrect form')
  }
  



  
})
