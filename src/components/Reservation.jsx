import React, { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

function FormReservation() {
    const initialForm = {
    name: '',
    surname: '',
    guest:'',
    resdate: ''
    };

    const [formData, setFormData] = useState(initialForm);

    const createReservation = async (event) => {
        event.preventDefault();
    try {
        const coleccion = collection(db, "reservations");
        await addDoc(coleccion, formData);
        console.log('form sent ',formData);
        } catch (error) {
            alert("Something wrong couldn't save your Info, Please try again");
        }
        setFormData('');
    };
    const handleChange = (event) => {
        setFormData({...formData,
        [event.target.name]: event.target.value,
        });
    };

    return (
        <React.Fragment>
            <form onSubmit={createReservation} className="mx-auto w-full max-w-[550px]">
                <h1 className=" text-center mb-3">Please Fill this info to book a table</h1>
                <fieldset className="-mx-3 flex flex-wrap">
                    <div className="w-full px-3 sm:w-1/2">
                        <div className="mb-5">
                            <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="First Name"
                            onChange={handleChange}
                            value={formData.name}
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3  px-6 text-base font-medium text-[#6B7280] outline-none   focus:border-[#6A64F1] focus:shadow-md" />
                        </div>
                    </div>
                    <div className="w-full px-3 sm:w-1/2">
                        <div className="mb-5">
                            <input
                            type="text"
                            name="surname"
                            id="surname"
                            placeholder="Last Name"
                            onChange={handleChange}
                            value={formData.surname}
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                        </div>
                    </div>
                </fieldset>
                <div className="mb-5">
                    <input
                    type="number"
                    id="guest"
                    name="guest"
                    placeholder="Number of guest"
                    min="1"
                    onChange={handleChange}
                    value={formData.guest}
                    className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                </div>
                <fieldset className="-mx-3 flex flex-wrap">
                        <div className="w-full px-3 sm:w-1/2 mb-5">
                            <label
                            className="mb-3 block text-base font-medium text[#07074D]"> Choose when you visit us! </label>
                            <input
                            type="datetime-local"
                            id="resdate"
                            name="resdate"
                            onChange={handleChange}
                            value={formData.resdate}
                            className="w-full rounded-md border border[#e0e0e0]    bg-white py-3 px-6 text-basefont-medium text-    [#6B7280] outline-none focus:border-[#6A64F1]  focus:shadow-md" />
                        </div>
                </fieldset>
                <button
                className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
                type="submit">Submit</button>
            </form>
        </React.Fragment>
    );
}

export default FormReservation;