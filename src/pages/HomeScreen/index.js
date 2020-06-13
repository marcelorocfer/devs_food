import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { Container } from './styled';

import api from '../../api';

import Header from '../../components/Header';

export default () => {
    const history = useHistory();
    const [headerSearch, setheaderSearch] = useState('');

    useEffect(()=>{
        const getCategories = async () => {
            const categories = await api.getCategories();
        };

        getCategories();
    }, []);

    return (
        <Container>
            <Header search={headerSearch} onSearch={setheaderSearch} />
        </Container>
    );
}