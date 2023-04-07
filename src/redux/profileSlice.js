import { createSlice } from "@reduxjs/toolkit"

const intialState = {
    profile:{}
}
const ProfileSlice = createSlice({
    name: "profileInfo",
    intialState,
    reducers: {
        stateProfile(state, { payload }) {
            state.profile= payload 
        }
    }
})

export const profileAction = ProfileSlice.actions
export default ProfileSlice.reducer