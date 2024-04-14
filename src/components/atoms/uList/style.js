import { StyleSheet } from "react-native";
import { UserDevice } from "../../metarials/userDevice";

export const Style = StyleSheet.create({
    viewStyle:{
        margin:1,
        height:UserDevice.deviceHeight*.1,
        width:UserDevice.deviceWidht*.9,
        flexDirection:"row"
    },
    textStyle:{
        height:UserDevice.deviceHeight*.1,
        width:UserDevice.deviceWidht*.9,
        fontSize:20,
        fontFamily:"bont",
        padding:20,
        color:"#f9f8fd",
        textAlign:"left",textAlignVertical:"center"
    },
    dateTextStyle:{
        fontSize:12,
        fontFamily:"bont",
        padding:20,
        color:"#f9f8fd",
        textAlign:"left",textAlignVertical:"center",
        opacity:.7
    },
    imageView:{
        //backgroundColor:"bisque",
        flex:1, justifyContent:"center", alignItems:"center"
    },
    numberView:{
        //backgroundColor:"green",
        flex:5
    },
    dateView:{
        //backgroundColor:"aqua",
        flex:4,justifyContent:"space-around",alignItems:"center"
    },
    imageStyle:{
        height:UserDevice.deviceHeight*.03,
        width:UserDevice.deviceHeight*.03,
    }
})