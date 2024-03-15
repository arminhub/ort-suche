const ortInput = document.querySelector('#ort');
const plzInput = document.querySelector('#plz');
const longInput = document.querySelector('#long');
const latInput = document.querySelector('#lat');
const ausgabe = document.querySelector('#ausgabe');

const fetchData = async () => {
    try {
        const res = await fetch('http://beispiel.api/url?data');
        const data = await res.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
};

const formatData = (data) => {
    let dataArr = [];
    for (let key in data) {
        let obj = {
            ort: data[key][0],
            plz: key
        };
        dataArr.push(obj);
    }
    return dataArr;
};

const zeigeAusgabe = (filteredArr) => {
    let ul = document.createElement('ul');
    ausgabe.classList.remove('d-none');
    filteredArr.forEach((el) => {
        let li = document.createElement('li');
        li.textContent = el.ort;
        li.value = el.plz;
        li.addEventListener('click', () => {
            ortHandler(li.textContent, li.value);
        });
        ul.appendChild(li);
    });
    ausgabe.innerHTML = '';
    ausgabe.appendChild(ul);
};

const inputHandler = (dataArr) => {
    let filteredArr = [];
    ortInput.addEventListener('input', (e) => {
        const eingabe = e.target.value.toLowerCase();
        if (eingabe) {
            filteredArr = dataArr.filter((el) => {
                const ort = el.ort.toLowerCase();
                return ort.includes(eingabe);
            });
            zeigeAusgabe(filteredArr);
        } else {
            ausgabe.innerHTML = '';
            plzInput.placeholder = '';
            longInput.placeholder = '';
            latInput.placeholder = '';
            ausgabe.classList.add('d-none');
        }
    });
};

const fetchKoord = async (ort, plz) => {

    try {

        const res = await fetch('https://api.zippopotam.us/AT/' + plz);
        const data = await res.json();
        const orten = data.places
        console.log('orten:', orten);

        const filteredData = orten.find(el => el['place name'] === ort);
        const long = filteredData.longitude;
        const lat = filteredData.latitude;

        longInput.placeholder = long;
        latInput.placeholder = lat;
    }
    catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
}

const ortHandler = async (ort, plz) => {
    console.log('ort, plz:', ort, plz);
    ortInput.value = ort;
    plzInput.placeholder = plz;
    ausgabe.innerHTML = '';
    ausgabe.classList.add('d-none');
    const koord = await fetchKoord(ort, plz);
};

// initialisieren
const ortSuche = async () => {
    const data = await fetchData();
    if (data) {
        const dataArr = formatData(data);
        inputHandler(dataArr);
    } else {
        console.error('Failed to fetch data');
    }
};

ortSuche();

// Eventlistener
document.querySelector('#btn').addEventListener('click', () => {
    ortInput.value = '';
    ausgabe.innerHTML = '';
    plzInput.placeholder = '';
    longInput.placeholder = '';
    latInput.placeholder = '';
})