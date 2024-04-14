import { Linking, View, Text } from "react-native"
import { TelNoArea } from "../molecules/telNoArea/telNoArea"
import { Style } from "./style"
import { UFlatList } from "../molecules/uFlatList/uFlatList"
import { useSelector, useDispatch } from "react-redux"
import { addControlPhoneList, addPhoneList } from "../../redux/numberSlice"
import { Dates } from "../metarials/dates"

export const MainPage = () => {
    const { phoneNumber, phoneList } = useSelector((state) => state.counter)
    const dispatch = useDispatch()

    const currentDay = new Date().getDate()
    const currentMonth = new Date().getMonth()
    const currentHours = new Date().getHours()
    const currentMinute = new Date().getMinutes()
    const currentDayName = new Date().getDay()

    return (
        <View style={Style.viewStyle}>
            <TelNoArea onPress={() => {
                if (phoneNumber.length == 10) {
                    Linking.openURL(`https://wa.me/+90${phoneNumber}`)
                } else if (phoneNumber.length == 11) {
                    Linking.openURL(`https://wa.me/+9${phoneNumber}`)
                }
                dispatch(addPhoneList({
                    _phone: phoneNumber,
                    _day: currentDay,
                    _month: currentMonth,
                    _dayName: currentDayName,
                    _hour: currentHours,
                    _minute: currentMinute
                }))
            }} />
            <UFlatList data={phoneList} />
        </View>

    )
}