function tocaSom( idElementoAudio ) {
    document.querySelector( idElementoAudio ).play();
}

/*
    listaDeTeclas amazena todas a teclas que exite no meu html com uma class em comum com totas ".tecla";

    listaDeTeclas = [
        0 -> button.tecla.tecla_pom,
        1 -> button.tecla.tecla_clap,
        2 -> button.tecla.tecla_tim,
        3 -> button.tecla.tecla_puff,
        4 -> button.tecla.tecla_splash,
        5 -> button.tecla.tecla_toim,
        6 -> button.tecla.tecla_psh,
        7 -> button.tecla.tecla_tic,
        8 -> button.tecla.tecla_tom,
    ]
*/

const listaDeTeclas = document.querySelectorAll( '.tecla' );

/*
    Atribuindo a função TocaSom(), ao elemento da listaDeTeclas com seu respectivo indice que é acessado pelo contador que vai de 0 a 9.
*/
for (var contador = 0; contador < listaDeTeclas.length; contador++) {
    /*
        .classList esta selecionado a seguda class do listaDeTeclas
        
        listaDeTeclas = [
            button.tecla.tecla_pom = [
                0 -> tecla,
                1 -> tecla_pom
            ] ...
    ]
    */
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    /*
        #som_ + 2° class do elemento listaDeTeclas[]
        #som_tecla_pom
    */
    const idElementoAudio = `#som_${instrumento}`;

    tecla.onclick = function() {
        tocaSom(idElementoAudio);
    }

    tecla.onkeydown = function( evento ) 
    {
        console.log( evento.code);
        console.log( evento.code == 'Space');
        console.log( evento.code == 'Enter' );

        if( evento.code === 'Space' || evento.code === 'Enter' ) {
           tecla.classList.add( 'ativa' );
        }

        tecla.onkeyup = function( ) {
            tecla.classList.remove( 'ativa' );
        }
    }
}
