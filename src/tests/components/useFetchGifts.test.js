// import React from 'react';
import '@testing-library/jest-dom';
import { useFetchGifs } from '../../hooks/useFetchGifs';
import { renderHook } from '@testing-library/react-hooks';



describe('Pruebas en el hook <useFetchGifts></useFetchGifts>', () => {
    

    test('should be return the initial state', async() => {
        const {result, waitForNextUpdate}=renderHook(()=>useFetchGifs('One Punch'));
        const {data, loading}=result.current;

        // console.log(resp);
        // const {data, loading}=useFetchGifs(category);
        await waitForNextUpdate();

         expect(data).toEqual([]);
         expect(loading).toBe(true);
         expect(loading).toBeTruthy();
    });

    test('should the return an array of images and the loading in false', async() => {
        const {result, waitForNextUpdate}=renderHook(()=>useFetchGifs('One Punch'));
        await waitForNextUpdate();
        const {data, loading}=result.current;

        expect(data.length).toBe(10);
        expect(loading).toBe(false);
        expect(loading).not.toBeTruthy();
    })
    
    
})
