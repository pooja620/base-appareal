const EXPRESSION = (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);

function validateEmail() 
{
    const element = document.getElementById('input-email');
    const labelError = document.getElementById('label-error');
    const warningIcon = document.getElementById('icon');

    if(!EXPRESSION.test(element.value)){
        labelError.classList.remove('hidden');
        element.classList.add('error');
        warningIcon.classList.remove('hidden');
    }else {
        labelError.classList.add('hidden');
        element.classList.remove('error');
        warningIcon.classList.add('hidden');
    }
}

