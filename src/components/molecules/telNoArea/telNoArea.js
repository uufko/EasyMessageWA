import { Linking, View } from "react-native"
import UTextInput from "../../atoms/uTextInput/uTextInput"
import { UImage } from "../../atoms/uImage/uImage"
import { Style } from "./style"
import { useSelector, useDispatch } from "react-redux"
import { addPhoneList, refresh, storageLocalCode, storagePhoneList } from "../../../redux/numberSlice"
import { Images } from "../../../assets/images/images"
import { Colors } from "../../metarials/colors"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { useEffect } from "react"


export const TelNoArea = () => {
    const { phoneNumber, localNumber ,phoneList} = useSelector((state) => state.counter)
    const dispatch = useDispatch()

    useEffect(() => {
        getPhoneList()
      }, [])

      useEffect(() => {
        sendPhoneList()
      },[phoneList,localNumber])

    const sendPhoneList = async ()=>{
        await AsyncStorage.setItem("list", JSON.stringify(phoneList))
        await AsyncStorage.setItem("localCode" , localNumber)
    }
    const getPhoneList = async ()=>{
        dispatch(storagePhoneList(JSON.parse(await AsyncStorage.getItem("list"))))
        dispatch(storageLocalCode(await AsyncStorage.getItem("localCode")))
    }
    return (
        <View style={Style.viewStyle}>
            <UTextInput />
            <UImage
                backgroundColor={Colors.imageColor}
                source={Images.sendIcon}
                onPress={() => { 
                    Linking.openURL(`https://wa.me/${localNumber}${phoneNumber}`)

                    dispatch(addPhoneList({
                        _phone: `${localNumber}${phoneNumber}`,
                        _day: new Date().getDate(),
                        _month: new Date().getMonth(),
                        _dayName: new Date().getDay(),
                        _hour: (new Date().getHours()).toString().length == 1 ? `0${new Date().getHours()}` : new Date().getHours(),
                        _minute: (new Date().getMinutes()).toString().length == 1 ? `0${new Date().getMinutes()}` : new Date().getMinutes()
                    }))
                    dispatch(refresh())
                }} />
        </View>
    )
}