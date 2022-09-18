import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import Form from '../components/Form'
import axios from 'axios'
import EditForm from '../components/EditForm'

const EditScreen = (props) => {


    const { item } = props.route.params
    const { navigation } = props

    return (
        <View>
            <EditForm item={item} navigation={navigation} />
        </View>
    )
}

export default EditScreen