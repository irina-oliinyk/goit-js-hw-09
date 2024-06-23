let formData = {
  email: "",
  message: ""
};

const formEl = document.querySelector('.feedback-form');

formEl.addEventListener('input', handleSubmit);
function handleSubmit(event) {
    if (event.target.type === 'email' || event.target.tagName.toLowerCase() === 'textarea') {
    formData[event.target.name] = event.target.value;
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
  }
};
 


document.addEventListener('DOMContentLoaded', handleLocalStorage);


function handleLocalStorage() {
    let elementFormData = localStorage.getItem('feedback-form-state');
    if (elementFormData) {
        FormData = JSON.parse(elementFormData);
        let emailElement = document.getElementById('email');
        let messageElement = document.getElementById('message');
        
        if (emailElement && messageElement) {
            emailElement.value = FormData.email;
            messageElement.value = FormData.message;
        }
    }
}


formEl.addEventListener('submit', handler);
function handler(event) {
    event.preventDefault();
    const form = event.target;
    const email = form.elements.email.value.trim();
    const message = form.elements.message.value.trim();
    if (email === '' || message === '') {
    alert('All form fields must be filled in');
    } else {
        console.log(formData);
        form.reset();
    }

     // Очищення локального сховища, об'єкта formData і полів форми
        localStorage.removeItem('feedback-form-state');
        formData.email = "";
        formData.message = "";
       
}

