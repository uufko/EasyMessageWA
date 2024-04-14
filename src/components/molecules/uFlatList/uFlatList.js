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
                            <UList _phone={item._phone} 
                            _currentDay={item._day} _currentDayName={item._dayName} _currentHours={item._hour}
                            _currentMinute={item._minute} _currentMonth={item._month}
                            />
                            

                        </View>

                    )
                }} />
        </View>
    )
}