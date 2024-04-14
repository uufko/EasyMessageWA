import { createSlice } from "@reduxjs/toolkit";

const NumberSlice = createSlice({
    name: "counter",
    initialState: {
        phoneNumber: "",
        phoneList: [],
    },
    reducers: {
        setPhoneNumber(state, data) {
            state.phoneNumber = data.payload
        },
        addPhoneList(state, data) {
            if (data.payload._phone.length == 10) {
                data.payload._phone = `0${data.payload._phone}`
                state.phoneList.push(data.payload)
            } else if (data.payload._phone.length == 11) {
                state.phoneList.push(data.payload)
                }
            
        }
    }
})

export const { setPhoneNumber, addPhoneList } = NumberSlice.actions
export default NumberSlice