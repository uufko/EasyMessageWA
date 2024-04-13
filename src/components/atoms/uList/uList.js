import { FlatList, Text, View } from "react-native"
import { Style } from "./style"

export const UList = ({item})=>{
    return(
        <View style={Style.viewStyle}>
            <Text style={Style.textStyle}>{item}</Text>
        </View>
    )
}