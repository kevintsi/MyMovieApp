import { StyleSheet, Text, View } from 'react-native'
import { useRoute } from "@react-navigation/native"
import React, { useState } from 'react'

const MovieDetailScreen = () => {

    const [loading, setLoading] = useState(false)
    const { id } = useRoute().params
    console.log(`Id movie : ${id}`)

    return (
        <View>
            <Text>MovieDetailScreen</Text>
        </View>
    )
}

export default MovieDetailScreen

const styles = StyleSheet.create({})