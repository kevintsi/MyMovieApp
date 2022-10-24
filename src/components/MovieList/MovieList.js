import { StyleSheet, Text, SafeAreaView, FlatList, TouchableOpacity, View } from 'react-native'
import React from 'react'
import MovieItem from './MovieItem'
import { useNavigation } from '@react-navigation/native'


const MovieList = ({ movies, titleCategory }) => {

  const navigation = useNavigation();

  const renderItem = (movie) => (
    <MovieItem movie={movie} />
  )

  //console.log(`Movies : ${movies} and title : ${titleCategory} ${new Date().toISOString()}`)
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.textList}>{titleCategory}</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Movies', { category: titleCategory })}>
          <Text style={styles.buttonList}>Voir plus</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        style={styles.list}
        data={movies}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        horizontal={true}
      />
      {/* {movies.map(movie => (<MovieItem key={movie.id} movie={movie} />))} */}
    </SafeAreaView>
  )
}

export default MovieList

const styles = StyleSheet.create({
  textList: {
    fontWeight: "bold",
    marginLeft: 10,
  },
  buttonList: {
    textAlign: "center",
    width: 80,
    borderRadius: 100,
    color: "white",
    backgroundColor: "#E43A45",
    marginRight: 5
  },
  titleContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  list: {
    marginTop: 10
  },
  container: {
    position: 'relative',
    marginTop: 15,
    height: "30%"
  }
})