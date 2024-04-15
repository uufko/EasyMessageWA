import { StyleSheet } from "react-native";
import { UserDevice } from "../../metarials/userDevice";
import { Colors } from "../../metarials/colors";

export const Style = StyleSheet.create({
    viewStyle:{
        paddingLeft:10,
        justifyContent:"space-around",
        alignItems:"center",
        width:UserDevice.deviceWidht*.95,
        height:UserDevice.deviceHeight*.08, 
        flexDirection:"row",
    },
})