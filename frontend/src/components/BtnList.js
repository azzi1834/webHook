import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';
const BtnList = ({ data, onRefresh }) => {
    const handleDeleteBtn = async (_id) => {
        const token = localStorage.getItem("token");
        const res = await axios.delete(`http://localhost:4000/api/webhook/delete/${_id}`, {
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json"
            }
        });
        onRefresh();
    }
    const handleClickCount = async (id) => {
        const token = localStorage.getItem("token");
        const res = await axios.post(`http://localhost:4000/api/webhook/update-click`, { id }, {
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json"
            }
        });
        console.log('res::::', res);
        onRefresh();
    }
    return (
        <div className='container my-3'>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Button Name</th>
                        <th>Click Counts</th>
                        <th>Created At</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>

                    {data && data.map((dta) => {
                        return (

                            <tr>
                                <td style={{ cursor: "pointer" }} onClick={() => handleClickCount(dta._id)}><strong>{dta?.btnName}</strong></td>
                                <td>{dta?.clickCount}</td>
                                <td>{dta?.createdAt}</td>
                                <td><button className='btn btn-danger' onClick={() => { handleDeleteBtn(dta._id) }}>Delete</button></td>

                            </tr>
                        )

                    })}

                </tbody>
            </table>
        </div>
    )
}

export default BtnList
