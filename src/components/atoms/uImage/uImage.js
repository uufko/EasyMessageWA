import { View,Text, TouchableOpacity, Image } from "react-native"
import { Images } from "../../../assets/images/images"
import { Style } from "./style"

export const UImage =({onPress})=>{
    return(
        <TouchableOpacity onPress={onPress} style={Style.touchableStyle}>
            <Image style={Style.imageStyle} source={Images.sendIcon}/>
        </TouchableOpacity>
    )
}