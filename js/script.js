const currentBalance = document.getElementById('current-balance');
const modal = document.getElementById('modal');

const donationTab = document.getElementById('donation-tab');
const historyTab = document.getElementById('history-tab');
const historySection = document.getElementById('history-section');
const donationSection = document.getElementById('donation-section');


const donationList = document.getElementById('donation-list');

// donation card one
const firstDonationBalance = document.getElementById('first-donation-balance');
const firstDonationInput = document.getElementById('first-donation-input');
const firstDonationButton = document.getElementById('first-donation-button');


// Tab Section
donationTab.addEventListener('click', function(){
    historySection.classList.add('hidden');
    donationSection.classList.remove('hidden');
    donationTab.classList.add('px-4', 'py-2', 'bg-lime-400', 'rounded-md', 'border-solid', 'border-lime-400', 'border');
    historyTab.classList.remove('bg-lime-400', 'rounded-md', 'border-solid', 'border-lime-400', 'border');
    historyTab.classList.add('border-gray-300', 'border-solid', 'border', 'rounded-md');
});

historyTab.addEventListener('click', function(){
    historySection.classList.remove('hidden');
    donationSection.classList.add('hidden');
    historyTab.classList.add('px-4', 'py-2', 'bg-lime-400', 'rounded-md', 'border-solid', 'border-lime-400', 'border');
    donationTab.classList.remove('bg-lime-400', 'border', 'border-solid', 'border-lime-400');
    donationTab.classList.add('border-gray-300', 'border-solid', 'border', 'rounded-md');
});



firstDonationButton.addEventListener('click', function(e){
    e.preventDefault();
    

    const firstDonationButtonN = parseFloat(firstDonationInput.value);
    const firstDonationBalanceU = parseFloat(firstDonationBalance.innerText) + firstDonationButtonN;
    firstDonationBalance.innerText = firstDonationBalanceU;
    firstDonationInput.value = ''

    const currentBalanceU = parseFloat(currentBalance.innerText) - firstDonationButtonN;
    currentBalance.innerText = currentBalanceU;
    modal.showModal();

    const div = document.createElement('div');
    div.className = 'item gap-5 border border-gray-300 border-solid p-5 rounded-md mb-5'
    div.innerHTML = `
        <h1 class="font-bold text-xl mb-3"> ${firstDonationButtonN} Taka is Donated for the </h1>
        <p class="text-gray-600"> ${new Date().toLocaleDateString()} </p>
    `
    donationList.appendChild(div);

});


