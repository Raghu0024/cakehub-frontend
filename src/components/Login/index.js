import React,{Component} from 'react';
import {MDBContainer, MDBCol, MDBRow, MDBBtn, MDBIcon, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';
import Header from '../Header'

class Login extends Component {
    state={
        username:'',
        password:'',
        token:'',
        isLogedIn:true,
    }

    username=(event)=>this.setState({username:event.target.value})

    password=(event)=>this.setState({password:event.target.value})

    login = async () => {
        const {username,password}=this.state
        try {
            const response = await fetch('http://127.0.0.1:8000/api/login/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: username,
                    password: password,
                }),
            });
            if (response.ok) {
                const data = await response.json();
                const authToken = data.token;
                // Now you have the authentication token for further requests
                this.setState({token:authToken,isLogedIn:false})
            } else {
                console.error('Login failed:', response.statusText);
            }
        } catch (error) {
            console.error('An error occurred:', error);
        }
    };

    render(){
        const {token,isLogedIn}=this.state
        console.log(token)
    if(isLogedIn){
    return (
        <MDBContainer fluid className="p-3 my-5 h-custom">

        <MDBRow>

            <MDBCol col='10' md='6'>
            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" class="img-fluid" alt="Sample" />
            </MDBCol>

            <MDBCol col='4' md='6'>

            <div className="d-flex flex-row align-items-center justify-content-center">

                <p className="lead fw-normal mb-0 me-3">Sign in with</p>

                <MDBBtn floating size='md' tag='a' className='me-2'>
                <MDBIcon fab icon='facebook-f' />
                </MDBBtn>

                <MDBBtn floating size='md' tag='a'  className='me-2'>
                <MDBIcon fab icon='twitter' />
                </MDBBtn>

                <MDBBtn floating size='md' tag='a'  className='me-2'>
                <MDBIcon fab icon='linkedin-in' />
                </MDBBtn>

            </div>

            <div className="divider d-flex align-items-center my-4">
                <p className="text-center fw-bold mx-3 mb-0">Or</p>
            </div>

            <MDBInput wrapperClass='mb-4' onChange={this.username} label='Email address' id='formControlLg' type='email' size="lg"/>
            <MDBInput wrapperClass='mb-4' onChange={this.password} label='Password' id='formControlLg' type='password' size="lg"/>

            <div className="d-flex justify-content-between mb-4">
                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
                <a href="!#">Forgot password?</a>
            </div>

            <div className='text-center text-md-start mt-4 pt-2'>
                <MDBBtn onClick={this.login} className="mb-0 px-5" size='lg'>Login</MDBBtn>
                <p className="small fw-bold mt-2 pt-1 mb-2">Don't have an account? <a href="#!" className="link-danger">Register</a></p>
            </div>

            </MDBCol>

        </MDBRow>

        <div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">

            <div className="text-white mb-3 mb-md-0">
            Copyright © 2020. All rights reserved.
            </div>

            <div>

            <MDBBtn tag='a' color='none' className='mx-3' style={{ color: 'white' }}>
                <MDBIcon fab icon='facebook-f' size="md"/>
            </MDBBtn>

            <MDBBtn tag='a' color='none' className='mx-3' style={{ color: 'white'  }}>
                <MDBIcon fab icon='twitter' size="md"/>
            </MDBBtn>

            <MDBBtn tag='a' color='none' className='mx-3' style={{ color: 'white'  }}>
                <MDBIcon fab icon='google' size="md"/>
            </MDBBtn>

            <MDBBtn tag='a' color='none' className='mx-3' style={{ color: 'white'  }}>
                <MDBIcon fab icon='linkedin-in' size="md"/>
            </MDBBtn>

            </div>

        </div>

        </MDBContainer>
    );
}else{
    return(<div><Header token={token} /></div>)
}
    }
}

export default Login;