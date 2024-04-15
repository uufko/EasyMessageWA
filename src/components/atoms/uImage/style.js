import { StyleSheet } from "react-native";
import { UserDevice } from "../../metarials/userDevice";
import { Colors } from "../../metarials/colors";

export const Style = StyleSheet.create({
    imageStyle:{
        resizeMode:"contain", 
        height:UserDevice.deviceHeight*.03,
        width:UserDevice.deviceWidht*.1,
    },
    touchableStyle:{
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:Colors.imageColor,
        height:UserDevice.deviceHeight*.06,
        width:UserDevice.deviceHeight*.06,
        borderRadius:UserDevice.deviceHeight*.06/2,
    }
})