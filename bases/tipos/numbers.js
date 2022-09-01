"use strict";
(() => {
    let avengers = 10;
    console.log(avengers);
    const villains = 20;
    if (avengers < villains) {
        console.log('Estamos en problemas');
    }
    else {
        console.log('Nos salvamos');
    }
    // Hay que tener en cuenta que NaN es considerado como un numero, por lo que el siguiente código podría pasar
    avengers = Number('55A');
    console.log({ avengers });
})();
