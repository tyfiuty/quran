const apiUrl = 'https://www.mp3quran.net/api/v3/tafsir?tafsir=1&language=ar';



async function getReciters(){
    const chooseReciters = document.querySelector('#chooseSurah')
    const res = await fetch(`${apiUrl}`)
    const data = await res.json()
    // console.log(data);
    // chooseReciters.innerHTML = `<option value="'>اختر قارئ</opiton>`
    data.soar.forEach(soar => chooseSurah.innerHTML += `<option value="${soar.id}">${soar.name}</option>`);
    chooseSurah.addEventListener('change',e => getMoshaf(e.target.value))
}
getReciters()