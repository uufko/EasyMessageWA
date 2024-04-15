import { View,Text, TouchableOpacity, Image } from "react-native"
import { Style } from "./style"

export const UImage =({onPress,source,backgroundColor})=>{
    return(
        <TouchableOpacity onPress={onPress} style={[Style.touchableStyle,{backgroundColor:backgroundColor}]}>
            <Image style={Style.imageStyle} source={source}/>
        </TouchableOpacity>
    )
}