// Fetch usado para pegar dados de uma API, ele tb é uma função async

async function fetchProfileData() {
    const response = await fetch('https://raw.githubusercontent.com/coach-wiki/js-developer-portfolio/main/data/profile.json')
    return response.json()
}
