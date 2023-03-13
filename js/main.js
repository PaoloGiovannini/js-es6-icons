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


//generazione carte 
icone.forEach((elemento)=> {
    containerDom.append(generaCard(elemento));
})

//filtro icone per tipo
tipoDom.addEventListener('change', function(){
    containerDom.innerHTML = ''
    if (tipoDom.value == 'animal') {       
        icone.filter(elemento => {
            if (elemento.type == 'animal') {
                containerDom.append(generaCard(elemento));
            }
        });
    } else if (tipoDom.value == 'vegetable') {       
        icone.filter(elemento => {
            if (elemento.type == 'vegetable') {
                containerDom.append(generaCard(elemento));
            }
        });
    } else if (tipoDom.value == 'user') {       
        icone.filter(elemento => {
            if (elemento.type == 'user') {
                containerDom.append(generaCard(elemento));
            }
        });
    } else {
        icone.forEach(elemento => {
            containerDom.append(generaCard(elemento));
        });
    }
});

//funzione che genera le card e applica le icone
function generaCard(elemento) {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `<i class="fa-solid ${elemento.prefix}${elemento.name}" style="color: ${elemento.color}"></i>
                      <p>${elemento.name}</p>`
    return card;
}

