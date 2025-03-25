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
import { useFilms } from "../hooks/useFilms";

export const FilmsScreen = () => {
  // Film variables from API call
  const {
    films,
    loading,
    isRefreshing,
    onRefresh,
    handleSearch,
  } = useFilms(); 


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
          data={films}
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
