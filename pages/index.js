function Home() {
    const calc = soma(5, 5);

    return <h1>A soma total é {calc}!</h1>;
}

function soma(numb1, numb2) {
    const soma = numb1 + numb2;

    return soma;
}

export default Home;