import React, { createContext, useState } from "react";

//! Create context for audio player
export let GlobalAudioPlayer = createContext();

const AudioPlayerContext = ({ children }) => {
  const [songs, setSongs] = useState([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSongIndex, setCurrentSongIndex] = useState(null);

  return (
    <GlobalAudioPlayer.Provider
      value={{
        songs,
        setSongs,
        isPlaying,
        setIsPlaying,
        currentSongIndex,
        setCurrentSongIndex,
      }}
    >
      {children}
    </GlobalAudioPlayer.Provider>
  );
};

export default AudioPlayerContext;
