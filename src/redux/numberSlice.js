import { createSlice } from "@reduxjs/toolkit";

const NumberSlice = createSlice({
    name: "counter",
    initialState: {
        phoneNumber: "",
        phoneList: [],
        localNumber: "",
        theme: false
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
            if(state.phoneList.length==10){
                state.phoneList.pop()
            }
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
        },
        setTheme(state,data){
           state.theme = !data.payload
        }
    }
})

export const { setPhoneNumber, addPhoneList, setLocalNumber, refresh, storagePhoneList, storageLocalCode, deletePhoneList,setTheme } = NumberSlice.actions
export default NumberSlice