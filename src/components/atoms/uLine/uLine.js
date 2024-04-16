import { View } from "react-native"
import { Style } from "./style"
import { useSelector } from "react-redux"

export const ULine = ({height})=>{
    const {theme} = useSelector((state)=>state.counter)
    return(
        <View style={[Style.viewStyle,{height:height}]}></View>
    )
}