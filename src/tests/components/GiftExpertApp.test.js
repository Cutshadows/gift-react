import React from 'react';
import '@testing-library/jest-dom';
import {shallow} from 'enzyme';
import GiftExpertApp from '../../components/GiftExpertApp';


describe('Llevaremos a cabo las pruebas de <GiftExpertApp />', () => {
    

    test('deberia hacer match con GiftExpertApp', () => {
        const wrapper=shallow(<GiftExpertApp />);
        expect(wrapper).toMatchSnapshot();
    })

    test('should show a list of categories ', () => {
        const categories=['One Punch', 'Dragon Ball'];
        const wrapper=shallow(<GiftExpertApp defaultCategories={categories}/>);
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GiftGrid').length).toBe(categories.length);
    })
    
    
})
