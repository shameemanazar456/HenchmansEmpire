import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import NavBar from '../components/NavBar'
import { Button, TextField } from '@mui/material'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { registerGrievanceAPI } from '../../ApiService/allApi'
import { Navigate, useNavigate } from 'react-router-dom';


function GravienceForm() {
    //state to strore grievance deatils
    const [grievanceDetails, setGrivanceDetails] = useState({
        userName:'',
        email:'',
        complaint:''
    })

    const navigate = useNavigate()

    //state to do validation
    const [isUserName, setIsUserName] = useState(true)
    const [isEmail, setIsEmail] = useState(true)

    //function to validate input
    const validate = (e)=>{
        const {name, value }= e.target
        if(name == 'username'){
            setGrivanceDetails({...grievanceDetails,userName:value})
            if(!!value.match(/^[A-Za-z]*$/)){
                setIsUserName(true)
            }
            else{
                setIsUserName(false)
            }
        }
        else if(name == 'email'){
            setGrivanceDetails({...grievanceDetails,email:value})
            if(!!value.match(/^[a-zA-Z0-9._%±]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/)){
                setIsEmail(true)
            }
            else{
                setIsEmail(false)
            }
        }
        else{
            setGrivanceDetails({...grievanceDetails,complaint:value})
        }

    }
//function to save grivances
    const saveGrievance = async(e)=>{
        e.preventDefault()
        const {userName, email, complaint} = grievanceDetails
       if(isEmail && isUserName) {
        if(!userName || !email || !complaint){
            toast.info('Please Fill All The Details')
        }
        else{
            const result = await registerGrievanceAPI(grievanceDetails)
            //console.log(result);
            if(result.status == 200){
                toast.success('Complaint Registered Successfully. Action will be taken shortly')
                setGrivanceDetails({ userName:'',
                    email:'',
                    complaint:''})
                    setTimeout(() => {
                        navigate('/')
                    }, 2000);
            }
            else{
                console.log(result);
                
                toast.error(result.response.data)
            }
            
        }
        }
        else{
            toast.info('Please Fill All The Details')
        }

    }
    return (
        <>
            <NavBar />
            <div className='FormWrapper '>
                <Row className='d-flex align-items-center justify-content-center w-100'  >
                    <Col md={3}></Col>
                    <Col md={6} className='GrivanceForm px-md-5 py-5 rounded' style={{ background: '' }}>
                        <h3 className='text-center text-info mb-5'>Grievance Form</h3>
                        <div className='w-75 mb-4 rounded shadow p-2' style={{background:'white'}}>
                            <TextField id="filled-basic" name='username' label="UserName" variant="outlined" className='w-100 rounded' value={grievanceDetails.userName } onChange={(e)=>validate(e)} />
                        {!isUserName && <span className='text-danger'>*Inavlid Input(Only Accepts Alphabets)</span>}
                        </div>
                        <div className='w-75  rounded p-2' style={{background:'white'}}><TextField id="outlined-basic" name='email' label="Email" variant="outlined" value={grievanceDetails.email} className='w-100' onChange={(e)=>validate(e)} />
                        </div>
                        {!isEmail &&<span className='text-danger align-items-start w-75 mb-3'>*Invalid Input</span>}

                        <div className='w-75 mb-5 mt-3 rounded p-2' style={{background:'white'}} >  
                            <TextField
                            id="outlined-multiline-static"
                            label="Write Your Grievance Here"
                            placeholder="Grievance"
                            multiline
                            rows={4}
                            className='w-100'
                            value={grievanceDetails.complaint}
                            onChange={(e)=>validate(e)}
                        />
                        </div>
                        <div className='w-100 d-flex align-items-center justify-content-center'><Button variant="outlined" className='border border-danger text-danger' onClick={saveGrievance}>Submit Grievance</Button></div>
                    </Col>
                    <Col md={3}></Col>

                </Row>

            </div>
            <ToastContainer theme='colored'  position='top-center' autoClose={2000} />
        </>
    )
}

export default GravienceForm
