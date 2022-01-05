import React, { useState, useEffect } from 'react'
import { Text, View, FlatList } from 'react-native'

import EmptyComponent from '../EmptyComponent/Index'
import Card from '../Card/Index'

import Styles from './Styles'

const Lista = ({load, data}) => {
    return (
        <FlatList
            style={Styles.container}
            ListEmptyComponent={!load ? <EmptyComponent /> : null }
            data={data}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({item}) => <Card {...item} /> } />
    )
}

export default Lista