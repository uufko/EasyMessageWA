import { StyleSheet } from "react-native";
import { UserDevice } from "../../metarials/userDevice";
import { Colors } from "../../metarials/colors";

export const Style = StyleSheet.create({
    viewStyle:{
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center"
    },
    textInputStyle:{
        height:UserDevice.deviceHeight*.1,
        width:UserDevice.deviceWidht*.45,
        fontSize:UserDevice.deviceHeight*.03,
        fontFamily:"bont",
        padding:10, color:Colors.textColor
    },
    localTextStyle:{
        height:UserDevice.deviceHeight*.1,
        width:UserDevice.deviceWidht*.15,
        fontSize:UserDevice.deviceHeight*.025,
        fontFamily:"bont",
        padding:1, color:Colors.textColor,textAlign:"center"
    }
})