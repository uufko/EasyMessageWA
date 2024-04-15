import { View } from "react-native"
import { Style } from "./style"
import { UText } from "../../atoms/uText/uText"
import { UImage } from "../../atoms/uImage/uImage"
import { Images } from "../../../assets/images/images"

export const UHeader = ()=>{
    return(
        <View style={Style.viewStyle}>
            <UText/>
            <UImage source={Images.sendIcon}/>
        </View>
    )
}