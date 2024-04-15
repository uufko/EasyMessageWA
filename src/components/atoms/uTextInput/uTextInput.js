import { View, TextInput, Button, Linking } from "react-native"
import { Style } from "./style"
import { useDispatch, useSelector } from "react-redux";
import { setLocalNumber, setPhoneNumber } from "../../../redux/numberSlice";
import { ULineVertical } from "../uLine/uLineVertical";
import { Colors } from "../../metarials/colors";

const UTextInput =()=>{
    const {phoneNumber,localNumber} = useSelector((state)=>state.counter)
    const dispatch = useDispatch()
    return(
        <View style={Style.viewStyle}>
            <TextInput style={Style.localTextStyle}
            keyboardType="numeric"
            placeholderTextColor={Colors.textColor}
            onChangeText={(e)=>{dispatch(setLocalNumber(e))}} 
            maxLength={4}
            value={localNumber}/>
            <ULineVertical/>
            <TextInput style={Style.textInputStyle}  
            keyboardType="numeric"
            placeholder="Tel no"
            placeholderTextColor={Colors.textColor}
            onChangeText={(e)=>{dispatch(setPhoneNumber(e))}} 
            maxLength={10}
            value={phoneNumber}
            />
        </View>
    )
}

export default UTextInput