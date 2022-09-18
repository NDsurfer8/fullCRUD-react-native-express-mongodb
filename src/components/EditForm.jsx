import { View, Text, StyleSheet, Button, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

const EditForm = ({ item, navigation }) => {
    // GETTING PATH VARIABLE FROM PROPS
    
    const [title, setTitle] = useState('');
    const [pages, setPages] = useState(0);
    const [author, setAuthor] = useState('');

    const updatedBookObj = {
        title,
        pages,
        author
    }


    useEffect(() => {
        axios.get(`http://localhost:3000/api/books/${item._id}`)
            .then((res) => {
                setTitle(item.title);
                setPages(item.pages);
                setAuthor(item.author);
            })
            .catch((err) => console.log(err))

    }, [])

    const updateHandler = () => {
        axios.put(`http://localhost:3000/api/books/${item._id}`, updatedBookObj)
            .then(res => {
                navigation.navigate('Books')
            })
            .catch((err) => console.log(err))
    }



    return (
        <View style={{ alignItems: 'center' }}>
            <Text style={{ fontSize: 25, color: 'gray', margin: 30 }}>Please enter Favorite Book</Text>
            <TextInput
                style={styles.input}
                placeholder='title'
                value={title}
                onChangeText={setTitle}
            />
            <TextInput
                style={styles.input}
                placeholder='pages'
                value={pages}
                onChangeText={setPages}
            />
            <TextInput
                style={styles.input}
                placeholder='author'
                value={author}
                onChangeText={setAuthor}
            />

            <Button
                title='update'
                onPress={updateHandler}
            />
        </View>
    )
}

export default EditForm
const styles = StyleSheet.create({
    input: {
        width: 300,
        backgroundColor: '#B6BFC4',
        borderRadius: 25,
        padding: 16,
        fontSize: 16,
        marginVertical: 10,
    },
})