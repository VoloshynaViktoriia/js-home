document.getElementById('userInput').addEventListener('keydown', function(e){
    if (e.keyCode === 13) {
        var item = e.currentTarget.value;
        var fibonacci = [0, 1];
        
        for (var i = 2; i < item; i++) {
            fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
        }
        
        document.getElementById('fibonacciFromLoop').innerHTML = fibonacci[item - 1];   
    }
});

