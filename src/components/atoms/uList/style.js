import { StyleSheet } from "react-native";
import { UserDevice } from "../../metarials/userDevice";

export const Style = StyleSheet.create({
    viewStyle:{
        margin:1,
        height:UserDevice.deviceHeight*.1,
        width:UserDevice.deviceWidht*.9,
    },
    textStyle:{
        height:UserDevice.deviceHeight*.1,
        width:UserDevice.deviceWidht*.9,
        fontSize:20,
        fontFamily:"bont",
        padding:20,
        color:"#f9f8fd",
        textAlign:"left",textAlignVertical:"center"
    },
})