import { SafeAreaView, StatusBar } from "react-native"
import { TelNoArea } from "../molecules/telNoArea/telNoArea"
import { Style } from "./style"
import { UFlatList } from "../molecules/uFlatList/uFlatList"
import { USpace } from "../atoms/uSpace/uSpace"
import { UHeader } from "../molecules/uHeader/uHeader"
import { BannerAds } from "../../ads/bannerAds/bannerAds"
import { useSelector } from "react-redux"
import { Colors } from "../metarials/colors"

export const MainPage = () => {
    const {theme} = useSelector((state)=>state.counter)
    return (
        <SafeAreaView style={theme == true ? Style.viewStyle: Style.lightViewStyle}>
            <StatusBar barStyle={theme == true ? "light-content": "dark-content"} 
            backgroundColor={theme == true ? Colors.backColor: Colors.lightBackColor}/>
            <UHeader />
            <TelNoArea />
            <UFlatList />
            <BannerAds/>
        </SafeAreaView>
    )
}