import { useState, useEffect } from "react";
import { Film } from "../models/film";
import { filmService } from "../services/filmService";

/**
 * Custom Hook to manage films data fetching, filtering, and refresh logic.
 *
 * This hook handles the logic of fetching films from the API, filtering them based on a search query,
 * and managing the loading, refresh, and filtered state for films.
 *
 * @returns {Object} The state and functions related to films.
 * @returns {Film[]} films - The list of filtered films to be displayed.
 * @returns {boolean} loading - A flag indicating whether the films are being loaded.
 * @returns {boolean} isRefreshing - A flag indicating whether a refresh action is in progress.
 * @returns {Function} onRefresh - Function to trigger a refresh of the films data.
 * @returns {Function} handleSearch - Function to filter films based on a search query.
 */

// Define the return type of the hook
type UseFilmsReturnType = {
  films: Film[];
  loading: boolean;
  isRefreshing: boolean;
  onRefresh: () => void;
  handleSearch: (query: string) => void;
  handleDateFilter: (date: Date) => void; // 👈 añadir esta línea
};

export const useFilms = (): UseFilmsReturnType => {
  const [films, setFilms] = useState<Film[]>([]); // Films fetched from the API
  const [filteredFilms, setFilteredFilms] = useState<Film[]>([]); // Filtered films based on search query
  const [loading, setLoading] = useState(true); // Loading state for films
  const [isRefreshing, setIsRefreshing] = useState(false); // Refresh state for pull-to-refresh action
  const [searchQuery, setSearchQuery] = useState(""); // Search query for filtering films
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  /**
   * Fetch films from the API and update the state.
   * It sets the films and filteredFilms state once the data is fetched.
   */
  const fetchFilms = async () => {
    setLoading(true);
    try {
      const data = await filmService.getFilms();
      setFilms(data);
      setFilteredFilms(data); // Initialize filtered films with all fetched films
    } catch (error) {
      console.error("Error fetching films:", error);
    } finally {
      setLoading(false);
      setIsRefreshing(false);
    }
  };
  const handleDateFilter = (date: Date) => {
    setSelectedDate(date);
    applyFilters(searchQuery, date);
  };
  // Fetch films when the hook is initialized
  useEffect(() => {
    fetchFilms();
  }, []);
  const applyFilters = (query: string, date: Date | null) => {
    let filtered = films;

    if (query) {
      filtered = filtered.filter((film) =>
        film.name.toLowerCase().includes(query.toLowerCase())
      );
    }

    if (date) {
      filtered = filtered.filter(
        (film) => film.date.toDateString() === date.toDateString()
      );
    }

    setFilteredFilms(filtered);
  };
  /**
   * Trigger a refresh of the films list.
   * This function is called when the user performs a pull-to-refresh action.
   */
  const onRefresh = () => {
    setIsRefreshing(true);
    fetchFilms();
  };

  /**
   * Handle search query change and filter the films accordingly.
   * Filters the films list based on the search query.
   *
   * @param {string} query - The search query entered by the user.
   */
  const handleSearch = (query: string) => {
    setSearchQuery(query);
    applyFilters(query, selectedDate);
  };
  return {
    films: filteredFilms,
    loading,
    isRefreshing,
    onRefresh,
    handleSearch,
    handleDateFilter, 
  };
};
