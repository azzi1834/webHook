import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from 'react-modal';
export default function PopUpForm({ onSubmit }) {
    const [isShow, setShow] = useState(false);
    const [visible, setVisible] = useState(false);
    const [createForm, setCreateForm] = useState({
        webURL: '',
        content: '',
        btnName: '',
    });
    // create new form
    const createData = async (e) => {
        // e.preventDefault();
        //create data with post request
        const token = localStorage.getItem('token');
        const res = await axios.post("http://localhost:4000/api/webhook/create", createForm, {
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json"
            }
        }
        );
        //update state
        //clear form state
        setCreateForm({
            webURL: "",
            content: "",
            btnName: '',
        })
        setShow(true);
        onSubmit();

    }

    const updateCreateFormField = (e) => {
        const { name, value } = e.target;
        setCreateForm({
            ...createForm,
            [name]: value,
        })
    }


    return (
        <div className='container '>

            <div className='text-center my-5'>
                <button type="button" className="btn btn-primary" onClick={() => { setVisible(true) }}>Create webhook Button</button>
            </div>
            <Modal isOpen={visible} >
                <form onSubmit={(e) => {
                    e.preventDefault();
                    createData();
                    setVisible(false);
                }} >
                    <div className='container text-center'>
                        <h2>Create New WEBHOOK URL</h2>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="recipient-name" className="col-form-label"><b>webhook URL</b></label>
                        <input onChange={updateCreateFormField} value={createForm.webURL} type="url" className="form-control" name='webURL' id="recipient-name" placeholder="Enter webhook url" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="message-text" className="col-form-label"><b>Content</b></label>
                        <textarea onChange={updateCreateFormField} value={createForm.content} placeholder="Enter Content here..." name='content' className="form-control" id="message-text"></textarea>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="recipient-name" className="col-form-label"><b>Button Name</b></label>
                        <input onChange={updateCreateFormField} value={createForm.btnName} type="text" className="form-control" name='btnName' id="btnName" placeholder="Enter button name" />
                    </div>
                    <div className="modal-footer">
                        <button onClick={() => { setVisible(false) }} type="button" className="btn btn-secondary" >Close</button>
                        <button type="submit" className="btn btn-primary mx-3 my-3" >Save</button>
                    </div>
                </form>
            </Modal>


        </div>
    )
}
