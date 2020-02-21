import React, {Component} from 'react';
import "./Form.css";

class Form extends Component
{
    // constructor(props)
    // {
    //     super(props);
    //     this.state = 
    //     {
    //         name:'',
    //         email:'',
    //         message:''
    //     }
    //     onNameChange(event)
    //     {
    //         this.setState({name:event.target.value})
    //     }
    //     onEmailChange(event)
    //     {
    //         this.setState({email:event.target.value})
    //     }
    //     onMessageChange(event)
    //     {
    //         this.setState({message:event.target.value})
    //     }
    //     handleSubmit(event)
            // {
            //     event.preventDefault();
            //     console.log(this.state);
            // }
    // }
    render()
    {
        return (
            <div className="contact_body_container">
                <h1>Contact Us</h1>
                <p>Please fill in your information and we'll be sending your order in no time!</p>

                <form id="contact_form_container" /*onSubmit={this.handleSubmit.bind(this)}*/ method="POST">
                    
                    <div className="contact_form_group">
                        <label htmlFor="fname" className="contact_form_group_item">First Name</label>
                        <input id="fname" type="text" className="contact_form_control" placeholder="first name" className="contact_form_group_item"/>
                    </div>

                    <div className="contact_form_group">
                        <label htmlFor="lname" className="contact_form_group_item">Last Name</label>
                        <input id="lname" type="text" placeholder="last name" className="contact_form_group_item"/>
                    </div>

                    <div className="contact_form_group">
                        <label htmlFor="email" className="contact_form_group_item">Email</label>
                        <input id="email" type="email" className="contact_form_control" aria-describedby="emailHelp" placeholder="abc@gmail.com"/>
                    </div>

                    <div className="contact_form_group">
                        <label htmlFor="tel" className="contact_form_group_item">Telephone</label>
                        <input id="tel" type="text" placeholder="+9611000000" className="contact_form_group_item" required/>
                    </div>

                    <div className="contact_form_group">
                        <label htmlFor="address" className="contact_form_group_item">Address</label>
                        <input id="address" type="text" placeholder="City, Street, Building, Floor" className="contact_form_group_item" reaquired/>
                    </div>

                    <div className="contact_form_group">
                        <label for="contact_area" className="contact_form_group_item">Area</label>
                        <select id="contact_area" name="area" required>
                            <option value=" "></option>
                            <option value="beirut">Beirut</option>
                            <option value="mountlebanon">Mount Lebanon</option>
                            <option value="north">North</option>
                            <option value="south">South</option>
                            <option value="northbekaa">North Bekaa</option>
                            <option value="centralbekaa">Central Bekaa</option>
                            <option value="westbekaa">West Bekaa</option>
                        </select>
                    </div>

                    <div className="contact_form_group">
                        <label for="contact_subject" className="contact_form_group_item">Subject</label>
                        <select id="contact_subject" name="subject" required>
                            <option value=""></option>
                            <option value="quotation">Quotation</option>
                            <option value="purchase">Purchase</option>
                            <option value="question">Question</option>
                        </select>
                    </div>

                    <div className="contact_form_group">
                        <label for="quantity" className="contact_form_group_item">Quantity</label>
                        <input type="number" id="quantity" name="quantity" min="1" max="100" className="contact_form_group_item"></input>
                    </div>

                    <div className="contact_form_group">
                        <label htmlFor="message" className="contact_form_group_item">Message</label>
                        <textarea id="message" rows="5" cols="20" className="contact_form_group_item"></textarea>
                    </div>
                    <hr id="contact_form_line"></hr>
                    <button type="submit" className="contact_submit_btn">Submit</button>
                </form>
            </div>
        );
    }
}
export default Form;

//The submit handler method send HTTP requests to the API. The following code makes sure the code is correct and the action is initiated when the button is pressed
// handleSubmit(e) {
//     e.preventDefault();

//     fetch('http://localhost:3002/send',{
//         method: "POST",
//         body: JSON.stringify(this.state),
//         headers: {
//           'Accept': 'application/json',
//           'Content-Type': 'application/json'
//         },
//       }).then(
//     	(response) => (response.json())
//        ).then((response)=>{
//       if (response.status === 'success'){
//         alert("Message Sent."); 
//         this.resetForm()
//       }else if(response.status === 'fail'){
//         alert("Message failed to send.")
//       }
//     })
//   }