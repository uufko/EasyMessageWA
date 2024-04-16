import { StyleSheet } from "react-native";
import { UserDevice } from "../../metarials/userDevice";
import { Colors } from "../../metarials/colors";

export const Style = StyleSheet.create({
    viewStyle:{
        backgroundColor:Colors.textColor,
        height:UserDevice.deviceHeight*.001,
        width:UserDevice.deviceWidht*.8,
        opacity:.5
    },
    lightViewStyle:{
        backgroundColor:Colors.lightTextColor,
        height:UserDevice.deviceHeight*.001,
        width:UserDevice.deviceWidht*.8,
        opacity:.5
    },
    viewVerticalStyle:{
        backgroundColor:Colors.textColor,
        height:UserDevice.deviceHeight*.07,
        width:UserDevice.deviceWidht*.004,
        opacity:.5
    },
    lightViewVerticalStyle:{
        backgroundColor:Colors.lightTextColor,
        height:UserDevice.deviceHeight*.07,
        width:UserDevice.deviceWidht*.004,
        opacity:.5
    }
})