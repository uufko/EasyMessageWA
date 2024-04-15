import { Text, View } from "react-native"
import { Style } from "./style"

export const UText =()=>{
    return(
        <View style={Style.viewStyle}>
            <Text style={Style.textStyle}>WhatsApp Direkt Mesaj</Text>
        </View>
    )
}