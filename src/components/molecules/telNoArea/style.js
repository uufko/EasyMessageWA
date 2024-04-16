import { StyleSheet } from "react-native";
import { UserDevice } from "../../metarials/userDevice";
import { Colors } from "../../metarials/colors";

export const Style = StyleSheet.create({
    viewStyle:{
        justifyContent:"space-around",
        alignItems:"center",
        flexDirection:"row",
        backgroundColor:Colors.listColor,
        borderRadius:20,
        height:UserDevice.deviceHeight*.1,
        width:UserDevice.deviceWidht*.95,
    },
    lightViewStyle:{
        justifyContent:"space-around",
        alignItems:"center",
        flexDirection:"row",
        backgroundColor:Colors.lightListColor,
        borderRadius:20,
        height:UserDevice.deviceHeight*.1,
        width:UserDevice.deviceWidht*.95,
    }
})