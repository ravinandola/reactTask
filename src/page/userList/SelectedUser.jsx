import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import EmptyStatus from "../../common/Empty";
import { AiOutlineCloseCircle } from "react-icons/ai";

const SelectedUser = () => {
    const { user } = useSelector((state) => state.user);
    const navigate = useNavigate();

    const [selectedUser] = useState(user['userList'].filter((item) => {
        return item.isSelected === true;
    }))

    return (
        <>
            <div className="m-auto border border-1 mt-5" style={{ width: "35rem" }} >
                <div className="d-flex text-align-center justify-content-between mx-3 my-3">
                    <div className="text-primary">
                        <b><h6 style={{ fontWeight: 'bold' }}>SELECTED USES</h6></b>
                    </div>
                    <b><AiOutlineCloseCircle className="fs-4 text-primary" /></b>
                </div>
                <div className="mx-3">
                    {
                        selectedUser.length === 0 && <EmptyStatus />
                    }
                </div>
                <div className="mx-3 overflow-auto" style={{ cursor: 'pointer', height: "28rem", }}>
                    {
                        selectedUser.map((item, index) => {
                            return (
                                <div className="d-flex" key={index} style={{
                                    border: '1px solid #EEEEEE', padding: '10px',
                                }}>
                                    <div>
                                        {
                                            user.userAvatar.map((user) => {
                                                return (
                                                    user.id === item.id && <img src={user.avatar} alt="user avatar" style={{ width: '40px', borderRadius: '230px' }} />
                                                )
                                            })
                                        }
                                    </div>
                                    <div className="mx-3">
                                        {item.full_name}
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
                <div className="d-flex text-align-center justify-content-end mx-3 my-2">
                    <div className="mx-1">
                        <button className="btn btn-light border border-1" onClick={() => {
                            navigate('/')
                        }}>Back</button>
                    </div>
                </div>

            </div>
        </>
    )
}
export default SelectedUser