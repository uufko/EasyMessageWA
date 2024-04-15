import { StyleSheet } from "react-native";
import { UserDevice } from "../../metarials/userDevice";
import { Colors } from "../../metarials/colors";

export const Style = StyleSheet.create({
    viewStyle: {
        margin: 1,
        paddingLeft: 5,
        height: UserDevice.deviceHeight * .1,
        width: UserDevice.deviceWidht * .95,
        flexDirection: "row",
        backgroundColor: Colors.listColor,
        borderRadius: 20
    },
    textStyle: {
        fontSize: UserDevice.deviceWidht * .05,
        fontFamily: "bont",
        color: Colors.textColor,
        textAlign: "left",
        textAlignVertical: "center",
    },
    dateTextStyle: {
        fontSize: UserDevice.deviceWidht * .03,
        fontFamily: "bont",
        color: Colors.textColor,
        textAlign: "left",
        textAlignVertical: "center",
        opacity: .7
    },
    imageView: {
        //backgroundColor:"bisque",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    numberView: {
        justifyContent: "center",
        flex: 4
    },
    dateView: {
        //backgroundColor:"aqua",
        flex: 2,
        justifyContent: "space-around",
        alignItems: "center"
    },
    imageStyle: {
        height: UserDevice.deviceHeight * .03,
        width: UserDevice.deviceHeight * .03,
    }
})