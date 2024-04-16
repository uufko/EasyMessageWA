import { SafeAreaView } from "react-native"
import { TelNoArea } from "../molecules/telNoArea/telNoArea"
import { Style } from "./style"
import { UFlatList } from "../molecules/uFlatList/uFlatList"
import { USpace } from "../atoms/uSpace/uSpace"
import { UHeader } from "../molecules/uHeader/uHeader"
import { BannerAds } from "../../ads/bannerAds/bannerAds"
import { useSelector } from "react-redux"

export const MainPage = () => {
    const {theme} = useSelector((state)=>state.counter)
    return (
        <SafeAreaView style={theme == true ? Style.viewStyle: Style.lightViewStyle}>
            <UHeader />
            <TelNoArea />
            <UFlatList />
            <BannerAds/>
        </SafeAreaView>
    )
}