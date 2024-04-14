import { FlatList, Image, Text, View } from "react-native"
import { Style } from "./style"
import { Images } from "../../../assets/images/images"
import { Dates } from "../../metarials/dates"

export const UList = ({ _phone,_currentDay,_currentDayName,_currentHours,_currentMinute,_currentMonth }) => {
    
    return (
        <View style={Style.viewStyle}>
            <View style={Style.imageView}>
                <Image style={Style.imageStyle} source={Images.whatsappIcon}/></View>
            <View style={Style.numberView}>
                <Text style={Style.textStyle}>{_phone}</Text></View>
            <View style={Style.dateView}>
                <Text style={Style.dateTextStyle}>{_currentDay} {Dates.Months[_currentMonth].tr} {Dates.Days[_currentDayName].tr}</Text>
                <Text style={Style.dateTextStyle}>{_currentHours}:{_currentMinute}</Text></View>
        </View>
    )
}