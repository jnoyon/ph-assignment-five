const currentBalance = document.getElementById('current-balance');
const modal = document.getElementById('modal');

// donation card one
const firstDonationBalance = document.getElementById('first-donation-balance');
const firstDonationInput = document.getElementById('first-donation-input');
const firstDonationButton = document.getElementById('first-donation-button');

firstDonationButton.addEventListener('click', function(e){
    e.preventDefault();
    const firstDonationButtonN = parseFloat(firstDonationInput.value);
    const firstDonationBalanceU = parseFloat(firstDonationBalance.innerText) + firstDonationButtonN;
    firstDonationBalance.innerText = firstDonationBalanceU;
    firstDonationInput.value = ''

    const currentBalanceU = parseFloat(currentBalance.innerText) - firstDonationButtonN;
    currentBalance.innerText = currentBalanceU;
    modal.showModal();
});

