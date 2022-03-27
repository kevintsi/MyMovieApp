import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import StarRating from 'react-native-star-rating';


const MovieItemCategory = (movie) => {
    let base_movie = movie.movie.item

    return (
        <View style={styles.container}>
            <Image style={styles.imageItem} source={{ uri: 'https://image.tmdb.org/t/p/w500' + base_movie.poster_path }} />
            <View style={styles.detail}>
                <Text style={{ "fontWeight": "500" }}>{base_movie.title}</Text>
                <StarRating
                    disabled={true}
                    maxStars={5}
                    rating={base_movie.vote_average / 2}
                    starSize={20}
                    fullStarColor={'gold'}
                />
            </View>
        </View>
    )
}

export default MovieItemCategory

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
    },
    detail: {
        flex: 1,
        flexDirection: "column",
        width: 100
    },
    imageItem: {
        width: 100,
        height: 160,
        margin: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    }
})