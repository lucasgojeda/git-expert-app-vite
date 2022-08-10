import { getGifs } from "../../src/helpers/getGifs";


describe('Pruebas en getGifs()', () => {
    
    test('debe de retornar un arreglo de gifs', async() => {

        const limit = 10;
        
        const gifs = await getGifs('One Punch', process.env.VITE_API_KEY, process.env.VITE_API_URL, limit);
        
        expect( gifs.length ).toBeGreaterThan( 0 );
        expect( gifs[0] ).toEqual({
            id: expect.any( String ),
            title: expect.any( String ),
            url: expect.any( String ),
        });
        
    });

});