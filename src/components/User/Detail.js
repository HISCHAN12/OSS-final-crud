import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './Detail.css';

const Detail = () => {
    const { id } = useParams(); 
    const [game, setGame] = useState(null);
    const [loading, setLoading] = useState(true);

    const getGameDetails = async () => {
        const json = await (await fetch(`https://store.steampowered.com/api/appdetails?appids=${id}`)).json();

        if (json[id] && json[id].success) {
            setGame(json[id].data); 
        } else {
            console.error("게임 정보를 가져오는데 실패했습니다.", json);
        }

        setLoading(false); 
    };

    useEffect(() => {
        getGameDetails();
    }, [id]);

    return (
        <div className="detail-container">
            {loading ? (
                <h1>Loading...</h1>
            ) : (
                game && (
                    <div>
                        <div className="detail-header">
                            <h1>{game.name}</h1>
                            <img className="detail-image" src={game.header_image} alt={game.name} />
                        </div>

                        <div className="section">
                            <h2>Short Description</h2>
                            <p>{game.short_description}</p>
                        </div>

                        <div className="section">
                            <h2>Genres</h2>
                            <p>{game.genres ? game.genres.map(genre => genre.description).join(', ') : "정보 없음"}</p>
                        </div>

                        <div className="section">
                            <h2>Supported Languages</h2>
                            <p>{game.supported_languages}</p>
                        </div>

                        <div className="section">
                            <h2>PC Requirements</h2>
                            <h3>Minimum</h3>
                            <p dangerouslySetInnerHTML={{ __html: game.pc_requirements?.minimum }} />
                            <h3>Recommended</h3>
                            <p dangerouslySetInnerHTML={{ __html: game.pc_requirements?.recommended }} />
                        </div>
                    </div>
                )
            )}
        </div>
    );
};

export default Detail;
