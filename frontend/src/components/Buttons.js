import classes from './Style.module.css'
import axios from 'axios';
import { useState } from 'react';
import crossBtn from '../asserts/crossBtn.svg'
import BtnList from './BtnList';
export default function Buttons({ data, onDelete }) {
    const [newData, setNewData] = useState([]);
    const [view, setView] = useState(false);
    
    const handleClickCount = async (id) => {
        const token = localStorage.getItem("token");
        const res = await axios.post(`http://localhost:4000/api/webhook/update-click`, { id }, {
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json"
            }
        });
        console.log('res::::', res);

    }
    return (
        <>
            <h2 className="text-center m-5">WEBHOOK URL </h2>
            <div className={classes.Container}>
                <div className={classes.btnContainer}>
                    {data.length ?
                        <div className={classes.btnDiv}>
                            {data && data.map((dta) => {
                                return (
                                    <div className={classes.directions} key={dta?._id}>
                                        <button onClick={
                                            () => {
                                                handleClickCount(dta._id);
                                                setView(true);

                                            }
                                        }
                                            className='btn btn-dark my-3' key={dta?._id}>{dta?.btnName} </button>


                                    </div>
                                )

                            })}
                        </div> : ""
                    }

                </div>
            </div>
        </>
    )
}
{/* <div className={classes.crossBtn} onClick={() => { handleDeleteBtn(dta._id) }}>
                                            <img src={crossBtn} />
                                        </div> */}