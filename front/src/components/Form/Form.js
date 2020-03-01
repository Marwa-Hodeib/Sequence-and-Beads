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
        /*For the Contact page we are passing 2 props from the contact page. 
        1- The product_id which is detected by the purchase funtion and stored in the state as product_id_purchase in order to display a form component with a subject selected purchase without any other option 
        2- The product_price which is a filter of the product table based on the product_id detected by the purchase function and then passing its value to the contact us and then to the state to be multiplied by the quantity that the user had selected and on submit the value of the amount is stored in the database in the order table */
        /* onNameChange functon will set the state of the client_name in order to save what the user entered */
        onNameChange(event)
        {
            this.setState({client_name:event.target.value})
        }
        /* onQuantityChange functon will set the state of the orders_quantity in order to save what the user entered */
        onQuantityChange(event)
        {
            this.setState({orders_quantity:event.target.value})
        }
        /* onAreaChange functon will set the state of the area in order to save what the user entered */
        onAreaChange(event)
        {
            this.setState({area:event.target.value})
        }
        /* onChange functon will set the state of the date in order to save the exact date when the user press the submit button */
        onChange = date => this.setState({ date })
        /* the product_id props passed to the form component by the contact page will be setted to the purchase_product_id in order to be used once the form will be submitted*/
        componentWillMount()
        {
            this.setState({purchase_product_id:this.props.product_id})
        }
        /*The handleSubmit function will fetch the data entered in the form component and pass it to the database in the order table
        the amount isn't stored in the state, instead the multiplication between the orders_quantity from the state and the product_price passed as props will be carried out in the url 
        since the state elements are objects so what we want as number should be parsed in order to meet the type requirement in the database
        if the order is submitted successfully, an alert window will appear to inform the user about the submittion 
        else an alert window will inform the user that his order is not submitted successfully
        */
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
                console.log(err);
                alert("\t\tYour order has not been submitted! \n Please refill your order with all the exact information.");
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
                        <input id="fname" type="text" placeholder="first name" className="contact_form_group_item" value={this.state.client_name} onChange={this.onNameChange.bind(this)}/>
                    </div>

                    <div className="contact_form_group">
                        <label htmlFor="lname" className="contact_form_group_item">Last Name</label>
                        <input id="lname" type="text" placeholder="last name" className="contact_form_group_item"/>
                    </div>

                    <div className="contact_form_group">
                        <label htmlFor="email" className="contact_form_group_item">Email</label>
                        <input id="email" type="email" aria-describedby="emailHelp" placeholder="abc@gmail.com"/>
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
