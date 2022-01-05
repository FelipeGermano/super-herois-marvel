import { StyleSheet, Dimensions } from 'react-native'
import Color from '../../Config/Color';

const { height, width } = Dimensions.get("window")

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 15
    },
});

export default Styles
