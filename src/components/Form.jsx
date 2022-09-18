import { View, Text, TextInput, StyleSheet, Button } from 'react-native'
import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Form = ({refresh}) => {
    const [title, setTitle] = useState('');
    const [pages, setPages] = useState(0);
    const [author, setAuthor] = useState('');

    const submitHandler = () => {
        // CREATE OBJ WITH BOOK STATE INFO
        
        const bookObj = {
            title,
            pages,
            author
        }
        // MAKE POST REQUEST TO EXPRESS WITH BOOK OBJ
        axios.post('http://localhost:3000/api/books/new', bookObj)
            .then(res => {
                refresh()
                setTitle('')
                setPages(0)
                setAuthor('')
            })
                
            .catch(err => console.log(err))
        
    }



    return (
        <View style={{alignItems: 'center'}}>
            <Text style={{fontSize: 25, color: 'gray', margin: 30}}>Please enter Favorite Book</Text>
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
                title='submit'
                onPress={submitHandler}
            />
        </View>
    )
}

export default Form

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