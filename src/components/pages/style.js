import { StyleSheet } from "react-native";
import { Colors } from "../metarials/colors";

export const Style = StyleSheet.create({
    viewStyle:{
        paddingTop:10,
        alignItems:"center",
        rowGap:5,flex:1,
        backgroundColor:Colors.backColor
    },
    lightViewStyle:{
        paddingTop:10,
        alignItems:"center",
        rowGap:5,flex:1,
        backgroundColor:Colors.lightBackColor
    }
})