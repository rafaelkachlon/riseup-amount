const interval = setInterval(() => {
  const containers = document.querySelectorAll('.cards-container');
  if (!!containers.length) {
    clearInterval(interval);
    var cards = containers[containers.length - 1].querySelectorAll('.amount');

    const total = [...cards].reduce((acc, curr) => {
      const amount = curr.innerText.split(' ')[1].replace(',', '');
      return acc + parseFloat(amount);
    }, 0);

    const disclaimer = document.querySelector('.credit-card-disclaimer');
    var totalSpan = document.createElement('span');
    totalSpan.style.float = 'left';
    totalSpan.innerText = total.toLocaleString();
    totalSpan.style.direction = 'ltr';
    totalSpan.style.color = total >= 0 ? '#00c070' : '#ff653f';
    disclaimer.append(totalSpan);
  }
}, 1000);
