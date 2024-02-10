const scriptURL = 'https://script.google.com/macros/s/AKfycbwkVeWeaLT47FapnRzng4TP1jvdUSZEav-o62ahiRdeH1BrV2jJusqJfx1PyMPlDHXg6w/exec'
const form = document.forms['questionnaire']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => console.log('Success!', response))
        .catch(error => console.error('Error!', error.message))
})