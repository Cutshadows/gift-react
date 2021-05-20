import React from 'react';
import { mount } from "enzyme";
import {Dashboard} from '../../router/Dashboard';
import { AuthContext } from '../../auth/authContext';
import { MemoryRouter } from 'react-router';


describe('Pruebas en el <Dashboard/>', () => {
    const contextValue={
        dispatch:jest.fn(),
        user:{
            logged:true,
            name:'Fernando'
        }
    }
    test('debe mostrarse correctamente ', () => {
        const wrapper=mount(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter>
                    <Dashboard />
                </MemoryRouter>
            </AuthContext.Provider>
        );
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.text-warning').text().trim()).toBe('Fernando');
    })
    
})
