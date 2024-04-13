import { View } from "react-native"
import { Style } from "./style"

export const ULine = ({height})=>{
    return(
        <View style={[Style.viewStyle,{height:height}]}></View>
    )
}