import React from 'react';
import axios from 'axios';
import './AddService';
import { useForm } from "react-hook-form";

const AddService = () => {

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {

        axios.post('https://howling-skeleton-52699.herokuapp.com/services', data)
        .then(res =>{
            alert('Added Successfully');
            reset();
        })
    }

    return (
        <div className="text-center" style={{marginTop:"80px", marginBottom:"50px"}}>
            <div className="">
                <h1 className="text-success">Add Services</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input className="mx-2 border-2 border-black p-2" placeholder="name" {...register("name")} />
                    <input className="mx-2 border-2 border-black p-2" placeholder="price" type="number" {...register("price")} />
                    <input className="mx-2 border-2 border-black p-2" placeholder="image" {...register("img")} />
                    <div className="mt-2">
                        <textarea className="mx-2 border-2 border-black p-5" type="text" placeholder="description" {...register("description")} />
                        <input className="mx-2 btn btn-outline-dark" type="submit" />
                    </div>
                </form>
            </div>    
        </div>
    );
};

export default AddService;