import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Game({ rank, id, peak_in_game }) {
    const [game, setGame] = useState(null);

    const getGame = async () => {
        const json = await (await fetch(
            `https://store.steampowered.com/api/appdetails?appids=${id}`
        )).json();

        
        if (json[id] && json[id].success) {
            setGame(json[id].data);
        } else {
            console.error("게임 정보를 가져오는데 실패했습니다.", json);
        }
    };

    useEffect(() => {
        getGame();
    }, [id]);

    return (
        <tr>
            {}
            <td style={{ width: '120px', textAlign: 'center' }}>
                {rank}.
                {game && game.header_image && (
                    <img src={game.header_image} alt={game.name} style={{ width: '50px', marginLeft: '10px' }} />
                )}
            </td>
            <td>
                {game ? (
                    <Link to={`/rank/${id}`} style={{ color: 'white', textDecoration: 'none' }}>{game.name}</Link>
                ) : (
                    "Unknown😭"
                )}
            </td>
            <td>
                {peak_in_game} {}
            </td>
        </tr>
    );
}

export default Game;
