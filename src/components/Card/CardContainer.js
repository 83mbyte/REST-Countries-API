import React from 'react';
import style from './CardStyle.module.css';
import { useNavigate } from "react-router-dom";

const CardContainer = ({ cardInfo, darkMode }) => {
    const navigate = useNavigate();

    const onCardClickHandler = (path) => {
        navigate(`details/${path}`);
    }
    return (
        <>
            {
                !cardInfo
                    ? '...loading'
                    : <div
                        className={style.container}
                        style={{
                            boxShadow: darkMode && 'none',
                            backgroundColor: darkMode ? 'hsl(209, 23%, 22%)' : 'hsl(0, 0%, 100%)'
                        }}
                        onClick={() => onCardClickHandler(cardInfo.cca3)}
                    >

                        <div className={style.flagArea}>
                            <img src={cardInfo.flag} alt='flag' />
                        </div>

                        <div className={style.detailsArea}>
                            <p className={style.countryName}>{cardInfo.name}</p>
                            <p className={style.countryDetails}>
                                <span className={style.boldText}>Population: </span>{(cardInfo.population).toLocaleString('en')}
                            </p>
                            <p className={style.countryDetails}>
                                <span className={style.boldText}>Region: </span>{cardInfo.region}
                            </p>
                            <p className={style.countryDetails}>
                                <span className={style.boldText}>Capital: </span>{cardInfo.capital}
                            </p>
                        </div>

                    </div>
            }
        </>
    );
};

export default CardContainer;