import { View, Text, TextInput, StyleSheet, Button, } from 'react-native'
import React, { useState, useEffect } from 'react'
import List from '../components/List';
import Form from '../components/Form';

const Dashboard = ({navigation, item}) => {
  const [refreshState, setRefreshState] =useState(false);

  const refresh = () => {
    setRefreshState(!refreshState)
  }


  return (
    <>
      <Form refresh={refresh}/>
      <List refreshState={refreshState} navigation={navigation} item={item} />
    </>
  )
}

export default Dashboard

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