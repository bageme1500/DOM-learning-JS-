let num = Math.random();
a = Math.round(num * 5) + 1;
name = 'dice' + a;
img1 = name + '.'+'png';

let num2 = Math.random();
b = Math.round(num2 * 5) + 1;
name2 = 'dice' + b;
img2 = name2 + '.'+'png';


document.querySelectorAll("img")[0].setAttribute('src', 'images/'+ img1);
document.querySelectorAll("img")[1].setAttribute('src', 'images/' + img2);
