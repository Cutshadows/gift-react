import React from 'react';
import { mount, shallow } from 'enzyme';

import HeroeScreen from '../../../components/heroes/HeroeScreen';
import { MemoryRouter } from 'react-router';

describe('Pruebas de <HeroScreen />', () => {
    const historyMock={
        push:jest.fn(),
        goBack:jest.fn(),
        length:10
    }
   
    
    test('debe mostrar el componente redirect si no hay argumento en el URL ', () => {
        const wrapper=mount(
            <MemoryRouter initialEntries={['/hero']}>
                <HeroeScreen history={historyMock}/>
            </MemoryRouter>
        )
        expect(wrapper.find('Redirect').exists()).toBe(true);
    })
    test('debe de mostrar un hero si el parametro existe', () => {
        const wrapper=mount(
            <MemoryRouter initialEntries={['/hero/marvel-spider']}>
                <HeroeScreen history={historyMock}/>
            </MemoryRouter>
        )
    })
    
    
})
