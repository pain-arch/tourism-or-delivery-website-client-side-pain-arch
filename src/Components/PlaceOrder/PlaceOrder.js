import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import './PlaceOrder.css';

const PlaceOrder = () => {
    const {id} = useParams();
    const { user } = useAuth();


    const [service, setService] = useState({});
    useEffect( () => {
        fetch(`https://howling-skeleton-52699.herokuapp.com/services/${id}`)
        .then(res => res.json() )
        .then(service => setService(service))
    },[]);


    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data =>{ 
        axios.post('https://howling-skeleton-52699.herokuapp.com/placed-order', data)
        .then(res =>{
            alert('Added Successfully');
            reset();
        })
    };
    return (
        <div className="login-body" style={{paddingTop:'100px',paddingBottom:"30px"}}>
            <Container className="bg-light p-3" style={{textAlign:"center"}}>
                <h3>Place Order of <span style={{color:"green"}}>{service.name}</span> </h3>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input className="mx-2 border-2 border-black p-2" type="text" value={user.displayName} placeholder="customer name" {...register("name", { required: true})} />
                    <input className="mx-2 border-2 border-black p-2" type="email" value={user.email} placeholder="email" {...register("email", { required: true})} />
                    <input className="mx-2 border-2 border-black p-2" value={service.name} placeholder="service" {...register("service", { required: true})} />
                    <div className="mt-2">
                        <input className="mx-2 border-2 border-black p-2" placeholder="Address" {...register("address", { required: true})} />
                        <input className="mx-2 border-2 border-black p-2" type="number" placeholder="Phone" {...register("phone", { required: true})} />
                    </div>
                    <div className="mt-2">
                        <input className="mx-2 btn btn-dark" type="submit" value="Place Order" />
                    </div>
                </form>
            </Container>
        </div>
    );
};

export default PlaceOrder;