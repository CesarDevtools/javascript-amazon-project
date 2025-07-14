import { addToCart, cart, loadFromStorage } from "../../data/cart.js";

describe('test suite: addToCart', () => {

    it('agrega un producto existente al carrito', () => {
        spyOn(localStorage, 'setItem'); // Mock localStorage.setItem

        spyOn(localStorage, 'getItem').and.callFake(() => {
            return JSON.stringify([{

                productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
                quantity: 1,
                deliveryOptionId: '1'
            }]); 
        }); // Mock localStorage.getItem
        loadFromStorage(); 

        addToCart('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
        expect(cart.length).toEqual(1);
        expect(localStorage.setItem).toHaveBeenCalledTimes(1);
        expect(cart[0].productId).toEqual('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
        expect(cart[0].quantity).toEqual(2);
    });

    

    it('agrega un producto nuevo al carrito', () => {
        spyOn(localStorage, 'setItem'); // Mock localStorage.setItem

        spyOn(localStorage, 'getItem').and.callFake(() => {
            return JSON.stringify([]); 
        }); // Mock localStorage.getItem
        loadFromStorage(); 

        addToCart('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
        expect(cart.length).toEqual(1);
        expect(localStorage.setItem).toHaveBeenCalledTimes(1);
        expect(cart[0].productId).toEqual('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
        expect(cart[0].quantity).toEqual(1);
    });
});

