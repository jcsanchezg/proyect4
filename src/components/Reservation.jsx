import React, { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

function FormReservation() {
    const initialForm = {
    nombre: "",
    apellido: "",
    email: "",
    fecha: "",
    hora: "",
    personas: "",
    };

    const [formData, setFormData] = useState(initialForm);

    const createReservation = async () => {
    try {
        const coleccion = collection(db, "reservations");
        await addDoc(coleccion, formData);
        } catch (error) {
            alert("Something wrong couldn't save your Info, Please try again");
        }
    };
    const handleChange = (event) => {
        setFormData({
        ...formData,
        [event.target.name]: event.target.value,
        });
    };

    return (
        <React.Fragment>
            <form onSubmit={createReservation} className="mx-auto w-full max-w-[550px]">
                <div className="-mx-3 flex flex-wrap">
                <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                <label
                
                className="mb-3 block text-base font-medium text-[#07074D]" >
                First Name
                </label>
                <input
                type="text"
                name="Name"
                id="fName"
                placeholder="First Name"
                onChange={handleChange}
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6         text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1]        focus:shadow-md"
                />
                </div>
                </div>
                <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                    <label
                    
                    className="mb-3 block text-base font-medium text-[#07074D]" >
                    Last Name
                    </label>
                    <input
                    type="text"
                    name="Surname"
                    id="lName"
                    placeholder="Last Name"
                    onChange={handleChange}
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6         text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1]        focus:shadow-md"
                    />
                </div>
                </div>
                </div>
                <div className="mb-5">
                    <label
                    
                    className="mb-3 block text-base font-medium text-[#07074D]" >
                    Number of guest
                    </label>
                    <input
                    type="number"
                    name="guest"
                    id="guest"
                    placeholder="5"
                    min="1"
                    onChange={handleChange}
                    className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                </div>
                <div className="-mx-3 flex flex-wrap">
                <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                    <label
                    
                    className="mb-3 block text-base font-medium text-[#07074D]" >
                    Date
                    </label>
                    <input
                    type="date"
                    name="reservation date"
                    id="date"
                    onChange={handleChange}
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6         text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1]        focus:shadow-md"
                    />
                </div>
                </div>
                <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                    <label
                    
                    className="mb-3 block text-base font-medium text-[#07074D]"
                    >
                    Time
                    </label>
                    <input
                    type="time"
                    name="time"
                    id="time"
                    onChange={handleChange}
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6         text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1]        focus:shadow-md"
                    />
                </div>
                </div>
                </div>
                <div>
                <button
                className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
                // onClick={async () => {
                //     await createReservation();
                //     setForm(initialForm);
                //     alert('reservation created succesfuly')
                // }}
                type="submit"
                >
                Submit
                </button>
                </div>
            </form>
        </React.Fragment>
    );
}

export default FormReservation;