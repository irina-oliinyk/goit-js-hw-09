let formData = {
  email: "",
  message: ""
};

const formEl = document.querySelector('.feedback-form');
const inputEl = document.querySelector('input');
const textareaEl = document.querySelector('textarea');

const updateFormData = () => {
  formData.email = inputEl.value;
  formData.message = textareaEl.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
};


// formEl.addEventListener('input', handleSubmit);
// function handleSubmit(event) {
//     if (event.target.type === 'email' || event.target.tagName.toLowerCase() === 'textarea') {
//     formData[event.target.name] = event.target.value;
//     localStorage.setItem('feedback-form-state', JSON.stringify(formData));
//   }
// };
 
formEl.addEventListener('input', evt => {
  const target = evt.target;
  if (target === inputEl || target === textareaEl) {
    updateFormData();
  }
});


document.addEventListener('DOMContentLoaded', handleLocalStorage);


function handleLocalStorage() {
    let elementFormData = localStorage.getItem('feedback-form-state');
    if (elementFormData) {
        FormData = JSON.parse(elementFormData);
        
        if (inputEl && textareaEl) {
            inputEl.value = FormData.email;
            textareaEl.value = FormData.message;
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

