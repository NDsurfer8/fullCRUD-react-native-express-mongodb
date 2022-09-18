import { View, Text, FlatList, TouchableOpacity, RefreshControl, ActivityIndicator, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios';

const List = ({ refreshState, navigation, item }) => {
    const [allBooks, setAllBooks] = useState([]);
    const [refreshing, setRefreshing] = useState(true);


    useEffect(() => {

        axios.get('http://localhost:3000/api/books')
            .then((res) => {
                setAllBooks(res.data)
            })
            .catch((err) => console.log(err))

    }, [refreshState])


    const loadData = () => {
        axios.get('http://localhost:3000/api/books')
            .then((res) => {
                setAllBooks(res.data)
            })
            .catch((err) => console.log(err))
    }

    const deleteHandler = (item) => {
        axios.delete(`http://localhost:3000/api/books/${item._id}`)
            .then(res => {
                refreshState(true)
                console.log(res.data)
            })
            .catch(err => console.log(err))
    }

    return (
        <View style={{ alignItems: 'center' }}>
            {/* {refreshing ? <ActivityIndicator/> : null} */}
            <FlatList
                data={allBooks}

                renderItem={({ item }) => {
                    return (                    //! SENDING ID PARAMS WITH THIS ITEM TO AXIOS CALL AND OTHER PAGE
                        <TouchableOpacity onPress={() => navigation.navigate('Details', { item })}>
                            <Text style={{ fontSize: 20 }}>{item.title}   {item.pages}   {item.author}</Text>
                            <Button title='Delete' onPress={() => deleteHandler(item)} />
                        </TouchableOpacity>
                    )
                }}
                refreshControl={<RefreshControl refreshing={refreshing} onRefresh={loadData} />}
            />
        </View>
    )
}

export default List