import { StyleSheet, Dimensions } from 'react-native'
import Color from './Config/Color';

const { height, width } = Dimensions.get("window")

const Styles = StyleSheet.create({
    container: {
        width: width,
        height: height,
        backgroundColor: "#FFF"
    },
    containerSearch:{
        width: width,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    inputSearch:{
        flex: 1,
        height: 45,
        backgroundColor: '#FFF',
        paddingHorizontal: 15
    },
    buttonSearch: {
        height: 45,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 10,
        backgroundColor: Color.gray,
    },
    textButtonSearch:{
        color: Color.black,
        fontSize: 13,
        fontWeight: 'bold',
        letterSpacing: 0.3
    },
    containerLabelSearch:{
        height: 45,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 10,
        backgroundColor: Color.gray,
    },
    textLabelSearch:{
        color: Color.black,
        fontSize: 13,
        fontWeight: 'bold',
        letterSpacing: 0.3
    },
    containerResult:{
        width: '100%',
        paddingHorizontal: 10,
        paddingVertical: 10,
        backgroundColor: Color.dark_red,
    },
    textResult:{
        color: Color.gray,
        fontSize: 13,
        letterSpacing: 0.3,
        fontWeight: "500"
    }
});

export default Styles
