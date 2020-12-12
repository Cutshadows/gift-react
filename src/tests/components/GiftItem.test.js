import React from 'react';
import '@testing-library/jest-dom';
import {shallow} from 'enzyme';

// import GiftExpertApp from '../components/GiftExpertApp';

import GiftGridItem from '../../components/GiftGridItem';

describe('Pruebas en <GiftExpertApp></GiftExpertApp>', () => {
   // let wrapper=shallow(<GiftGridItem />);
   /*  beforeEach(()=>{
        wrapper=shallow(<GiftGridItem/>);
    }); */
    const title='Un title';
    const url='https://localhost/algo.jpg';
    let wrapper=shallow(
        <GiftGridItem 
        title={title} 
        url={url} />
        );


    test('debe mostart <GiftGridItem></GiftGridItem> Correctamente ', () => {
            expect(wrapper).toMatchSnapshot();
    });

    test('debe tener un parrafo con el title', () => {
        const p=wrapper.find('p');
        expect(p.text().trim()).toBe(title);
    })

    test('debe de tner la img igual al url y alt de los props', () => {
        const img=wrapper.find('img');

        expect( img.prop('src') ).toBe(url);//props().src html 

        expect( img.prop('alt') ).toBe(title);//props().src html 

    })
    
    test('debe de tener animate__pulse', () => {
         const div=wrapper.find('div');
       /* expect(div.hasClass('animate__pulse')).toBeTruthy() */
        //    console.log(div.props())
        const className=div.prop('className');
       expect(className.includes('animate__pulse')).toBe(true);
    })
    
    
    
})
