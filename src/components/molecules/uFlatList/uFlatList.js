import { FlatList, Text, View } from "react-native"
import { UList } from "../../atoms/uList/uList"
import { Style } from "./style"
import { ULine } from "../../atoms/uLine/uLine"
import { UserDevice } from "../../metarials/userDevice"
import { useDispatch, useSelector } from "react-redux"
import { deletePhoneList } from "../../../redux/numberSlice"

export const UFlatList = ({ data }) => {
    const { phoneList } = useSelector((state) => state.counter)
    const dispatch = useDispatch()
    return (
        <View style={Style.viewStyle}>
            <FlatList
                data={phoneList}
                renderItem={({ item }) => {
                    return (
                        <View style={{ alignItems: "center", marginVertical:2 }}>
                            <ULine height={phoneList[0] == item ? 0 : UserDevice.deviceHeight*.000} />
                            <UList _phone={item._phone} onPressDelete={()=>dispatch(deletePhoneList(phoneList.indexOf(item)))}
                            _currentDay={item._day} _currentDayName={item._dayName} _currentHours={item._hour}
                            _currentMinute={item._minute} _currentMonth={item._month}
                            />
                        </View>
                    )
                }} />
        </View>
    )
}