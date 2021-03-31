const fetch = require("node-fetch")
const axios = require("axios")

const {service_id, template_id, user_id} = process.env

exports.handler = async (event, context, callback) => {


  var data = {
    service_id,
    template_id,
    user_id,
    template_params: {
      email: 'event.body.email',
      message_html: 'event.body.message_html',
      from_name: 'event.body.from_name',
      phone: 'event.body.phone'
    }
  }

  axios.post('https://api.emailjs.com/api/v1.0/email/send', data) 
  .then((res) => {
    console.log(res)
  })
  .catch((err) => {
    console.log(err)
  })

  // fetch('https://api.emailjs.com/api/v1.0/email/send', {
  // method: 'POST', // or 'PUT'
  // headers: {
  //   'Content-Type': 'application/json',
  // },
  // body: JSON.stringify(data),
  // })
  // .then(response => response.json())
  // .then(res => {
  //   console.log('Success:', res);
  // })
  // .catch((error) => {
  //   console.error('Error:', error);
  // });

  
    callback(null, { 
      statusCode: 200, 
       body: "Hello World" 
   });

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