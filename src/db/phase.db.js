import storeImg from '../assets/image/store.png';
import sendImg from '../assets/image/sendconfirmation.png';
import confirmationImg from '../assets/image/confirmation.png';
import deliveryImg from '../assets/image/delivery.png';

export function getPhaseDelivery() {
    return [
        {text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit',img:storeImg, id:1},
        {text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit',img:sendImg, id:2},
        {text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit',img:confirmationImg, id:3},
        {text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit',img:deliveryImg, id:4}
     ]
}