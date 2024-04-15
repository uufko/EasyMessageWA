import { SafeAreaView } from "react-native"
import { TelNoArea } from "../molecules/telNoArea/telNoArea"
import { Style } from "./style"
import { UFlatList } from "../molecules/uFlatList/uFlatList"
import { USpace } from "../atoms/uSpace/uSpace"
import { UHeader } from "../molecules/uHeader/uHeader"

export const MainPage = () => {
    return (
        <SafeAreaView style={Style.viewStyle}>
            <UHeader />
            <TelNoArea />
            <UFlatList />
            <USpace/>
        </SafeAreaView>
    )
}