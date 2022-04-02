import '@testing-library/jest-dom'
import React from 'react';
import {shallow} from 'enzyme';
import CounterApp from '../CounterApp';

describe('Pruebas en CounterApp', ()=>{
    
    
    
    let wrapper = shallow(<CounterApp />);

    //El BeforeEach se ejecuta antes de iniciar cada prueba
    beforeEach(()=>{
        wrapper = shallow(<CounterApp />);
    });


    test('debe de mostrar <CounterApp /> correctamente', ()=>{
        expect(wrapper).toMatchSnapshot();
    });

    test('debe de mostrar el valor por defecto de 100', ()=>{
        const wrapper = shallow( <CounterApp value = { 100 }/> );
        const valueCounter = wrapper.find('h2').text().trim();
        expect(valueCounter).toBe('100');
    });
    
    test('debe de incrementar con el boton de +1', ()=>{
        const btn1 = wrapper.find('button').at(0).simulate('click');
        const counterText = wrapper.find('h2').text().trim();
        expect( counterText).toBe('11');
    });
    
    test('debe de decrementar con el boton de -1', ()=>{
        const btn1 = wrapper.find('button').at(2).simulate('click');
        const counterText = wrapper.find('h2').text().trim();
        expect( counterText ).toBe('9');
    });

    test('debe de colocar el valor por defecto con el btn rest', ()=>{
        const wrapper = shallow( <CounterApp value = { 105 }/> );
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(1).simulate('click');
        const counterText = wrapper.find('h2').text().trim();
        console.log(counterText)

        expect(counterText).toBe("105")
    })
});