export default class Section {
    constructor({ items, renderer }, containerSelector) {
        this._renderer = renderer;
        this._container = document.querySelector(containerSelector);
    }


    rendererItems(items) {
        items.forEach(function (item) {
            this._renderer(item)
        })
    }

    addItem(item) {
        this._container.prepend(item);
    }
}