const icone = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];

//riferimenti al Dom
const containerDom = document.querySelector('.container');
const tipoDom = document.getElementById('tipo')


//richiamo la funzione che genera le option
generaOption()


//generazione carte 
icone.forEach((elemento)=> {
    containerDom.append(generaCard(elemento));
})

//filtro icone per tipo
tipoDom.addEventListener('change', function() {
    containerDom.innerHTML = '';    
    icone.filter(elemento => {
        if (elemento.type === tipoDom.value) {
            containerDom.append(generaCard(elemento));
        } else if (tipoDom.value === 'all') {
            containerDom.innerHTML = ''; 
            icone.forEach(elemento => {
                containerDom.append(generaCard(elemento));
            });
        }
    });
});


//funzione che genera le card applica le icone e il colore generato in maniera casuale
function generaCard(elemento) {
	let coloreCasuale = Math.floor(Math.random()*16777215).toString(16);
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `<i class="fa-solid ${elemento.prefix}${elemento.name}" style="color: #${coloreCasuale}"></i>
                      <p>${elemento.name}</p>`
    return card;
}


//funzione che genera le option e le mette nel select
function generaOption() {
    let ArrayOpzioniDaVisualizzare = [];
    icone.forEach(elemento => {
        if(!ArrayOpzioniDaVisualizzare.includes(elemento.type)) {
            ArrayOpzioniDaVisualizzare.push(elemento.type);
            tipoDom.innerHTML += `<option value="${elemento.type}">${elemento.type}</option>`;
		}
    });
	console.log(ArrayOpzioniDaVisualizzare);
    return ArrayOpzioniDaVisualizzare;
}