const fetch = require("node-fetch")

const {service_id, template_id, user_id} = process.env

console.log('hello its worign')

exports.handler = async (event, context) => {
  const params = JSON.parse(event.body)
  console.log(params)

  console.log(service_id)
  console.log(template_id)
  console.log(user_id)

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


  // var data = {
  //   service_id: `${functions.config().app.service_id}`,
  //   template_id: `${functions.config().app.template_id}`,
  //   user_id: `${functions.config().app.user_id}`,
  //   template_params: {
  //     email: request.body.email,
  //     message_html: request.body.message_html,
  //     from_name: request.body.from_name,
  //     phone: request.body.phone
  //   }
  // }

  

  // var data = {
  //   service_id: 'Nail_Bar_56',
  //   template_id: `Nail_Bar_56_id`,
  //   user_id: `user_4NUMa5XPsuZeIiv2dUbuh`,
  //   template_params: {
  //     email: request.body.email,
  //     message_html: request.body.message_html,
  //     from_name: request.body.from_name,
  //     phone: request.body.phone
  //   }
  // }

  // var data = {
  //     email: request.body.email,
  //     message_html: request.body.message_html,
  //     from_name: request.body.from_name,
  //     phone: request.body.phone
  
  // }





