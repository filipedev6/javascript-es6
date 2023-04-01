function getName(arg) {
    let name = arg;

    function callName() {
        console.log('Seu nome é ' + name);
    }

    return callName;
}

const filipe = getName('Filipe')

console.log(filipe())