import { View,Text, TouchableOpacity, Image } from "react-native"
import { Style } from "./style"
import { useSelector } from "react-redux"

export const UImage =({onPress,source,backgroundColor})=>{
    const {theme} = useSelector((state)=>state.counter)
    return(
        <TouchableOpacity onPress={onPress} 
        style={[Style.touchableStyle,{backgroundColor:backgroundColor}]}>
            <Image style={Style.imageStyle} source={source}/>
        </TouchableOpacity>
    )
}