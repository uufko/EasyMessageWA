import { StyleSheet } from "react-native";
import { UserDevice } from "../../metarials/userDevice";

export const Style = StyleSheet.create({
    imageStyle:{
        resizeMode:"contain", 
        height:UserDevice.deviceHeight*.03,
        width:UserDevice.deviceWidht*.1,
    },
    touchableStyle:{
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#2ec26a",
        height:UserDevice.deviceHeight*.07,
        width:UserDevice.deviceHeight*.07,
        borderRadius:UserDevice.deviceHeight*.07/2,
    }
})