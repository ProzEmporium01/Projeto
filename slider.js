'use strict';

const images = [
    { 'id': '1', 'url':'./images/cafe_800.jpg' },
    { 'id': '2', 'url':'./images/cafe_804.jpg' },
    { 'id': '3', 'url':'./images/cafe_8002.png' },
    { 'id': '4', 'url':'./images/cafe_8005.jpg' },
    { 'id': '5', 'url':'./images/cafe 8001.jpg' },
 ]
  

const containerItems = document.querySelector('#container-items');

const loadImages = ( images, container ) => {
    images.forEach ( image => {
        container.innerHTML += `
            <div class='item'>
                <img src='${image.url}'
            </div>
        `
    })
}

loadImages( images, containerItems );

let items = document.querySelectorAll('.item');

const previous = () => {
    containerItems.appendChild(items[0]);
    items = document.querySelectorAll('.item');
}

const next = () => {
    const lastItem = items[items.length - 1];
    containerItems.insertBefore( lastItem, items[0] );
    items = document.querySelectorAll('.item');
}

document.querySelector('#previous').addEventListener('click', previous);
document.querySelector('#next').addEventListener('click', next);