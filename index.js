function rollDice() {
    const numberOfDice = parseInt(document.getElementById("NumberOfDice").value);
    const diceResult = document.getElementById("diceResult");
    const diceimages = document.getElementById("diceimages");
  
    const values = [];
    const images = [];
  
    for (let i = 0; i < numberOfDice; i++) {
      const value = Math.floor(Math.random() * 6) + 1;
      values.push(value);
      images.push(`<img src="DiceImages/${value}.png" alt="Dice ${value}" class="dice">`);
    }
  
    diceResult.textContent = `You rolled: ${values.join(', ')}`;
    diceimages.innerHTML = images.join('');
  }
  