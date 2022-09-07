export default class Section {
    constructor({ renderer: functionRenderer }, containerSelector) {
        this._renderer = functionRenderer;
        this._container = document.querySelector(containerSelector);
        // console.log('Создан экземпляр класса Section');
    }

    rendererItems(items) {
        items.forEach((item) => {
            this._renderer(item)
                // console.log('Сработал метод класса Section - rendererItems!');
        })
    }

    addItem(element) {
        this._container.prepend(element);
        // console.log('Сработал метод класса Section - addItem!');
    }

}