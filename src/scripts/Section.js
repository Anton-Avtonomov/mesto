export default class Section {
    constructor({ items, renderer: functionRenderer }, containerSelector) {
        this._renderer = functionRenderer;
        this._container = document.querySelector(containerSelector);
        this._items = items;
        // console.log('Создан экземпляр класса Section');
    }

    rendererItems() {
        this._items.forEach((item) => {
            this._renderer(item)
                // console.log('Сработал метод класса Section - rendererItems!');
        })
    }

    addItem(element) {
        this._container.prepend(element);
        // console.log('Сработал метод класса Section - addItem!');
    }

}