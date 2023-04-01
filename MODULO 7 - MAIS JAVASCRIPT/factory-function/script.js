function $$(selectElements) {
    const elements = document.querySelectorAll(selectElements);


    function hide() {
        elements.forEach((element) => {
            element.style.display = 'none'
        })

        console.log(this)

        return this
    }

    function show() {
        elements.forEach((element) => {
            element.style.display = 'initial'
        })

        return this
    }

    function on(onEvent, onCallback){
        elements.forEach((element) => {
            element.addEventListener(onEvent, onCallback);
        })

        return this
    }

    function addClass(classe) {
        elements.forEach((element) => {
            element.classList.add(classe)
        })

        return this
    }

    function removeClass(className) {
        elements.forEach(element => {
          element.classList.add(className);
        });
        return this;
    }

    return {
        elements,
        hide,
        show,
        on,
        addClass,
        removeClass
    }
}

const button = $$('button');

button.hide()