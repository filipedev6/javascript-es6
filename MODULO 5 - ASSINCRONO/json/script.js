fetch('./dados.json')
    .then((r) => {
        return r.json()
    })
    .then((b) => {
        const jsonString = JSON.stringify(b);

        localStorage.config = jsonString
    })