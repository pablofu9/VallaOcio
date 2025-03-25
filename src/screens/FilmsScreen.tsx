import { View, StyleSheet, FlatList, ActivityIndicator } from "react-native";
import { Header } from "../components/header/header";
import { GlobalStyle } from "../styles/GlobalStyle";
import React, { useRef, useState, useEffect } from "react";
import { Film } from "../models/film";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { FilmCard } from "../components/filmCard/filmCard";
import { GetFilmsUseCase } from "../usecases/getFilmsUseCase";
import { filmService } from "../services/filmService";
import { RefreshControl } from "react-native";

export const FilmsScreen = () => {
  // Film variables from API call
  const [films, setFilms] = useState<Film[]>([]);
  // Loading Flag to track when films are loading
  const [loading, setLoading] = useState(true);
  // Refresh list flag
  const [isRefreshing, setIsRefreshing] = useState(false);
  // Filtered films by textfield
  const [filteredFilms, setFilteredFilms] = useState<Film[]>([]);
  // Flag to set the query for the searcher
  const [searchQuery, setSearchQuery] = useState("");

  const fetchFilms = async () => {
    setLoading(true);
    try {
      const data = await filmService.getFilms();
      setFilms(data);
      setFilteredFilms(data);
    } catch (error) {
      console.error("Error fetching films:", error);
    } finally {
      setLoading(false);
      setIsRefreshing(false);
    }
  };

  // Execute in initialPhase
  useEffect(() => {
    fetchFilms();
  }, []);

  // Function that executes in pull to refresh
  const onRefresh = () => {
    setIsRefreshing(true);
    fetchFilms();
  };
  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query) {
      const filtered = films.filter((film) =>
        film.name.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredFilms(filtered);
    } else {
      setFilteredFilms(films);
    }
  };
  function handleFilterPess() {}

  if (loading && !isRefreshing) {
    return (
      <View style={styles.laodingContainer}>
        <ActivityIndicator
          size="large"
          color={GlobalStyle.colors.primaryPurple}
        />
      </View>
    );
  }
  return (
    <View style={styles.rootContainer}>
      <Header
        handleFilterPress={handleFilterPess}
        onChangeText={handleSearch}
      />
      <View style={styles.listContainer}>
        <FlatList
          data={filteredFilms}
          refreshing={isRefreshing}
          onRefresh={onRefresh}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.contentStyle}
          renderItem={({ item }) => <FilmCard film={item} />}
          refreshControl={
            <RefreshControl
              refreshing={isRefreshing}
              onRefresh={onRefresh}
              colors={[GlobalStyle.colors.primaryPurple]}
              tintColor={GlobalStyle.colors.primaryPurple}
            />
          }
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  laodingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  rootContainer: {
    flex: 1,
    backgroundColor: GlobalStyle.colors.grayBackground,
  },
  listContainer: {
    flex: 1,
    backgroundColor: "transparent",
  },
  contentStyle: {
    paddingTop: 10,
    marginHorizontal: 20,
    paddingBottom: 80,
  },
});
