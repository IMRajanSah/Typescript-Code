import { invoice, payment } from './Models/class1.js';
import {bill} from './Models/interface1.js'
import {ListTemplate} from './Models/ListTemplate.js'
// inputs
const type = document.querySelector('#type') as HTMLInputElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

const form = document.querySelector('.new-item-form') as HTMLFormElement;

// list template instance
const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);

form.addEventListener('submit',(e:Event)=>{
    e.preventDefault();

    let data:bill;
    if(type.value==='invoice'){
        data=new payment(type.value,tofrom.value,details.value,amount.valueAsNumber);
    }else{
        data=new invoice(type.value,tofrom.value,details.value,amount.valueAsNumber);
    }
    // console.log(data);
    list.render(data, type.value, 'end');
})