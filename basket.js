'use strict';

//2. Реализовать модуль корзины. Создать блок товаров и блок корзины. У каждого товара есть кнопка «Купить», при нажатии на которую происходит добавление имени и цены товара в блок корзины. Корзина должна уметь считать общую сумму заказа.

let productArr = [
    {
        name: 'Apple iPhone 11 64GB Purple',
        imgSrc: 'img/shop/iPhone11_p.jpg',
        price: 55000
    },
    {
        name: 'Apple iPhone 11 Pro 64GB Midnight Green',
        imgSrc: 'img/shop/iPhone11pro_mg.jpg',
        price: 80000
    },
    {
        name: 'Apple iPhone 12 Pro 128GB Pacific Blue',
        imgSrc: 'img/shop/iPhone12pro_pb.jpg',
        price: 100000
    }
];

let sum = 0;

window.onload = function init() {
    let catalog = document.getElementsByClassName('catalog')[0];
    let i, item;
    for (i = 0; i < productArr.length; i++) {
        item = document.createElement('div');
        item.className = 'div_item';
        item.appendChild(document.createTextNode(productArr[i].name));

        let itemImg = document.createElement('img');
        itemImg.src = productArr[i].imgSrc;
        item.appendChild(itemImg);

        item.appendChild(document.createTextNode(productArr[i].price + '\n\u20bd'));

        let itemButton = document.createElement('button');
        itemButton.className = 'button';
        itemButton.textContent = 'Купить';
        itemButton.setAttribute('id', 'button_' + i);
        itemButton.addEventListener('click', addItem);
        item.appendChild(itemButton);

        catalog.appendChild(item);
    }
};

function addItem(obj) {
    let selectedItem = productArr[obj.target.id.split('_')[1]];
    let selectedItems = document.getElementsByClassName('selected_products')[0];

    let tr = selectedItems.insertRow(-1);
    let td = tr.insertCell(-1);
    td.appendChild(document.createTextNode(selectedItem.name));
    td.appendChild(document.createTextNode('\n' + selectedItem.price + '\n\u20bd'));

    sum += selectedItem.price;
    document.getElementsByClassName('sum')[0].textContent = 'Сумма: ' + sum + '\n\u20bd';
}
