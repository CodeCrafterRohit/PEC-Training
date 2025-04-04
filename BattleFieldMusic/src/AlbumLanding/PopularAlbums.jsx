import { collection, getDocs } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { __DB } from "../backend/firebaseconfig";
import { FaMusic } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import Spinner from "../helper/Spinner";
import { GlobalAudioPlayer } from "../context/AudioPlayerContext";

const PopularAlbums = () => {
  let {
    songs,
    setSongs,
    isPlaying,
    setIsPlaying,
    currentSongIndex,
    setCurrentSongIndex,
  } = useContext(GlobalAudioPlayer);

  //! Create one state for the album
  let [albums, setAlbums] = useState(null);

  //! Create one state for the song list
  let [songsList, setSongsList] = useState(null);
  let [randomSongs, setRandomSongs] = useState([]);

  //! Create one function which will sort the random songs from the song list
  let randomSong = (array, numberOfElements) => {
    if (!array || array.length === 0) return [];

    let shuffled = [...array].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, numberOfElements);
  };

  useEffect(() => {
    let fetchAlbums = async () => {
      try {
        //! Now we will fetch the albums from the database
        let albumCollectionRef = collection(__DB, "music_albums");
        let getAlbums = await getDocs(albumCollectionRef);
        console.log(getAlbums);

        //! Now we will extract the required data
        let albumData = getAlbums.docs.map((album) => ({
          ...album?.data(),
          songs: album?.data()?.songs || [],
        }));
        console.log("Album Data:", albumData);
        setAlbums(albumData);

        //! This is the logic to extract the random songs from the entire song list collection
        //! Add this code here
        let allAlbumSongs = albumData
          .map((album) => {
            return album.songs || [];
          })
          .flat();
        console.log("All Songs:", allAlbumSongs);
        setSongsList(allAlbumSongs);

        //! Get random songs after fetching all songs
        setRandomSongs(randomSong(allAlbumSongs, 5)); // It will extract only 5 songs from the entire collection
      } catch (error) {
        console.log("Error While Fetching:", error);
      }
    };
    //! Call the function
    fetchAlbums();
  }, []);

  //! Create one function which will handle the songs
  let handleSongChange = (index) => {
    setSongs(randomSongs);
    setCurrentSongIndex(index);
    if (currentSongIndex === index) {
      setIsPlaying(!isPlaying);
    } else {
      setIsPlaying(true);
    }
  };
  return (
    <section className="w-[80vw]">
      {albums ? (
        <article className="w-full">
          <header className="w-full p-5 flex items-center gap-3">
            <span className="text-3xl">
              <FaMusic />
            </span>
            <h1 className="text-3xl font-bold">Popular Albums</h1>
          </header>
          <main className="w-full">
            <div className="px-6 flex items-center gap-5">
              {albums.map((album, index) => {
                return (
                  <NavLink
                    to={`album-details/${album?.albumTitle}`}
                    key={index}
                    state={album}
                  >
                    <div className="w-[260px] h-[330px] bg-black/50 p-4 rounded-lg hover:bg-black hover:ring-1 hover:ring-[wheat]">
                      <img
                        src={album?.albumThumbnail}
                        alt={album?.albumTitle}
                        className="w-full h-[250px] object-cover rounded-md hover:scale-105 transition-all duration-100 ease-linear"
                      />
                      <h1 className="py-2 px-20 bg-black mt-2 rounded text-center= text-xl">
                        {album?.albumTitle}
                      </h1>
                    </div>
                  </NavLink>
                );
              })}
            </div>
          </main>

          {/*//? Display Random Songs */}
          {/* //? Random Songs logic code starting from here */}
          <section className="mt-5 px-1 py-3 mb-40">
            <header className="w-full p-5 flex items-center gap-3">
              <span className="text-3xl">
                <FaMusic />
              </span>
              <h1 className="text-3xl font-bold">Only Picked For You</h1>
            </header>
            <div className="flex gap-4 ml-5">
              {randomSongs.map((song, index) => (
                <div
                  key={index}
                  className="w-[200px] hover:ring-1 hover:ring-[wheat] cursor-pointer bg-black/50 flex flex-col px-2 items-center py-4 rounded"
                  onClick={() => handleSongChange(index)}
                >
                  <img
                    src={song?.songThumbnail}
                    alt={song?.songTitle}
                    className="w-[170px] h-[150px] object-cover rounded-lg"
                  />
                  <p className="text-white mt-2">{song?.songTitle}</p>
                </div>
              ))}
            </div>
          </section>
          {/* //? Random Songs logic code ending here */}
        </article>
      ) : (
        <section className="w-[100%] h-[100vh] fixed top-0 left-[7%]">
          <Spinner />
        </section>
      )}
    </section>
  );
};

export default PopularAlbums;
