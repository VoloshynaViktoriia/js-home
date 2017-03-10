var num = prompt('guess the number from 0 to 20', 0);
var guessIt = Math.floor(Math.random() * 20);

while (+num !== guessIt) {
    if (num < guessIt) {
        num = prompt('too small value');
    } else {
        num = prompt('too big value');
    }
    
}

alert('right! it\'s ' + guessIt);

