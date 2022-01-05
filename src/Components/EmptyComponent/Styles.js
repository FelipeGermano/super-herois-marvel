import { StyleSheet, Dimensions } from 'react-native'
import Color from '../../Config/Color';

const { height, width } = Dimensions.get("window")

const Styles = StyleSheet.create({
    container: {
        width: width,
        height: height - 100,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Color.gray
    },
    text:{
        fontSize: 13,
        letterSpacing: 0.3,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        color: Color.red
    }
});

export default Styles
