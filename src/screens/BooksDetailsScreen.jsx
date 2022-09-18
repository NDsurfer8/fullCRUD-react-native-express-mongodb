import { View, Text, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

//! GETTING ONE BOOK BY ID REACT NATIVE 


const BooksDetailsScreen = (props) => {
    // destructure item from props . route . params, GETTING PATH VARIABLE
    const { item } = props.route.params
    const {navigation} = props
    // load book into state from axios api call
    const [oneBook, setOneBook] = useState([]);



    // USE ITEM._ID TO SEND AS PARAM WITH AXIOS CALL AND SET STATE 
    useEffect(() => {
        axios.get(`http://localhost:3000/api/books/${item._id}`)
            .then((res) => setOneBook(res.data))
            .catch((err) => console.log(err))

    }, [])
    
    return (
        <>
            {(oneBook) ?
                <View style={{ alignItems: 'center', marginTop: 100 }}>
                    <Text style={{ padding: 15, fontSize: 30 }}>Title:  {item.title}</Text>
                    <Text style={{ padding: 15, fontSize: 30 }}>Pages:  {item.pages}</Text>
                    <Text style={{ padding: 15, fontSize: 30 }}>Author:  {item.author}</Text>
                </View> : <Text>loading...</Text>
            }
            <Button
                title='edit'
                onPress={()=>navigation.navigate('Edit',{item})}
            />

        </>
    )
}

export default BooksDetailsScreen