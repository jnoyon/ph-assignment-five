// Reusable Functions
function getInnerText(id){
    return document.getElementById(id).innerText;
}
function getInputValue(id){
    return parseFloat(document.getElementById(id).value);
}

// Section and HTML Elements
const currentBalance = document.getElementById('current-balance');
const donationTab = document.getElementById('donation-tab');
const donationSection = document.getElementById('donation-section');
const historyTab = document.getElementById('history-tab');
const historySection = document.getElementById('history-section');
const modal = document.getElementById('modal');
const donationList = document.getElementById('donation-list');

// Balances
const firstDonationBalance = document.getElementById('first-donation-balance');
const secondDonationBalance = document.getElementById('second-donation-balance');
const thirdDonationBalance = document.getElementById('third-donation-balance');

// Values
const firstDonationInput = document.getElementById('first-donation-input');
const secondDonationInput = document.getElementById('second-donation-input');
const thirdDonationInput = document.getElementById('third-donation-input');

// donation Buttons
const firstDonationButton = document.getElementById('first-donation-button');
const secondDonationButton = document.getElementById('second-donation-button');
const thirdDonationButton = document.getElementById('third-donation-button');

// Sticky Nav
document.addEventListener('scroll', function(){
    const header = document.getElementById('header');
    const navSection = document.getElementById('nav-section');
   if(scrollY > 100){
        header.classList.add('fixed', 'w-full', 'bg-transparent', 'backdrop-blur-2xl');
        navSection.classList.add('bg-transparent');
   }
   else {
        header.classList.remove('fixed', 'w-full', 'bg-transparent', 'backdrop-blur-2xl');
        navSection.classList.remove('bg-transparent');
   }
})

// Tab Section
donationTab.addEventListener('click', function(){
    historySection.classList.add('hidden');
    donationSection.classList.remove('hidden');
    donationTab.classList.add('bg-lime-400', 'border-lime-400');
    historyTab.classList.remove('bg-lime-400', 'border-lime-400');
    historyTab.classList.add('border', 'border-solid', 'border-gray-300' );
});

historyTab.addEventListener('click', function(){
    historySection.classList.remove('hidden');
    donationSection.classList.add('hidden');
    historyTab.classList.add('bg-lime-400', 'border-lime-400',);
    donationTab.classList.remove('bg-lime-400', 'border-lime-400');
    donationTab.classList.add('border', 'border-solid', 'border-gray-300');
});



firstDonationButton.addEventListener('click', function(e){
    e.preventDefault();
    const firstDonationInputN = getInputValue('first-donation-input');
    if(firstDonationInputN<=0 || isNaN(firstDonationInputN)){
        alert('Wrong Amount');
    }
    else if(firstDonationInputN > currentBalance.innerText){
        alert('Insufficient Balance.');
    }
    else{
        const firstDonationBalanceU = parseFloat(getInnerText('first-donation-balance')) + firstDonationInputN;
        firstDonationBalance.innerText = firstDonationBalanceU;
        firstDonationInput.value = ''

        const currentBalanceU = parseFloat(currentBalance.innerText) - firstDonationInputN;
        currentBalance.innerText = currentBalanceU;
        modal.showModal();

        const firstDonationTitle = getInnerText('first-donation-title');
        const div = document.createElement('div');
        div.className = 'item gap-5 border border-gray-300 border-solid p-5 rounded-md mb-5'
        div.innerHTML = `
            <h1 class="font-bold text-xl mb-3"> ${firstDonationInputN} Taka is Donated  ${firstDonationTitle} </h1>
            <p class="text-gray-600"> ${new Date().toString()} </p>
        `
        donationList.appendChild(div);
    }
});

secondDonationButton.addEventListener('click', function(e){
    e.preventDefault();
    const secondDonationInputN = getInputValue('second-donation-input');
    if(secondDonationInputN<=0 || isNaN(secondDonationInputN)){
        alert('Wrong Amount');
    }
    else if(secondDonationInputN > getInnerText('current-balance')){
        alert('Insufficient Balance.');
    }
    else{
        const secondDonationBalanceU = parseFloat(getInnerText('second-donation-balance')) + secondDonationInputN;
        secondDonationBalance.innerText = secondDonationBalanceU;
        secondDonationInput.value = ''

        const currentBalanceU = parseFloat(currentBalance.innerText) - secondDonationInputN;
        currentBalance.innerText = currentBalanceU;
        modal.showModal();

        const secondDonationTitle = getInnerText('second-donation-title');
        const div = document.createElement('div');
        div.className = 'item gap-5 border border-gray-300 border-solid p-5 rounded-md mb-5'
        div.innerHTML = `
            <h1 class="font-bold text-xl mb-3"> ${secondDonationInputN} Taka is Donated  ${secondDonationTitle} </h1>
            <p class="text-gray-600"> ${new Date().toString()} </p>
        `
        donationList.appendChild(div);
    }
});

thirdDonationButton.addEventListener('click', function(e){
    e.preventDefault();
    const thirdDonationInputN = getInputValue('third-donation-input');
    if(thirdDonationInputN<=0 || isNaN(thirdDonationInputN)){
        alert('Wrong Amount');
    }
    else if(thirdDonationInputN > getInnerText('current-balance')){
        alert('Insufficient Balance.');
    }
    else{
        const thirdDonationBalanceU = parseFloat(getInnerText('third-donation-balance')) + thirdDonationInputN;
        thirdDonationBalance.innerText = thirdDonationBalanceU;
        thirdDonationInput.value = ''

        const currentBalanceU = parseFloat(currentBalance.innerText) - thirdDonationInputN;
        currentBalance.innerText = currentBalanceU;
        modal.showModal();

        const thirdDonationTitle = getInnerText('first-donation-title');
        const div = document.createElement('div');
        div.className = 'item gap-5 border border-gray-300 border-solid p-5 rounded-md mb-5'
        div.innerHTML = `
            <h1 class="font-bold text-xl mb-3"> ${thirdDonationInputN} Taka is Donated  ${thirdDonationTitle} </h1>
            <p class="text-gray-600"> ${new Date().toString()} </p>
        `
        donationList.appendChild(div);
    }
});