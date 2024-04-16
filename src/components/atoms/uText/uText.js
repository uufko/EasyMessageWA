import { Text, View } from "react-native"
import { Style } from "./style"
import { useSelector } from "react-redux"

export const UText =()=>{
    const {theme} = useSelector((state)=>state.counter)
    return(
        <View style={Style.viewStyle}>
            <Text style={theme == true ? Style.textStyle: Style.lightTextStyle}>WhatsApp Direkt Mesaj</Text>
        </View>
    )
}