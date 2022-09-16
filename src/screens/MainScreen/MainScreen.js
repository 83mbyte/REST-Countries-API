import React, { useEffect, useState } from 'react';

import style from './MainScreenStyle.module.css';

import InputFilter from '../../components/Inputs/InputFilter/InputFilter';
import InputSearch from '../../components/Inputs/InputSearch';
import ServiceAreaWrapper from '../../components/Wrappers/ServiceAreaWrapper';
import CardContainer from '../../components/Card/CardContainer';
import LoadingMessage from '../../components/LoadingMessage/LoadingMessage';


const MainScreen = ({ darkMode, stateData, filter, search }) => {
    const [content, setContent] = useState([]);

    const filterContent = () => {
        let res = [];
        if (stateData) {
            if (filter.filterItem !== null) {
                stateData.forEach(item => {
                    if (item.region === filter.filterItem) {
                        res.push(item);
                    }
                })
            }
            else {
                res = stateData;
            }
        }
        setContent(res);
    }

    const searchContent = () => {
        let res = [];

        if (search.searchItem !== null && search.searchItem !== undefined && search.searchItem !== '') {

            if (content.length > 0) {

                content.forEach((item) => {
                    if ((item.name.toLowerCase()).includes(search.searchItem.toLowerCase())) {
                        res.push(item)
                    }
                });
                setContent(res);
            }
        }
        else {
            setContent(stateData);
        }

    }
    useEffect(() => {
        if (stateData) {
            setContent(stateData);
        }
    }, [stateData]);

    useEffect(() => {

        filterContent();
    }, [filter.filterItem]);

    useEffect(() => {
        searchContent();
    }, [search.searchItem])

    return (
        <div  >
            <ServiceAreaWrapper>
                <div>
                    <InputSearch darkMode={darkMode} search={search} />
                </div>
                <div>
                    <InputFilter darkMode={darkMode} setFilterItem={filter.setFilterItem} />
                </div>
            </ServiceAreaWrapper>

            {
                !content || content.length === 0

                    ? <LoadingMessage message={'Loading data.. Please wait..'} />
                    : <>
                        <div className={style.cardsArea}>
                            {
                                content.map(item => {
                                    return <CardContainer
                                        key={item.cca3}
                                        cardInfo={item}
                                        darkMode={darkMode}
                                    />
                                })
                            }
                        </div>
                    </>
            }
        </div>
    );
};

export default MainScreen;