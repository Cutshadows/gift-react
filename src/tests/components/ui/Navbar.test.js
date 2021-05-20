import React from 'react';
import { mount } from "enzyme";
import { AuthContext } from '../../../auth/authContext';
import { MemoryRouter, Router } from 'react-router-dom';
import { Navbar } from '../../../components/ui/Navbar';
import { types } from '../../../types/types';
import '@testing-library/jest-dom';

describe('Pruebas de <Navbar />', () => {
    const historyMock={
        push:jest.fn(),
        location:{},
        listen:jest.fn(),
        createHref:jest.fn(),
        replace:jest.fn()
    }
    const contextValue={
        dispatch:jest.fn(),
        user:{
            logged:true,
            name:'Fernando'
        }
    }
    const wrapper=mount(
        <AuthContext.Provider value={contextValue}>
            <MemoryRouter>
                <Router history={historyMock}>
                    <Navbar />
                </Router>
            </MemoryRouter>
        </AuthContext.Provider>
    );

    afterEach(()=>{
        jest.clearAllMocks();
    })
    test('debe mostrarse correctamente ', () => {
      expect(wrapper).toMatchSnapshot();
      expect(wrapper.find('.text-warning').text().trim()).toBe('Fernando');  
    });

    test('debe de llamar el logout y el usar history', () => {
        wrapper.find('button').prop('onClick')();
        expect(contextValue.dispatch).toBeCalledWith({
            type:types.LOGOUT
        });

        expect(historyMock.replace).toHaveBeenCalledWith('/login');
    })

    
    
    
})
