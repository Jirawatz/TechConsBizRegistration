import React, {Component} from 'react';

class signUpForm extends Component {
    constructor(props){
        super(props);
        
        this.state ={
            fields: {},
            errors: {}
        };
        
    }
    
    handleValidation(){
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;
        
        //Validating Name
        if(!fields["firstname"]){
            formIsValid = false;
            errors["firstname"] ="Cannot be empty";
        }
        
        if(typeof fields["firstname"] !== "undefined"){
           if(!fields["firstname"].match(/^[a-zA-Z]+$/)){
              formIsValid = false;
              errors["firstname"] = "Only letters";
           }        
        }
        
        //Validating Lastname
        if(!fields["lastname"]){
            formIsValid = false;
            errors["lastname"] ="Cannot be empty";
        }
        
        if(typeof fields["lastname"] !== "undefined"){
           if(!fields["lastname"].match(/^[a-zA-Z]+$/)){
              formIsValid = false;
              errors["lastname"] = "Only letters";
           }        
        }
        
        //Validating Company Name
            if(!fields["companyname"]){
            formIsValid = false;
            errors["companyname"] ="Cannot be empty";
        }
        
        //Validating Email
        if(!fields["email"]){
           formIsValid = false;
           errors["email"] = "Cannot be empty";
        }

        if(typeof fields["email"] !== "undefined"){
           let lastAtPos = fields["email"].lastIndexOf('@');
           let lastDotPos = fields["email"].lastIndexOf('.');

           if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["email"].indexOf('@@') === -1 && lastDotPos > 2 && (fields["email"].length - lastDotPos) > 2)) {
              formIsValid = false;
              errors["email"] = "Email is not valid";
            }
            
        //Validate Phone Number
            if(!fields["phonenumber"]){
                formIsValid =false;
                errors["phonenumber"] = "Cannot be empty";
            }
            
            if(typeof fields["phonenumber"] !== "undefined"){
                if(fields["phonenumber"].match(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/)){
                    formIsValid = true;
                } else {
                      if(!fields["phonenumber"].match(/^\(?([0-2]{2})\)?[-. ]?([0-9]{7})$/)){
                          formIsValid =false;
                            errors["phonenumber"] = "Please enter a valid phonenumber";
                      }
                }
            }
            
        //Validate Number of Employees
             if(!fields["numberOfEmployees"]){
            formIsValid = false;
            errors["numberOfEmployees"] ="Please select one";
            }
       }  
        this.setState({errors: errors});
       return formIsValid; 
    }

   contactSubmit(e){
        e.preventDefault();
        if(this.handleValidation()){
           alert("Form submitted");
        }else{
           alert("Form has errors.")
        }

    }

    handleChange(field, e){    
        let fields = this.state.fields;
        fields[field] = e.target.value;        
        this.setState({fields});
    }


render() {
        return (
<div className="FormCenter">
            
    <form className="FormFields" onSubmit= {this.contactSubmit.bind(this)}>
        <div className="FormField">
            <label 
                className="FormField__Label" 
            htmlFor="firstname">ชื่อจริง*
            </label>
            
            <input 
                type="text" 
                id="firstname" 
                className="FormField__Input" 
                placeholder="กรุณา กรอกชื่อจริงในช่องนี้" 
                name="firstname" 
                onChange={this.handleChange.bind(this, "firstname")} 
                value={this.state.fields["firstname"]}
            />
                    <p className="errors"><span style={{color: "smokewhite"}}>{this.state.errors["firstname"]}</span></p>
        </div>
        <div className="FormField">
            <label 
                className="FormField__Label" 
                htmlFor="lastname">นามสกุล*
            </label>
            <input
                type="text" 
                id="lastname" 
                className="FormField__Input" 
                placeholder="กรุณา กรอกนามสกุลในช่องนี้" 
                name="lastname" 
                onChange={this.handleChange.bind(this, "lastname")} 
                value={this.state.fields["lastname"]}
            />
                    <p className="errors"><span style={{color: "smokewhite"}}>{this.state.errors["lastname"]}</span></p>
        </div>
        <div className="FormField">
            <label 
                className="FormField__Label" 
                htmlFor="companyname">ชื่อบริษัท*
            </label>
            <input 
                type="text" 
                id="companyname" 
                className="FormField__Input" 
                placeholder="กรุณา กรอกชื่อบริษัทในช่องนี้" 
                name="companyname"
                onChange={this.handleChange.bind(this, "companyname")} 
                value={this.state.fields["companyname"]}
                />
                     <p className="errors"><span style={{color: "smokewhite"}}>{this.state.errors["companyname"]}</span></p>
        </div>
         <div className="FormField">
            <label 
                className="FormField__Label" 
                htmlFor="email">อีเมล์*
            </label>
            <input 
                type="text" 
                id="email"
                className="FormField__Input" 
                placeholder="กรุณา กรอกอีเมล์ในช่องนี้ (e.g. johndoe@example.com)" 
                name="email" 
                onChange={this.handleChange.bind(this, "email")} 
                value={this.state.fields["email"]}
            />
                    <p className="errors"><span style={{color: "smokewhite"}}>{this.state.errors["email"]}</span></p>
        </div>
        <div className="FormField">
            <label 
                className="FormField__Label" 
                htmlFor="phonenumber">เบอร์โทรศัพท์*
            </label>
            <input
                type="tel"
                country="TH"
                className="FormField__Input" 
                id="phonenumber" 
                placeholder="กรุณา กรอกเบอร์โทรติดต่อในช่องนี้ (e.g. 08XXXXXXXX or 02XXXXXXX)" 
                name="phonenumber"
                onChange={this.handleChange.bind(this, "phonenumber")} 
                value={this.state.fields["phonenumber"]}
            />
                     <p className="errors"><span style={{color: "smokewhite"}}>{this.state.errors["phonenumber"]}</span></p>
        </div>
        <div className="FormField">
            <label
                className="FormField__Label"
                htmlFor="numberOfEmployees">จํานวนบุคลากร*
            </label>
            <select 
                className="FormField__DropDownList" 
                id="numberOfEmployees" 
                name='numberOfEmployees'
                onChange={this.handleChange.bind(this, "numberOfEmployees")} 
                value={this.state.fields["numberOfEmployees"]}
                >
                    <option hidden value="">เลือกจำนวนบุคลากร</option>
                    <option value="less than 50">น้อยกว่า 50 คน</option>
                    <option value="between 51 and 150">51 - 150 คน</option>
                    <option value="more than 150">มากกว่า 150</option>
            </select>
                    <p className="errors"><span style={{color: "smokewhite"}}>{this.state.errors["numberOfEmployees"]}</span></p>
        <div 
            className="FormFields">
            <button 
                className="FormField__Button mr-20"
                id="submit"
                value="Submit">
                    ลงทะเบียน
            </button>
        </div>
        </div>
    </form>
</div>
        );
    }
}


export default signUpForm;
   