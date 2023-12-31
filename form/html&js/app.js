import { invoice, payment } from './Models/class1.js';
import { ListTemplate } from './Models/ListTemplate.js';
// inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
const form = document.querySelector('.new-item-form');
// list template instance
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let data;
    if (type.value === 'invoice') {
        data = new payment(type.value, tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        data = new invoice(type.value, tofrom.value, details.value, amount.valueAsNumber);
    }
    // console.log(data);
    list.render(data, type.value, 'end');
});
