import { fireEvent, render, screen } from '@testing-library/react';

import AddCategory from '../../src/components/AddCategory';


describe('Pruebas en <AddCategory />', () => {

    test('debe de cambiar el valor de la caja de texto', () => {

        render(<AddCategory setCategories={() => { }} />);
        const input = screen.getByRole('textbox');

        fireEvent.input(input, { target: { value: 'Saitama' } });

        expect(input.value).toBe('Saitama');

    });

    test('debe de llamar onNewCategory si el input tiene un valor', () => {

        const inputValue = 'Saitama';
        const setCategories = jest.fn();

        render(<AddCategory setCategories={setCategories} />);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, { target: { value: inputValue } });
        fireEvent.submit(form);
        // screen.debug();
        expect(input.value).toBe('');

        expect(setCategories).toHaveBeenCalled();
        expect(setCategories).toHaveBeenCalledTimes(1);
        // expect( setCategories ).toHaveBeenCalledWith( (cats) => [inputValue, ...cats] );

    });

    test('no debe de llamar el onNewCategory si el input está vació', () => {

        const setCategories = jest.fn();
        render(<AddCategory setCategories={setCategories} />);

        const form = screen.getByRole('form');
        fireEvent.submit(form);

        expect(setCategories).toHaveBeenCalledTimes(0);
        expect(setCategories).not.toHaveBeenCalled();

    });


});