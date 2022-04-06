import React from 'react';
import { GifGridItem } from '../../components/GifGridItem';
const { shallow } = require("enzyme")


describe('Pruebas en <GifGridItem />', () => {
    test('debe de mostrar el componente correctamente', () => {
        const wrapper = shallow(<GifGridItem />)
        expect( wrapper ). toMatchSnapshot();
    })
})