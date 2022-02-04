import { useEffect } from "react";
import "./App.css";
import Login from "./Login";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Player";
import { useDatalayerValue } from "./Datalayer";

const spotify = new SpotifyWebApi();

function App() {
  // const [token, setToken] = useState(null);
  const [{ user, token, discover_weekly }, dispatch] = useDatalayerValue();

  useEffect(() => {
    const _hash = getTokenFromUrl();
    window.location.hash = "_podey";
    const _token = _hash.access_token;

    if (_token) {
      // setToken(_token);
      spotify.setAccessToken(_token);

      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });
    }

    spotify.getUserPlaylists().then((Playlists) => {
      dispatch({
        type: "SET_PLAYLISTS",
        Playlists,
      });
      console.log("playlists--->", Playlists);
    });

    dispatch({
      type: "SET_SPOTIFY",
      spotify: spotify,
    });

    spotify.getPlaylist("37i9dQZEVXcTyXd1MyhTKw").then((discover_weekly) => {
      dispatch({
        type: "SET_DISCOVER_WEEKLY",
        discover_weekly: discover_weekly,
      });
    });
  }, [dispatch, token]);

  console.log("User--->", user);
  console.log("token--->", token);
  console.log("Discover-weekly--->", discover_weekly);

  return (
    <div className="App">
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  );
}

export default App;
