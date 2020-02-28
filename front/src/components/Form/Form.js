import React, {Component} from 'react';
import DatePicker from 'react-date-picker';
import "./Form.css";

class Form extends Component
{
    constructor(props)
    {
        super(props);
        this.state = 
        {
            date:new Date(),
            orders_quantity:'',
            orders_amount:'',
            purchase_product_id:'',
            client_name:'',
            area:''
        }
    }
         onNameChange(event)
        {
            this.setState({client_name:event.target.value})
        }
        onQuantityChange(event)
        {
            this.setState({orders_quantity:event.target.value})
        }
        onAreaChange(event)
        {
            this.setState({area:event.target.value})
        }
        
        onChange = date => this.setState({ date })
        componentWillMount()
        {
            this.setState({purchase_product_id:this.props.product_id, orders_amount:this.props.product_price})
        }
        async handleSubmit(event)
        {
            event.preventDefault();
           
            try {
                const response = await fetch(`http://localhost:8080/order/create?date=${this.state.date}&quantity=${JSON.parse(this.state.orders_quantity)}&amount=${(JSON.parse(this.state.orders_quantity))*(JSON.parse(this.props.product_price[0].product_price))}&productID=${JSON.parse(this.state.purchase_product_id)}&clientName=${this.state.client_name}&area=${this.state.area}`);
                const result = await response.json();
                if (result.success) {
                console.log("done")
                alert("Your order has been submitted");
                } else {
                console.log("error")
                }
            } catch (err) {
                console.log(err)
                    } 
                }

    render()
    {
        return (
            <div className="contact_body_container">
                <h1>Contact Us</h1>
                <p>Please fill in your information and we'll be sending your order in no time!</p>

                <form id="contact_form_container" onSubmit={this.handleSubmit.bind(this)} method="POST">
                    
                    <div className="contact_form_group">
                        <label htmlFor="fname" className="contact_form_group_item">First Name</label>
                        <input id="fname" type="text" className="contact_form_control" placeholder="first name" className="contact_form_group_item" value={this.state.client_name} onChange={this.onNameChange.bind(this)}/>
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
                        <select id="contact_area" name="area" value={this.state.area} onChange={this.onAreaChange.bind(this)}required>
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
                        {!this.props.product_id?
                        <select id="contact_subject" name="subject" required>
                            <option value=""></option>
                            <option value="quotation">Quotation</option>
                            <option value="question">Question</option>
                        </select>
                        :
                        <select id="contact_subject" name="subject" required>
                        <option value="purchase" selected>Purchase</option>
                        </select>
                        }
                    </div>
                            
                    <div className="contact_form_group">
                        <label for="quantity" className="contact_form_group_item">Quantity</label>
                        <input type="number" id="quantity" name="quantity" min="1" max="100" className="contact_form_group_item" value={this.state.orders_quantity} onChange={this.onQuantityChange.bind(this)}></input>
                    </div>
                    <div className="contact_form_group">
                        <label htmlFor="message" className="contact_form_group_item">Message</label>
                        <textarea id="message" rows="5" cols="20" className="contact_form_group_item"></textarea>
                    </div>
                    <hr id="contact_form_line"></hr>
                    <div>
                        <DatePicker
                        onChange={this.onChange}
                        value={this.state.date}
                        />
                    </div>
                    <button type="submit" className="contact_submit_btn">Submit</button>
                    
                </form>
                
            </div>
        );
    }
}
export default Form;
