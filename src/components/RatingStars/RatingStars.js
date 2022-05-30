import { StyleSheet, View } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import React from 'react'

const RatingStars = ({ note }) => {
    const TOTAL_STARS = 5;
    return (
        <View style={styles.container}>
            {
                Array.from({ length: Math.round(note) }, (x, i) => {
                    return (
                        <MaterialIcons key={i} name="star" size={20} color="#FFA000" />
                    )
                })
            }
            {
                Array.from({ length: TOTAL_STARS - Math.round(note) }, (x, i) => {
                    return (
                        <MaterialIcons key={i} name="star-border" size={20} color="#FFA000" />
                    )
                })
            }
        </View>
    );
}

export default RatingStars

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
    },
})