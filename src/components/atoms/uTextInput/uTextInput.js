import { View, TextInput, Button, Linking } from "react-native"
import { Style } from "./style"
import { useDispatch, useSelector } from "react-redux";
import { setLocalNumber, setPhoneNumber } from "../../../redux/numberSlice";
import { ULineVertical } from "../uLine/uLineVertical";
import { Colors } from "../../metarials/colors";

const UTextInput =()=>{
    const {phoneNumber,localNumber,theme} = useSelector((state)=>state.counter)
    const dispatch = useDispatch()
    return(
        <View style={Style.viewStyle}>
            <TextInput style={theme == true ? Style.localTextStyle: Style.lightLocalTextStyle}
            keyboardType="numeric"
            placeholderTextColor={theme == true ? Colors.textColor: Colors.lightTextColor}
            onChangeText={(e)=>{dispatch(setLocalNumber(e))}} 
            maxLength={4}
            value={localNumber}/>
            <ULineVertical/>
            <TextInput style={theme == true ? Style.textInputStyle: Style.lightTextInputStyle}  
            keyboardType="numeric"
            placeholder="Tel no"
            placeholderTextColor={theme == true ? Colors.textColor: Colors.lightTextColor}
            onChangeText={(e)=>{dispatch(setPhoneNumber(e))}} 
            maxLength={10}
            value={phoneNumber}
            />
        </View>
    )
}

export default UTextInput