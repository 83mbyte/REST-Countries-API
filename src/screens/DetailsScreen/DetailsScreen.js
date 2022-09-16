import React, { Fragment, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import style from './DetailsScreenStyle.module.css';

import Button from '../../components/Buttons/Button';
import BordersButton from '../../components/Buttons/BordersButton/BordersButton';
import LoadingMessage from '../../components/LoadingMessage/LoadingMessage';

import ServiceAreaWrapper from '../../components/Wrappers/ServiceAreaWrapper';

const DetailsScreen = ({ stateData, darkMode }) => {

    const navigate = useNavigate();
    const params = useParams();

    const [content, setContent] = useState(null);
    useEffect(() => {

        if (stateData) {
            let res = stateData.find(item => {
                return item.cca3 === params.cca3
            });
            setContent(res);
        }
        else {
            navigate('/')
        }

    }, [params])

    const CountriesOnBorders = (countryCca) => {
        const result = stateData.find(item => item.cca3 === countryCca);
        return result.name
    }
    const getNativeName = (data) => {
        const nativeName = data[Object.keys(data)[0]].official;
        return nativeName
    }

    return (
        <div>
            <ServiceAreaWrapper>
                <Button darkMode={darkMode} />
            </ServiceAreaWrapper>
            {
                !content
                    ? <LoadingMessage message={'Loading data.. Please wait..'} />
                    :
                    <Fragment>
                        <div className={style.detailsArea}>
                            <div className={style.flagContainer}>
                                <img src={content.flag.replace('w320', 'w640')} alt={`${content.name} flag`} />
                            </div>
                            <div className={style.descriptionContainer}>
                                <div className={style.descriptionWrapper}>
                                    <div className={style.countryName}>{content.name}</div>
                                    <div className={style.countryDescription}>
                                        <div className={style.left}>
                                            <p>
                                                <span className={style.boldText}>Native Name: </span>
                                                {
                                                    content.nativeName
                                                        ? getNativeName(content.nativeName)
                                                        : <span className='fontItalic'>no info</span>
                                                }
                                            </p>
                                            <p>
                                                <span className={style.boldText}>Population: </span>{
                                                    content.population
                                                        ? (content.population).toLocaleString('en')
                                                        : <span className='fontItalic'>no info</span>}
                                            </p>
                                            <p>
                                                <span className={style.boldText}>Region: </span>{
                                                    content.region
                                                        ? content.region
                                                        : <span className='fontItalic'>no info</span>}
                                            </p>
                                            <p>
                                                <span className={style.boldText}>Sub Region: </span>{
                                                    content.subregion
                                                        ? content.subregion
                                                        : <span className='fontItalic'>no info</span>}
                                            </p>
                                            <p>
                                                <span className={style.boldText}>Capital: </span>{
                                                    content.capital
                                                        ? content.capital
                                                        : <span className='fontItalic'>no info</span>}
                                            </p>

                                        </div>
                                        <div className={style.right}>
                                            <p>
                                                <span className={style.boldText}>Top Level Domain: </span>
                                                {
                                                    content.tld
                                                        ? Object.keys(content.tld).map((item) =>
                                                            content.tld[item]).join(', ')
                                                        : <span className='fontItalic'>no info</span>
                                                }
                                            </p>
                                            <p>
                                                <span className={style.boldText}>Currencies: </span>
                                                {
                                                    content.currencies
                                                        ? content.currencies[Object.keys(content.currencies)[0]].name
                                                        : <span className='fontItalic'>no info</span>
                                                }
                                            </p>
                                            <p>
                                                <span className={style.boldText}>Languages: </span>
                                                {
                                                    content.languages
                                                        ? Object.keys(content.languages).map((item) =>
                                                            content.languages[item]).sort().join(', ')
                                                        : <span className='fontItalic'>no info</span>
                                                }
                                            </p>
                                        </div>
                                    </div>
                                    <div className={style.bordersBtnContainer}>
                                        <div className={style.bordersBtnAreaLeft}>
                                            <span className={style.boldText}>Border Countries: </span>
                                        </div>
                                        <div className={style.bordersBtnAreaRight}>
                                            {
                                                content.borders
                                                    ?
                                                    content.borders.map((item, index) => {
                                                        return <BordersButton
                                                            text={CountriesOnBorders(item)}
                                                            key={index + '_brd'}
                                                            darkMode={darkMode}
                                                            cca3={item} />
                                                    })
                                                    : <span className='fontItalic'>no info</span>
                                            }
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </Fragment>
            }

        </div >
    );
};

export default DetailsScreen;