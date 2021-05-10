import React from 'react';
import '@testing-library/jest-dom';
import {shallow} from 'enzyme';
import GiftGrid from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
import '@testing-library/jest-dom';

jest.mock('../../hooks/useFetchGifs');

describe('Pruebas de el componente <GiftGrid></GiftGrid>', () => {
    const category='One Punch';
    
    test('should show the snapshot of the <GiftGrid></GiftGrid>', () => {
        
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true,
        });
        const wrapper=shallow(<GiftGrid category={category}/>);
        expect(wrapper).toMatchSnapshot();
    });

    test('should show items when he charges image useFetchGifs', () => {
        const gifs = [{
            id: 'ABC',
            url: 'https://google.com',
            title: 'ABC Title'
        },{
            id: '123',
            url: 'https://google.com',
            title: 'ABC Title'
        }]
        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false,
        });
        const wrapper=shallow(<GiftGrid category={category}/>);

        
        expect(wrapper).toMatchSnapshot();
        
        expect(wrapper.find('p').exists()).toBe(false)

        expect(wrapper.find('GiftGridItem').length).toBe(gifs.length);

    })
    
    
})
