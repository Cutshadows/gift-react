import React from 'react';
import { mount } from "enzyme";
import {AppRouter} from '../../router/AppRouter';
import { AuthContext } from '../../auth/authContext';

describe('Pruebas en <AppRouter/>', () => {
    
    test('debe de mostrar login si no esta autenticado ', () => {
        const contextValue={
            dispatch:jest.fn(),
            user:{
                logged:false
            }
        }
        const wrapper=mount(
            <AuthContext.Provider value={contextValue}>
                <AppRouter />
            </AuthContext.Provider>
        );
        expect(wrapper).toMatchSnapshot();
    });

    test('debe de mostrar el componente marvel ', () => {
        const contextValue={
            dispatch:jest.fn(),
            user:{
                logged:true,
                name:'Fernando'
            }
        }
        const wrapper=mount(
            <AuthContext.Provider value={contextValue}>
                <AppRouter />
            </AuthContext.Provider>
        );
        expect(wrapper.find('.navbar').exists()).toBe(true);
    })
    
    
})
