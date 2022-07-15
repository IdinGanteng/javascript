// function tanyaKabar(name) {
//     console.log('Apa kabar,', name);
// }

// function katakanHallo(name) {
//     console.log(',', name);
// }

// katakanHallo('idin ganteng');
// tanyaKabar('din');

function tanyaKabar(name) {
    console.log('Apa kabar,', name);
}

function katakanHallo(name) {
    setImmediate(function () {
        console.log('Hallo,', name);
    });
}

katakanHallo('idin ganteng');
tanyaKabar('din');

