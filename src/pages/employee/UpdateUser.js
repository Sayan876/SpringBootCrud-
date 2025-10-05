import "./UpdateUser.css"
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";

import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const UpdateUser = () =>{

    const {id} = useParams();

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
            name : "",
            email: "",
            phone: "",
            department: ""
        });
        const handleInputChange = (event)=>{
            const {name,value} = event.target;
            setFormData({
                ...formData,[name]:value,
            })
        }

        useEffect(()=>{
            const fetchEmployee = async ()=>{
                try {
                    const response = await fetch(`http://localhost:8080/api/employee/${id}`);
                    const data = await response.json();
                    setFormData(data);
                } catch (error) {
                    console.log("Error while fetching for updatation", error.message);
                }
            }

            fetchEmployee();

        },[id])

        const handleUpdate = async (e) =>{
            e.preventDefault();
            try {
                const response = await fetch(`http://localhost:8080/api/employee/${id}`,
                    {
                        method:"PATCH",

                        headers:{
                            "Content-Type":"application/json",
                        },
                        body:JSON.stringify(formData),
                    }
                );
                const data = await response.json();
                console.log("User updated", data);
                navigate(`/`)
            } catch (error) {
                console.log("Error while updating", error.message);
            }
        }


    return (
        <div className="center-form">
        <h1>Update Employee</h1>
        <Form onSubmit={handleUpdate}>

            <Form.Group controlId="formBasicName">

                <Form.Control 
                type="text"
                name="name"
                placeholder="enter name"
                value={formData.name}
                onChange={handleInputChange}
                />


            </Form.Group>

            <Form.Group controlId="formBasicName">

                <Form.Control 
                type="email"
                name="email"
                placeholder="enter email"
                value={formData.email}
                onChange={handleInputChange}
                />


            </Form.Group>

            <Form.Group controlId="formBasicName">

                <Form.Control 
                type="text"
                name="phone"
                placeholder="enter phone"
                value={formData.phone}
                onChange={handleInputChange}
                />


            </Form.Group>

            <Form.Group controlId="formBasicName">

                <Form.Control 
                type="text"
                name="department"
                placeholder="enter department"
                value={formData.department}
                onChange={handleInputChange}
                />


            </Form.Group>

            <Button variant="primary" type="submit" class="w-100">Edit Employee</Button>

           
        </Form>

    </div>
    )
}

export default UpdateUser