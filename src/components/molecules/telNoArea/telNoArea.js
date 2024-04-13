import { View } from "react-native"
import UTextInput from "../../atoms/uTextInput/uTextInput"
import { UImage } from "../../atoms/uImage/uImage"
import { Style } from "./style"

export const TelNoArea =({onPress})=>{
    return(
        <View style ={Style.viewStyle}>
            <UTextInput/>
            <UImage onPress={onPress}/>
        </View>
    )
}