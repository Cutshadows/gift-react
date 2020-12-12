import React from 'react';
import '@testing-library/jest-dom';
import {shallow} from 'enzyme';
import AddCategory from '../../components/AddCategory';


describe('Pruebas de <AddCategory />', () => {

    const setCategory=jest.fn();
    let wrapper;//=shallow(<AddCategory setCategories={setCategory}/>);
    beforeEach(()=>{
        jest.clearAllMocks();
        wrapper=shallow(<AddCategory setCategories={setCategory}/>);
    })
    test('debe mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();    
    });

    test('evaluar los cambios en el onChange del texto', () => {
        const input=wrapper.find('input');
        const value='Hola mundo';
        input.simulate('change', {
            target:{
                value
            }
        });
        expect(wrapper.find('p').text().trim()).toBe(value);
    })

    test('No debe de hostear la informacion', () => {
        wrapper.find('form').simulate('submit', {
            preventDefault(){}
        });
        expect(setCategory).not.toHaveBeenCalled();
    })
    
    test('should the call setCategorie and clean the text box', () => {
        
        const input=wrapper.find('input');

        const value='What World';
        //simular el inputChange
        input.simulate('change', {
            target:{
                value
            }
        });
        //simular el submit
        wrapper.find('form').simulate('submit', {
            preventDefault(){}
        });
        //setCategories se debe de haber llamado
        expect(setCategory).toHaveBeenCalled();
        expect(setCategory).toHaveBeenCalledTimes(1); //cuantas veces se espera que se llame la funcion
        expect(setCategory).toHaveBeenCalledWith(expect.any(Function))


        //el valor del input debe de estar ''
        expect(input.find('input').prop('value')).toBe('')


    })
    
    
    
    
})
