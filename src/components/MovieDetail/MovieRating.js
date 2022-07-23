import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import RatingStars from '../RatingStars/RatingStars'

const MovieRating = ({ vote_average }) => {
    return (
        <View style={styles.rateContainer}>
            <RatingStars
                note={vote_average / 2}
            />
            <Text style={{ color: "white" }}>{vote_average / 2}</Text>
        </View>
    )
}

export default MovieRating

const styles = StyleSheet.create({
    rateContainer: {
        display: 'flex',
        flexDirection: "row",
        width: 150,
        marginTop: 10
    },
})