import { useEffect, useState } from "react";
import Game from "./Game";
import './Rank.css'; // CSS 파일을 추가하여 스타일을 적용

function Rank() {
    const [loading, setLoading] = useState(true);
    const [games, setGames] = useState([]);
    
    const getGames = async () => {
        const json = await (await fetch(
            `https://api.steampowered.com/ISteamChartsService/GetMostPlayedGames/v1/`
        )).json();
        setGames(json.response.ranks);
        setLoading(false);
    }
    
    useEffect(() => {
        getGames();
    }, []);
    
    return (
        <div>
            {loading ? (
                <h1>Loading...</h1>
            ) : (
                <table className="game-table">
                    <thead>
                        <tr>
                            <th>Rank</th>
                            <th>Name</th>
                            <th>Peak Players</th>
                        </tr>
                    </thead>
                    <tbody>
                        {games.map(game => (
                            <Game 
                                key={game.appid} // 고유한 키 추가
                                rank={game.rank} 
                                id={game.appid} 
                                peak_in_game={game.peak_in_game} 
                            />
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}

export default Rank;
