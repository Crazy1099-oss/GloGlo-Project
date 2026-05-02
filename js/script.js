const root = document.getElementById('root')

const block = new DomElement(
    '.block',
    '150px',
    '300px',
    'tomato',
    '20px'
)

function DomElement(selector, height, width, bg, fontSize) {
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
    this.text = '';
}

DomElement.prototype.createElement = function () {
    let el;

    if (this.selector.startsWith('.')) {
        el = document.createElement('div');
        el.classList.add(this.selector.slice(1));
    } else if (this.selector.startsWith('#')) {
        el = document.createElement('p');
        el.id = this.selector.slice(1);
    } else {
        console.log('Неверный селектор');
        return;
    }

    el.textContent = 'Текст';

    el.style.cssText = `
        height: ${this.height};
        width: ${this.width};
        background: ${this.bg};
        font-size: ${this.fontSize};
        display: flex;
        justify-content: center;
        align-items: center;
    `;

    root.append(el);
};

block.createElement();
