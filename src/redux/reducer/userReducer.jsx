import { createSlice } from '@reduxjs/toolkit';
import userAvatar from "../../userAvatar.json";
import userList from "../../userList.json";

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: {
            userList: userList.map((item) => { return { ...item, isSelected: false } }),
            userAvatar: userAvatar
        },
    },
    reducers: {
        setSelectUnSelectUser: (state, action) => {
            let userObj = action.payload;
            let target = state.user.userList.map((item, index) => {
                if (userObj.isSelected === false && item.id === userObj.id) {
                    item.isSelected = true;
                } else if (userObj.isSelected === true && item.id === userObj.id) {
                    item.isSelected = false;
                }
                return item;
            })
            state.user.userList = target;
        },

    }

})

export const { setSelectUnSelectUser, } = userSlice.actions

