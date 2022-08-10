import { renderHook, waitFor } from '@testing-library/react';

import { useFetchGifs } from '../../src/hooks/useFetchGifs';


describe('Pruebas en el hook useFetchGifs', () => {
    
    test('debe de regresar el estado inicial', () => {

        const { result } = renderHook( () => useFetchGifs('One Punch') );
        const { data, loading } = result.current;
        
        expect( data.length ).toBe(0);
        expect( loading ).toBeTruthy();

    });

    test('debe de retornar un arreglo de imagenes y isLoading en false', async() => {

        const { result } = renderHook( () => useFetchGifs('One Punch') );
        
        await waitFor(
            () => expect( result.current.data.length ).toBeGreaterThan(0)
        );
                
        const { data, loading } = result.current;
        
        expect( data.length ).toBeGreaterThan(0);
        expect( loading ).toBeFalsy();

    });

});