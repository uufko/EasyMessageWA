import { FlatList, Image, Text, TouchableOpacity, View } from "react-native"
import { Style } from "./style"
import { Images } from "../../../assets/images/images"
import { Dates } from "../../metarials/dates"
import { useState } from "react"

export const UList = ({ _phone, _currentDay, _currentDayName, _currentHours, _currentMinute, _currentMonth,onPressDelete }) => {

    const [showButton, setShowButton] = useState(true)

    return (
        <View style={Style.viewStyle}>
            {showButton==true ? <TouchableOpacity style={Style.imageView}>
                <Image style={Style.imageStyle} source={Images.whatsappIcon} /></TouchableOpacity>:
                <TouchableOpacity style={Style.imageView} onPress={onPressDelete}>
                <Image style={Style.imageStyle} source={Images.deleteIcon} /></TouchableOpacity>}
            <TouchableOpacity style={Style.numberView} onPress={()=>setShowButton(!showButton)}>
                <Text style={Style.textStyle}>{_phone}</Text></TouchableOpacity>
            <View style={Style.dateView}>
                <Text style={Style.dateTextStyle}>{_currentDay} {Dates.Months[_currentMonth].tr}</Text>
                <Text style={Style.dateTextStyle}>{Dates.Days[_currentDayName].tr}</Text>
                <Text style={Style.dateTextStyle}>{_currentHours}:{_currentMinute}</Text></View>
        </View>
    )
}