import { View } from "react-native"
import { Style } from "./style"
import { UText } from "../../atoms/uText/uText"
import { UImage } from "../../atoms/uImage/uImage"
import { Images } from "../../../assets/images/images"
import { useDispatch, useSelector } from "react-redux"
import { setTheme } from "../../../redux/numberSlice"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { useEffect } from "react"
import UWeather from "../uWeather/uWeather"

export const UHeader = ()=>{
    const {theme} = useSelector((state)=>state.counter)
    const dispatch = useDispatch()

    useEffect(()=>{
        getTheme()
    })

    const sendTheme = async ()=>{
        await AsyncStorage.setItem("theme", theme.toString())
    }
    const getTheme = async ()=>{
        gelen = await AsyncStorage.getItem("theme")
        gelen == "false" ? themeState = false : themeState = true
        dispatch(setTheme(themeState))
    }

    return(
        <View style={Style.viewStyle}>
            <UText/>
            <UImage source={theme == true ? Images.darkIcon: Images.lightIcon} 
            onPress={()=>{
                dispatch(setTheme(theme))
                sendTheme()
            }}/>
        </View>
    )
}