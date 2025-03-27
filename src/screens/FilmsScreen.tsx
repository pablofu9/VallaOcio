import {
  View,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
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
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { LoadingScreen } from "./loadingScreen/loadingScreen";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { Text } from "react-native";
import dayjs from "dayjs";
import "dayjs/locale/es";
import { NoContent } from "../components/noContent/noContent";

type SerializedFilm = Omit<Film, "date"> & { date: string };
type RootStackParamList = {
  filmDetail: { film: SerializedFilm };
};

export const FilmsScreen = () => {
  // Film variables from API call
  const {
    films,
    loading,
    isRefreshing,
    onRefresh,
    handleSearch,
    handleDateFilter,
  } = useFilms();
  // Flag to control date picker visibility
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  // Flag to control the selected date
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  // Formatted Date and capitalized date
  const formattedDate = dayjs(selectedDate).format("dddd, D MMMM");
  const capitalizedDate =
    formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);
  // Date formatter spanish format
  dayjs.locale("es");
  // Function to set the visibility of the date picker to true
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };
  // Const to hide the date picker
  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };
  // Function to set the date picker
  const handleConfirm = (date: Date) => {
    setSelectedDate(date);
    hideDatePicker();
    handleDateFilter(date);
  };
  // Navigation controller
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  function handleFilterPess() {
    showDatePicker();
  }
  useEffect(() => {
    handleDateFilter(new Date());
  }, []);

  // If is loading when api call
  if (loading && !isRefreshing) {
    return <LoadingScreen />;
  }
  return (
    <View style={styles.rootContainer}>
      <Header
        handleFilterPress={handleFilterPess}
        onChangeText={handleSearch}
        date={capitalizedDate}
      />
      <View style={styles.listContainer}>
        {!loading && films.length === 0 ? (
          <NoContent
            text="No hay información para mostrar"
            imageSource={require("../../assets/images/icons/noFilms.png")}
          />
        ) : (
          <FlatList
            data={films}
            refreshing={isRefreshing}
            onRefresh={onRefresh}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.contentStyle}
            renderItem={({ item }) => (
              <TouchableOpacity
              onPress={() =>
                navigation.navigate("filmDetail", {
                  film: {
                    ...item,
                    date: item.date.toISOString(), // 👈 conversión aquí
                  },
                })
              }
              >
                <FilmCard film={item} />
              </TouchableOpacity>
            )}
            refreshControl={
              <RefreshControl
                refreshing={isRefreshing}
                onRefresh={onRefresh}
                colors={[GlobalStyle.colors.primaryPurple]}
                tintColor={GlobalStyle.colors.primaryPurple}
              />
            }
          />
        )}
      </View>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
        minimumDate={new Date()} // Desde hoy
        maximumDate={dayjs().add(2, "month").toDate()} // Hasta 2 meses desde hoy
      />
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
    backgroundColor: GlobalStyle.colors.semiGrayBG,
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
