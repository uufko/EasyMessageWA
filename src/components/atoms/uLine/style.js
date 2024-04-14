import { StyleSheet } from "react-native";
import { UserDevice } from "../../metarials/userDevice";

export const Style = StyleSheet.create({
    viewStyle:{
        backgroundColor:"white",
        height:UserDevice.deviceHeight*.001,
        width:UserDevice.deviceWidht*.8,
        opacity:.5
    }
})