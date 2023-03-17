import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";
import EmptyStatus from "../../common/Empty";
import "../../css/userList.css"
import { setSelectUnSelectUser } from "../../redux/reducer/userReducer";
import { AiOutlineCloseCircle } from "react-icons/ai";

const UserList = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { user } = useSelector((state) => state.user);
    const [userData, setUserData] = useState(user['userList']);


    useEffect(() => {
        setUserData(user['userList']);
    }, [setUserData, user]);

    //  this function use for slecte user and unSelect user
    const onSelectuser = useCallback((item) => {
        dispatch(setSelectUnSelectUser(item));
    }, [dispatch]);

    // this function use for serch username
    const onsearchUser = useCallback((e) => {
        if (Number(e.target.value)) {
            return;
        };
        let searchUser = user['userList'].filter((item) => {
            return item.full_name.toLowerCase().search(e.target.value.toLowerCase()) > -1
        });
        setUserData(searchUser);
    }, [setUserData]);

    return (
        <>
            <div className=" m-auto border border-1 mt-5 main" >
                <div className="d-flex text-align-center justify-content-between mx-3 my-3">
                    <div className="text-primary">
                        <b><h6 className="title">SELECT USERS</h6></b>
                    </div>
                    <div>
                        <b><AiOutlineCloseCircle className="fs-4 text-primary" /></b>
                    </div>
                </div>
                <div className="mx-3 d-flex my-3">
                    <div className="w-100">
                        <input type={'text'} className="form-control" placeholder="search..." onChange={(e) => {
                            onsearchUser(e)
                        }} />
                    </div>
                </div>
                <div className="mx-3">
                    {
                        userData.length === 0 && <EmptyStatus />
                    }
                </div>
                <div className="mx-3 overflow-auto" style={{ cursor: 'pointer', height: "28rem", }}>
                    {
                        userData.map((item, index) => {
                            return (
                                <>
                                    <div className="d-flex overflow-auto" key={index} style={{
                                        border: ' 1px solid #EEEEEE', padding: '10px', backgroundColor: item.isSelected ? '#C3FF99' : '',
                                    }} onClick={() => {
                                        onSelectuser(item)
                                    }}>
                                        {
                                            user.userAvatar.map((user) => {
                                                return user.id === item.id && <img src={user.avatar} alt="user avatar" style={{ width: '40px', borderRadius: '230px' }} />
                                            })
                                        }

                                        <div className="mx-3">
                                            {item.full_name}
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>

                <div className="d-flex text-align-center justify-content-end mx-2 my-3 ">
                    <div className="mx-1">
                        <button className="btn btn-light border border-1">Cancel</button>
                    </div>
                    <div>
                        <button className="btn btn-white text-white" style={{ backgroundColor: '#38E54D' }} onClick={() => {
                            navigate('selectedUser/')
                        }} >Select</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default UserList