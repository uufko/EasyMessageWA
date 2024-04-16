import { View } from "react-native"
import { Style } from "./style"
import { useSelector } from "react-redux"

export const ULineVertical = ()=>{
    const {theme} = useSelector((state)=>state.counter)
    return(
        <View style={theme == true ? Style.viewVerticalStyle: Style.lightViewVerticalStyle}></View>
    )
}