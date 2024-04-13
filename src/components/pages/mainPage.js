import { Linking, View,Text } from "react-native"
import { TelNoArea } from "../molecules/telNoArea/telNoArea"
import { Style } from "./style"
import { UFlatList } from "../molecules/uFlatList/uFlatList"
import { useSelector, useDispatch } from "react-redux"
import { addPhoneList } from "../../redux/numberSlice"

export const MainPage =()=>{
    const {phoneNumber, phoneList} = useSelector((state)=>state.counter)
    const dispatch = useDispatch()
    
    return(
        <View style={Style.viewStyle}>
            <TelNoArea onPress={()=>{
                Linking.openURL(`https://wa.me/+90${phoneNumber}`)
                dispatch(addPhoneList(phoneNumber))
            }}/>
            <UFlatList data={phoneList}/>
        </View>
        
    )
}