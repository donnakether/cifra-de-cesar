//minúscula

console.log('_ Minúscula_ ');
//Cifrar
var letramin = 'p';
console.log('letra original: ' + letramin + ' e o numero: '  + letramin.charCodeAt(0));
var n = letramin.charCodeAt(0);

var cifrado = (n + 97 + 33) % 26 + 97;
console.log('numero cifrado: ' + cifrado);
var result = String.fromCharCode(cifrado);
console.log('letra cifra ' + result);

// Decifrar

letramin
var decifrado = (cifrado - 97 + 33) % 26 + 97;
console.log('decifrado: ' + decifrado);
console.log('letra decifrada: ' + String.fromCharCode(decifrado));


//Maiúscula

console.log('_ Maiúsculas_ ');
//Cifrar

var letra = 'A';
console.log('letra original: ' + letra + ' e o numero: '  + letra.charCodeAt(0));
var n = letra.charCodeAt(0);

var cifrado = (n - 65 + 33) % 26 + 65;
console.log('numero cifrado: ' + cifrado);
var result = String.fromCharCode(cifrado);
console.log('letra cifra ' + result);

// Decifrar

var decifrado = (cifrado + 65 - 33) % 26 + 65;
console.log('decifrado: ' + decifrado);
console.log('letra decifrada: ' + String.fromCharCode(decifrado));
