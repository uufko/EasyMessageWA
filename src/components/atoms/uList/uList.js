import { FlatList, Image, Text, TouchableOpacity, View } from "react-native"
import { Style } from "./style"
import { Images } from "../../../assets/images/images"
import { Dates } from "../../metarials/dates"
import { useState } from "react"
import { useSelector } from "react-redux"

export const UList = ({ onPressWhatsapp,_phone, _currentDay, _currentDayName, _currentHours, _currentMinute, _currentMonth,onPressDelete }) => {

    const [showButton, setShowButton] = useState(true)
    const {theme} = useSelector ((state) =>state.counter)

    return (
        <View style={theme == true ? Style.viewStyle:Style.lightViewStyle}>
            {showButton==true ? <TouchableOpacity onPress={onPressWhatsapp} style={Style.imageView}>
                <Image style={Style.imageStyle} source={Images.whatsappIcon} /></TouchableOpacity>:
                <TouchableOpacity style={Style.imageView} onPress={onPressDelete}>
                <Image style={Style.imageStyle} source={Images.deleteIcon} /></TouchableOpacity>}
            <TouchableOpacity style={Style.numberView} onPress={()=>setShowButton(!showButton)}>
                <Text style={theme == true ? Style.textStyle: Style.lightTextStyle}>{_phone}</Text></TouchableOpacity>
            <View style={Style.dateView}>
                <Text style={theme==true ? Style.dateTextStyle: Style.lightDateTextStyle}>{_currentDay} {Dates.Months[_currentMonth].tr}</Text>
                <Text style={theme==true ? Style.dateTextStyle: Style.lightDateTextStyle}>{Dates.Days[_currentDayName].tr}</Text>
                <Text style={theme==true ? Style.dateTextStyle: Style.lightDateTextStyle}>{_currentHours}:{_currentMinute}</Text></View>
        </View>
    )
}