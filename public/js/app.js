const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const locationMessage = document.querySelector('#location-message')
const forecastMessage = document.querySelector('#forecast-message')
const errorMessage = document.querySelector('#error-message')
const errorMessageArea = document.querySelector('.red')
const loader = document.querySelector('.loader')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    hideErrorMessage()
    showLoader()

    const location = search.value

    errorMessage.textContent = ''
    locationMessage.textContent = ''
    forecastMessage.textContent = ''

    fetch('/weather?address=' + location).then((response) => {
        response.json().then((data) => {
            hideLoader()
            if (data.error) {
                errorMessage.textContent = data.error
                showErrorMessage()
            } else {
                locationMessage.textContent = data.location
                forecastMessage.textContent = data.forecast
            }
        })
    })
})

function showErrorMessage() {
    errorMessageArea.classList.remove("hidden")
}

function hideErrorMessage() {
    errorMessageArea.classList.add("hidden")
}

function showLoader() {
    loader.classList.add("active")
}

function hideLoader() {
    loader.classList.remove("active")
}