a = 0;
b = 1;

for (let i = 0; i <= 20; i++) {
    if (i%2 === 0) {
        console.log(a);
        a+=b;
    } else {
        console.log(b);
        b+=a;
    }
}
