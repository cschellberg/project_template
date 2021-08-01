import React from 'react';



class Contact extends React.Component {



sendEmail(event){
  event.preventDefault();
  const form=document.getElementById("contact-form");
  const data = {
    firstName:form.firstName.value,
    lastName:form.lastName.value,
    email:form.email.value,
    message:form.message.value
    };
const emailUrl="https://cyonbbcqpf.execute-api.us-east-1.amazonaws.com/sendEmail";
const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json'},
    mode:"no-cors",
    body: JSON.stringify(data)
};
const response=fetch(emailUrl, requestOptions)
    .then(response =>{alert("Your message has been successfully sent")})
    .catch(err =>{alert("For technical reasons were not able to sent the email")});
}

render(){
  return(
    <div className="contact">
      <form id="contact-form"  method="POST">
      <h1 className="contact-title">Get in touch</h1>
      <div className="form-container">
        <div className="form-group">
          <input name="firstName" type="text" placeholder="First name" className="form-control" />
        </div>
        <div className="form-group">
          <input name="lastName" type="text" placeholder="Last name" className="form-control" />
        </div>
        <div className="form-group">
          <input name="email" type="email" placeholder="Email" className="form-control" />
        </div>
        <div className="form-group">
          <textarea name="message" className="form-control" placeholder="Message" rows="5"></textarea>
        </div>
        <button onClick={this.sendEmail} >Send Message</button>
        </div>
      </form>
    </div>
  )
}
}
export default Contact
