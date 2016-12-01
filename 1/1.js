function* test() {
    yield 1;
    yield 2;
    return 3;
}

console.log(Array.from(test()));
