import { View, TextInput, Button, Linking } from "react-native"
import { Style } from "./style"
import { useDispatch, useSelector } from "react-redux";
import { setPhoneNumber } from "../../../redux/numberSlice";

const UTextInput =()=>{
    const {phoneNumber} = useSelector((state)=>state.counter)
    const dispatch = useDispatch()
    return(
        <View style={Style.viewStyle}>
            <TextInput style={Style.textInputStyle}  
            keyboardType="numeric"
            placeholder="Tel no"
            placeholderTextColor={"#f9f8fd"}
            onChangeText={(e)=>{dispatch(setPhoneNumber(e))}} 
            maxLength={13}
            value={phoneNumber}
            />
        </View>
    )
}

export default UTextInput