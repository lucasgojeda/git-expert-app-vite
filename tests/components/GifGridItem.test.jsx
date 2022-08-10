import { render, screen } from "@testing-library/react";

import { GifGridItem } from "../../src/components/GifGridItem";


describe('Pruebas en el componente <GifGrifItem/>', () => {

    const title = 'saitama';
    const url = 'url';

    test('Deberia hacer match con el snapshot ', () => {

        const { container } = render(<GifGridItem title={title} url={url} />);

        expect(container).toMatchSnapshot();
    });

    test('debe de mostrar la imagen con el URL y el ALT indicado', () => {

        render(<GifGridItem title={title} url={url} />);
        
        // screen.debug();

        const { src, alt } = screen.getByRole('img');

        expect( src ).toBe( src );
        expect( alt ).toBe( title );
    });

    test('debe de mostrar el titulo en el componente', () => {

        render(<GifGridItem title={title} url={url} />);

        expect( screen.getByText( title ) ).toBeTruthy();

    });
}); 