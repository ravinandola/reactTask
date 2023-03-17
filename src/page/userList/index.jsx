import { Route, Routes } from "react-router-dom"
import SelectedUser from "./SelectedUser"
import UserList from "./UserList"

const User = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<UserList />} />
                <Route path="selectedUser/" element={<SelectedUser />} />
            </Routes>
        </>
    )
}
export default User