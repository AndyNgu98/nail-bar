// const axios = require("axios")

// const {service_id, template_id, user_id} = process.env

exports.handler = (event, context, callback) => {


  // const {email, message_html, form_name, phone} = JSON.parse(event.body)

  // console.log(event.body)


  // var data = {
  //   service_id: 'Nail_Bar_56',
  //   template_id: 'Nail_Bar_56_id',
  //   user_id: 'user_4NUMa5XPsuZeIiv2dUbuh',
  //   template_params: {
  //     email: email,
  //     message_html: message_html,
  //     from_name: form_name,
  //     phone: phone
  //   }
  // }

  // axios.post('https://api.emailjs.com/api/v1.0/email/send', data) 
  // .then((res) => {
  //   console.log(res.data)
  // })
  // .catch((err) => {
  //   console.log(err)
  // })

  // fetch('https://api.emailjs.com/api/v1.0/email/send', {
  // method: 'POST', // or 'PUT'
  // headers: {
  //   'Content-Type': 'application/json',
  // },
  // body: JSON.stringify(data),
  // })
  // // .then(response => response.json())
  // .then(response => {
  //   callback(null, { 
  //     statusCode: 200, 
  //     body: JSON.stringify(response)
  //  });
  //   // console.log('Success:', response);
  // })
  // .catch((error) => {
  //   console.error('Error:', error);
  // });

  
    

  // const url = 'https://api.emailjs.com/api/v1.0/email/send';
  // try {
  //   const emailUrl = await fetch(url, {
  //     headers: {
  //       Accept: "application/json"
  //     }
  //   });
  //   const sendEmail = await emailUrl.json()
  //   return {
  //     statusCode: 200,
  //     body: JSON.stringify(sendEmail)
  //   };
  // } catch (err){
  //   return {statusCode: 422, body: err.stack};
  // }
};