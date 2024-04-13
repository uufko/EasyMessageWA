import { createSlice } from "@reduxjs/toolkit";

 const NumberSlice = createSlice({
    name: "counter",
    initialState: {
        phoneNumber:"",
        phoneList:[]
    },
    reducers: {
        setPhoneNumber(state, data) {
            state.phoneNumber = data.payload
        },
        addPhoneList(state,data){
            state.phoneList.push(data.payload)
        }
    }
})

export const { setPhoneNumber,addPhoneList} = NumberSlice.actions
export default NumberSlice