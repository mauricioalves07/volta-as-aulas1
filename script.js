// Mensagem de boas-vind ao clicar no botão
document.addEventListener(`DOMContentLoaded`.()=>{
    // const button=document.querySelecor(`button");
    button.addEventListener(`click;()=>{
        alert(Estamos animados para começar o ano com vocês!`);
});
//Contador de dias para o inicio a aulas 
const startDate= new Date(`024-08-01`);// Defina a data de inicio as aulas 
const today= new date-today();
const timeDIFF=StarDate-today;
const daysLeft=Math.ceil(timeDIFF/(1000*60*60*24));
const countodownElement=document.createElemente(`p`);
coountdowElement.textContent= `Faltam${daysLeft}dias para o inicio da aulas`;
document.querySelecor(`.card`).appenChild(countdownElement);
//Alterar a imagem ao clicar
const image=document.querySelecor(`img`);
image.addEventListener(`click>;()=>{
    image.src=voltaaulas.jpg;
    });
    //Motrar uma mensagem e boa-vindas com animacão
    const card=document.querySelector(`.card`);
    car.style.opacity=D;
    card.style.transition=`opacity 2s`;
    setTimeout(()=>{
        card.style.opacity=1:
        },100);
});