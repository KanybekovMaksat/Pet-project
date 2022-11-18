import CheesePizzIMG from '../assets/image/CheesePizza.png';
import AssortedPizzaIMG from '../assets/image/AssortedPizza.png';
import MeatMushroomsPizzaIMG from '../assets/image/MeatMushroomsPizza.png';
import SpicyPizzaIMG from '../assets/image/SpicyPizza.png';


export function getFoodCard() {
    return [
        {Image: CheesePizzIMG, title:"Сырная", description:"Домашнаяя паста феттуччине, сливочный соус, креветки, трюфельное масло, черный перец, пармезан.350 г", price:600, id:1},
        {Image: AssortedPizzaIMG, title:"Ассорти", description:"Домашнаяя паста феттуччине, сливочный соус, креветки, трюфельное масло, черный перец, пармезан.350 г", price:999, id:2},
        {Image: MeatMushroomsPizzaIMG, title:"С креветками и трюфелями", description:"Домашнаяя паста феттуччине, сливочный соус, креветки, трюфельное масло, черный перец, пармезан.350 г", price:900, id:3},
        {Image: SpicyPizzaIMG, title:"Мясо с грибами", description:"Домашнаяя паста феттуччине, сливочный соус, креветки, трюфельное масло, черный перец, пармезан.350 г", price:800, id:4},   
     ]
}