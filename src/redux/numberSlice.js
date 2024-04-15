import { createSlice } from "@reduxjs/toolkit";

const NumberSlice = createSlice({
    name: "counter",
    initialState: {
        phoneNumber: "",
        phoneList: [],
        localNumber: "",
        theme: true
    },
    reducers: {
        setPhoneNumber(state, data) {
            state.phoneNumber = data.payload
        },
        refresh(state, data) {
            state.phoneNumber = ""
        },
        setLocalNumber(state, data) {
            if (data.payload[0] == "+") {
                state.localNumber = data.payload
            } else {
                state.localNumber = `+${data.payload}`
            }
        },
        addPhoneList(state, data) {
            state.phoneList.unshift(data.payload)
        },
        storagePhoneList(state, data) {
            data.payload == null ? null : state.phoneList = data.payload
        },
        storageLocalCode(state, data) {
            if (data.payload == null) {
                state.localNumber = "+90"
            } else { state.localNumber = data.payload }
        },
        deletePhoneList(state, data) {
            state.phoneList.splice(data.payload, 1)
        }
    }
})

export const { setPhoneNumber, addPhoneList, setLocalNumber, refresh, storagePhoneList, storageLocalCode, deletePhoneList } = NumberSlice.actions
export default NumberSlice