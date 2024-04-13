import { StyleSheet } from "react-native";
import { UserDevice } from "../../metarials/userDevice";

export const Style = StyleSheet.create({
    viewStyle:{
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"row",
        backgroundColor:"#171719",
        borderRadius:20,
        width:UserDevice.deviceWidht*.95,
    }
})