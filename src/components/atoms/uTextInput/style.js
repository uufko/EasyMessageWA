import { StyleSheet } from "react-native";
import { UserDevice } from "../../metarials/userDevice";

export const Style = StyleSheet.create({
    viewStyle:{
        justifyContent:"center",
        alignItems:"center",
    },
    textInputStyle:{
        height:UserDevice.deviceHeight*.1,
        width:UserDevice.deviceWidht*.8,
        fontSize:30,
        fontFamily:"bont",
        padding:10, color:"white"
    }
})