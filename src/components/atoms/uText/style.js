import { StyleSheet } from "react-native";
import { UserDevice } from "../../metarials/userDevice";
import { Colors } from "../../metarials/colors";

export const Style = StyleSheet.create({
    viewStyle:{
        justifyContent:"center",
    },
    textStyle:{
        fontSize:UserDevice.deviceHeight*.03,
        color:Colors.textColor,
        fontFamily:"bont"
    }
})