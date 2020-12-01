

//1. Доработать функцию замены картинки в галерее таким образом, чтобы она проверяла наличие картинки по указанному в src адресу.
//3) *Добавить в галерею функцию перехода к следующему изображению. По сторонам от большой картинки должны быть стрелки «вперед» и «назад», по нажатию на которые происходит замена изображения на следующее или предыдущее.

window.onload = function (){
    document.getElementById('big').style.display='none';
    let imgSmall = document.getElementsByTagName('img');
    for(let i = 0; i < imgSmall.length; i++){
    addEventListener('click', 
displayLargeImage);
    }
};

function displayLargeImage(event){
    document.getElementById('big').style.display='flex';
    let replaceImg = event.target.src.replace('small', 'large');
    document.getElementById('large_img').src = replaceImg;
    replaceImg = playSlider();
    
    document.getElementById('large_img').onerror = function(){
        document.getElementById('big').style.display='none';
        alert('Увеличенное изображение, отсутствует!');
    }
};

let sliderArr = ['siberia-1.jpg', 'siberia-2.jpg'];//В идеале, здесь можно указать значение, для обращения к любому количеству помещённых в директорию изображений, без визуального перечисления каждого.
let currentImg = 0;

function playSlider(){
    let prewButton = document.getElementById('prew');
    let nextButton = document.getElementById('next');
    prewButton.addEventListener('click', showPrewImg);
    nextButton.addEventListener('click', showNextImg);
};

function showPrewImg(){
    let imgLarge = document.getElementById('large_img');
    (currentImg == 0) ? currentImg = 1 : currentImg--;
    imgLarge.src = 'img/large/' + sliderArr[currentImg];
};

function showNextImg(){
    imgLarge = document.getElementById('large_img');
    (currentImg == 1) ? currentImg = 0 : currentImg++;
    imgLarge.src = 'img/large/' + sliderArr[currentImg];
}
