import { FlatList, Text, View } from "react-native"
import { UList } from "../../atoms/uList/uList"
import { Style } from "./style"
import { ULine } from "../../atoms/uLine/uLine"

export const UFlatList = ({ data }) => {
    return (
        <View style={Style.viewStyle}>
            <FlatList
                data={data}
                renderItem={({ item }) => {
                    return (
                        <View style={{ justifyContent: "center", alignItems: "center" }}>
                            <ULine height={data[0] == item ? 0 : 1} />
                            <UList item={item} />
                            

                        </View>

                    )
                }} />
        </View>
    )
}