// global variables
const adviceId = document.querySelector('.id-span');
const adviceText = document.querySelector('.advice-text');
const adviceBtn = document.querySelector('.btn');
let apiRandomAdvice = [];


//show new Advice

function newAdvice(){
    const quotationLeft = "\u201C";
    const quotationRight = "\u201D";
    adviceId.textContent = `Advice #${apiRandomAdvice.slip.id}`;
    adviceText.textContent = `${quotationLeft} ${apiRandomAdvice.slip.advice} ${quotationRight}`;
}



// getting advice from api
async function getRandomAdvice (){
    const apiUrl= 'https://api.adviceslip.com/advice';

    try{
        const response = await fetch(apiUrl);
       
        if(!response.ok){
            throw new Error('Cannot fetch advice!!');
        }
        const data = await response.json();
        apiRandomAdvice = data;
        newAdvice();
    }
    catch(error){
        console.error('Error fetching advice:' , error);
    }

}
//Event Listeners
adviceBtn.addEventListener('click', getRandomAdvice);

//on load
getRandomAdvice();



