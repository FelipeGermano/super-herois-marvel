import React, { useState, useEffect } from 'react'
import { View, ActivityIndicator } from 'react-native'

import Styles from './Styles'
import Color from '../../Config/Color'

const Loading = () => {
    return (
        <View style={Styles.container}>
            <ActivityIndicator color={Color.gray} size={40} />
        </View>
    )
}

export default Loading