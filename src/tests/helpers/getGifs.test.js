import { getFetchGifs } from "../../helpers/getGifs";
import '@testing-library/jest-dom';
import {shallow} from 'enzyme';

describe('Prueba de helpers getGifs Fetch', () => {
    
    test('debe traer 10 elementos', async() => {
        
        const gifs= await getFetchGifs('One Punch');
        expect(gifs.length).toBe(10);

    })
    test('debe traer 0 elementos', async() => {
        const gifs= await getFetchGifs('');
        expect(gifs.length).toBe(0);
    })
    

})
