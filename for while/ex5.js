b = 1
a = 0
c = 0
for(let i = 1; i <= 10; i++){
    console.log(c);

    c = a + b
    b = a
    a = c
}
