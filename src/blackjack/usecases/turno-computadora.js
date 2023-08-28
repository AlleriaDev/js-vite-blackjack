import { pedirCarta } from "./pedir-carta";
import { valorCarta } from "./valor-carta";
import { crearCartaHTML } from "./crear-carta-html";


// turno de la computadora
/**
 * 
 * @param {Number} puntosMinimos puntos mínimos para que la computadora gane
 * @param {HTMLElement}
 * @param {array<string>} deck 
 */
export const turnoComputadora = ( puntosMinimos, puntosHTML, divCartasComputadora, deck = [] ) => {

    if ( !puntosMinimos ) throw new Error ('Puntos mínimos necesarios');
    if ( !puntosHTML) throw new Error ('Puntos HTML es Necesario')
    if ( !deck ) throw new Error ('Deck Necesario')

    let puntosComputadora = 0;

    do {
        const carta = pedirCarta( deck );

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML[1].innerText = puntosComputadora;
        
        const imgCarta = crearCartaHTML( carta );
        divCartasComputadora.append( imgCarta );

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100 );
}
