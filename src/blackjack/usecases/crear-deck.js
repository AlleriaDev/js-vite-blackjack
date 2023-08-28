import _ from 'underscore';

/**
 * 
 * @param {array<String>} tiposDeCarta ['C','D','H','S']
 * @param {array<String>} tiposEspeciales ['A','J','Q','K']
 * @returns {array<String>} retorna un nuevo deck
 *
 */

export const crearDeck = (tiposDeCarta, tiposEspeciales) => {


    if (!tiposDeCarta || tiposDeCarta.length === 0) throw new Error('Tipos de carta es obligatorio y ser un arreglo de strings');

    if (!tiposEspeciales || tiposEspeciales.length === 0) throw new Error('Tipos de carta es obligatorio y ser un arreglo de strings');

    let deck  = [];

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCarta ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );

    return deck;
}
