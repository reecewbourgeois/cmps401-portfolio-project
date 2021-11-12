import { FC, useState } from 'react';
import { Button } from 'react-bootstrap';

/* Two */
import twoOfClubs from '../../files/photos/home/cards/2c.png';
import twoOfDiamonds from '../../files/photos/home/cards/2d.png';
import twoOfHearts from '../../files/photos/home/cards/2h.png';
import twoOfSpades from '../../files/photos/home/cards/2s.png';

/* Three */
import threeOfClubs from '../../files/photos/home/cards/3c.png';
import threeOfDiamonds from '../../files/photos/home/cards/3d.png';
import threeOfHearts from '../../files/photos/home/cards/3h.png';
import threeOfSpades from '../../files/photos/home/cards/3s.png';

/* Four */
import fourOfClubs from '../../files/photos/home/cards/4c.png';
import fourOfDiamonds from '../../files/photos/home/cards/4d.png';
import fourOfHearts from '../../files/photos/home/cards/4h.png';
import fourOfSpades from '../../files/photos/home/cards/4s.png';

/* Five */
import fiveOfClubs from '../../files/photos/home/cards/5c.png';
import fiveOfDiamonds from '../../files/photos/home/cards/5d.png';
import fiveOfHearts from '../../files/photos/home/cards/5h.png';
import fiveOfSpades from '../../files/photos/home/cards/5s.png';

/* Six */
import sixOfClubs from '../../files/photos/home/cards/6c.png';
import sixOfDiamonds from '../../files/photos/home/cards/6d.png';
import sixOfHearts from '../../files/photos/home/cards/6h.png';
import sixOfSpades from '../../files/photos/home/cards/6s.png';

/* Seven */
import sevenOfClubs from '../../files/photos/home/cards/7c.png';
import sevenOfDiamonds from '../../files/photos/home/cards/7d.png';
import sevenOfHearts from '../../files/photos/home/cards/7h.png';
import sevenOfSpades from '../../files/photos/home/cards/7s.png';

/* Eight */
import eightOfClubs from '../../files/photos/home/cards/8c.png';
import eightOfDiamonds from '../../files/photos/home/cards/8d.png';
import eightOfHearts from '../../files/photos/home/cards/8h.png';
import eightOfSpades from '../../files/photos/home/cards/8s.png';

/* Nine */
import nineOfClubs from '../../files/photos/home/cards/9c.png';
import nineOfDiamonds from '../../files/photos/home/cards/9d.png';
import nineOfHearts from '../../files/photos/home/cards/9h.png';
import nineOfSpades from '../../files/photos/home/cards/9s.png';

/* Ten */
import tenOfClubs from '../../files/photos/home/cards/10c.png';
import tenOfDiamonds from '../../files/photos/home/cards/10d.png';
import tenOfHearts from '../../files/photos/home/cards/10h.png';
import tenOfSpades from '../../files/photos/home/cards/10s.png';

/* Ace */
import aceOfClubs from '../../files/photos/home/cards/ac.png';
import aceOfDiamonds from '../../files/photos/home/cards/ad.png';
import aceOfHearts from '../../files/photos/home/cards/ah.png';
import aceOfSpades from '../../files/photos/home/cards/as.png';

/* Jack */
import jackOfClubs from '../../files/photos/home/cards/jc.png';
import jackOfDiamonds from '../../files/photos/home/cards/jd.png';
import jackOfHearts from '../../files/photos/home/cards/jh.png';
import jackOfSpades from '../../files/photos/home/cards/js.png';

/* King */
import kingOfClubs from '../../files/photos/home/cards/kc.png';
import kingOfDiamonds from '../../files/photos/home/cards/kd.png';
import kingOfHearts from '../../files/photos/home/cards/kh.png';
import kingOfSpades from '../../files/photos/home/cards/ks.png';

/* Queen */
import queenOfClubs from '../../files/photos/home/cards/qc.png';
import queenOfDiamonds from '../../files/photos/home/cards/qd.png';
import queenOfHearts from '../../files/photos/home/cards/qh.png';
import queenOfSpades from '../../files/photos/home/cards/qs.png';

/* Back */
import backOfCard from '../../files/photos/home/cards/back.png';

export const BlackjackGame: FC = () => {
  const [gameStarted, setGameStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [gameOverMessage, setGameOverMessage] = useState('');

  const [dealersHand, setDealersHand] = useState(<></>);
  const [dealersHandValue, setDealersHandValue] = useState(0);

  const [playersHand, setPlayersHand] = useState(<></>);
  const [playersHandValue, setPlayersHandValue] = useState(0);

  /* Generate a random number given a range */
  const getRandomNumberWithinRange = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  /* Generate a random card and send back its value and picture */
  const getRandomCard = () => {
    let card = '';
    let value = 0;

    /* Determine value */
    switch (getRandomNumberWithinRange(1, 13)) {
      case 1:
        card = 'aceOf';
        value = 11;
        break;
      case 2:
        card = 'twoOf';
        value = 2;
        break;
      case 3:
        card = 'threeOf';
        value = 3;
        break;
      case 4:
        card = 'fourOf';
        value = 4;
        break;
      case 5:
        card = 'fiveOf';
        value = 5;
        break;
      case 6:
        card = 'sixOf';
        value = 6;
        break;
      case 7:
        card = 'sevenOf';
        value = 7;
        break;
      case 8:
        card = 'eightOf';
        value = 8;
        break;
      case 9:
        card = 'nineOf';
        value = 9;
        break;
      case 10:
        card = 'tenOf';
        value = 10;
        break;
      case 11:
        card = 'jackOf';
        value = 10;
        break;
      case 12:
        card = 'queenOf';
        value = 10;
        break;
      default:
        card = 'kingOf';
        value = 10;
        break;
    }

    /* Determine face */
    switch (getRandomNumberWithinRange(1, 4)) {
      case 1:
        card += 'Clubs';
        break;
      case 2:
        card += 'Diamonds';
        break;
      case 3:
        card += 'Hearts';
        break;
      default:
        card += 'Spades';
        break;
    }

    /* Return card imported image based on finished string */
    switch (card) {
      case 'aceOfClubs':
        return {
          card: aceOfClubs,
          value: value,
        };
      case 'aceOfDiamonds':
        return {
          card: aceOfDiamonds,
          value: value,
        };
      case 'aceOfHearts':
        return {
          card: aceOfHearts,
          value: value,
        };
      case 'aceOfSpades':
        return {
          card: aceOfSpades,
          value: value,
        };
      case 'twoOfClubs':
        return {
          card: twoOfClubs,
          value: value,
        };
      case 'twoOfDiamonds':
        return {
          card: twoOfDiamonds,
          value: value,
        };
      case 'twoOfHearts':
        return {
          card: twoOfHearts,
          value: value,
        };
      case 'twoOfSpades':
        return {
          card: twoOfSpades,
          value: value,
        };
      case 'threeOfClubs':
        return {
          card: threeOfClubs,
          value: value,
        };
      case 'threeOfDiamonds':
        return {
          card: threeOfDiamonds,
          value: value,
        };
      case 'threeOfHearts':
        return {
          card: threeOfHearts,
          value: value,
        };
      case 'threeOfSpades':
        return {
          card: threeOfSpades,
          value: value,
        };
      case 'fourOfClubs':
        return {
          card: fourOfClubs,
          value: value,
        };
      case 'fourOfDiamonds':
        return {
          card: fourOfDiamonds,
          value: value,
        };
      case 'fourOfHearts':
        return {
          card: fourOfHearts,
          value: value,
        };
      case 'fourOfSpades':
        return {
          card: fourOfSpades,
          value: value,
        };
      case 'fiveOfClubs':
        return {
          card: fiveOfClubs,
          value: value,
        };
      case 'fiveOfDiamonds':
        return {
          card: fiveOfDiamonds,
          value: value,
        };
      case 'fiveOfHearts':
        return {
          card: fiveOfHearts,
          value: value,
        };
      case 'fiveOfSpades':
        return {
          card: fiveOfSpades,
          value: value,
        };
      case 'sixOfClubs':
        return {
          card: sixOfClubs,
          value: value,
        };
      case 'sixOfDiamonds':
        return {
          card: sixOfDiamonds,
          value: value,
        };
      case 'sixOfHearts':
        return {
          card: sixOfHearts,
          value: value,
        };
      case 'sixOfSpades':
        return {
          card: sixOfSpades,
          value: value,
        };
      case 'sevenOfClubs':
        return {
          card: sevenOfClubs,
          value: value,
        };
      case 'sevenOfDiamonds':
        return {
          card: sevenOfDiamonds,

          value: value,
        };
      case 'sevenOfHearts':
        return {
          card: sevenOfHearts,
          value: value,
        };
      case 'sevenOfSpades':
        return {
          card: sevenOfSpades,
          value: value,
        };
      case 'eightOfClubs':
        return {
          card: eightOfClubs,
          value: value,
        };
      case 'eightOfDiamonds':
        return {
          card: eightOfDiamonds,
          value: value,
        };
      case 'eightOfHearts':
        return {
          card: eightOfHearts,
          value: value,
        };
      case 'eightOfSpades':
        return {
          card: eightOfSpades,
          value: value,
        };
      case 'nineOfClubs':
        return {
          card: nineOfClubs,
          value: value,
        };
      case 'nineOfDiamonds':
        return {
          card: nineOfDiamonds,
          value: value,
        };
      case 'nineOfHearts':
        return {
          card: nineOfHearts,
          value: value,
        };
      case 'nineOfSpades':
        return {
          card: nineOfSpades,
          value: value,
        };
      case 'tenOfClubs':
        return {
          card: tenOfClubs,
          value: value,
        };
      case 'tenOfDiamonds':
        return {
          card: tenOfDiamonds,
          value: value,
        };
      case 'tenOfHearts':
        return {
          card: tenOfHearts,
          value: value,
        };
      case 'tenOfSpades':
        return {
          card: tenOfSpades,
          value: value,
        };
      case 'jackOfClubs':
        return {
          card: jackOfClubs,
          value: value,
        };
      case 'jackOfDiamonds':
        return {
          card: jackOfDiamonds,
          value: value,
        };
      case 'jackOfHearts':
        return {
          card: jackOfHearts,
          value: value,
        };
      case 'jackOfSpades':
        return {
          card: jackOfSpades,
          value: value,
        };
      case 'queenOfClubs':
        return {
          card: queenOfClubs,
          value: value,
        };
      case 'queenOfDiamonds':
        return {
          card: queenOfDiamonds,
          value: value,
        };
      case 'queenOfHearts':
        return {
          card: queenOfHearts,
          value: value,
        };
      case 'queenOfSpades':
        return {
          card: queenOfSpades,
          value: value,
        };
      case 'kingOfClubs':
        return {
          card: kingOfClubs,
          value: value,
        };
      case 'kingOfDiamonds':
        return {
          card: kingOfDiamonds,
          value: value,
        };
      case 'kingOfHearts':
        return {
          card: kingOfHearts,
          value: value,
        };
      case 'kingOfSpades':
        return {
          card: kingOfSpades,
          value: value,
        };
      default:
        return {
          card: backOfCard,
          value: value,
        };
    }
  };

  /* Start the game */
  const startTheGame = () => {
    setGameStarted(true);
    setGameOver(false);

    /* Randomize the dealer's cards */
    let { card: dealersCardOne, value: dealersCardOneValue } = getRandomCard();

    setDealersHand(
      <>
        <img src={dealersCardOne} alt={dealersCardOne} />
        <img className="ms-1" src={backOfCard} alt={backOfCard} />
      </>
    );
    setDealersHandValue(dealersCardOneValue);

    /* Randomize the player's cards */
    let { card: playersCardOne, value: playersCardOneValue } = getRandomCard();
    let { card: playersCardTwo, value: playersCardTwoValue } = getRandomCard();

    setPlayersHand(
      <>
        <img src={playersCardOne} alt={playersCardOne} />
        <img className="ms-1" src={playersCardTwo} alt={playersCardTwo} />
      </>
    );
    setPlayersHandValue(playersCardOneValue + playersCardTwoValue);
  };

  /* If the player hits */
  const playerHit = () => {
    let { card: playersCard, value: playersCardValue } = getRandomCard();
    let newValue = 0;

    /* If card is an ace and the newValue will be over 21, add 1 instead */
    if (
      playersCard === aceOfClubs ||
      playersCard === aceOfDiamonds ||
      playersCard === aceOfHearts ||
      playersCard === aceOfSpades
    ) {
      if (playersCardValue + playersHandValue > 21) {
        newValue = playersCardValue + playersHandValue - 10;
      } else {
        newValue = playersCardValue + playersHandValue;
      }
    } else {
      newValue = playersCardValue + playersHandValue;
    }

    setPlayersHand(
      <>
        {playersHand}
        <img className="ms-1" src={playersCard} alt={playersCard} />
      </>
    );
    setPlayersHandValue(newValue);

    if (newValue >= 21) {
      checkIfGameOver(dealersHandValue, newValue);
    }
  };

  /* If the dealer hits */
  const dealerHit = (newValue: number) => {
    let handValue = newValue;
    while (handValue < 17) {
      let { card: dealersCard, value: dealersCardValue } = getRandomCard();

      /* If card is an ace and the newValue will be over 21, add 1 instead */
      if (
        dealersCard === aceOfClubs ||
        dealersCard === aceOfDiamonds ||
        dealersCard === aceOfHearts ||
        dealersCard === aceOfSpades
      ) {
        if (dealersCardValue + handValue > 21) {
          handValue = dealersCardValue + handValue - 10;
        } else {
          handValue = dealersCardValue + handValue;
        }
      } else {
        handValue = dealersCardValue + handValue;
      }

      setDealersHand(
        <>
          {dealersHand}
          <img className="ms-1" src={dealersCard} alt={dealersCard} />
        </>
      );
      setDealersHandValue(handValue);
    }
    checkIfGameOver(handValue, playersHandValue);
  };

  /* If the player stands */
  const stand = () => {
    /* Reveal dealer's other card */
    let { card: dealersCardTwo, value: dealersCardTwoValue } = getRandomCard();
    let newValue = 0;

    /* If card is an ace and the newValue will be over 21, add 1 instead */
    if (
      dealersCardTwo === aceOfClubs ||
      dealersCardTwo === aceOfDiamonds ||
      dealersCardTwo === aceOfHearts ||
      dealersCardTwo === aceOfSpades
    ) {
      if (dealersCardTwoValue + dealersHandValue > 21) {
        newValue = dealersCardTwoValue + dealersHandValue - 10;
      } else {
        newValue = dealersCardTwoValue + dealersHandValue;
      }
    } else {
      newValue = dealersCardTwoValue + dealersHandValue;
    }

    setDealersHand(
      <>
        {dealersHand}
        <img src={dealersCardTwo} alt={dealersCardTwo} />
      </>
    );
    setDealersHandValue(newValue);

    /* If less than 17, hit */
    if (newValue < 17) {
      dealerHit(newValue);
    } else {
      checkIfGameOver(newValue, playersHandValue);
    }
  };

  /* Check if the game is over */
  const checkIfGameOver = (dealer: number, player: number) => {
    if (dealer > 21) {
      setGameOver(true);
      setGameOverMessage('Dealer busted! You win!');
    } else if (player > 21) {
      setGameOver(true);
      setGameOverMessage('You busted! Dealer wins!');
    } else if (dealer === 21) {
      setGameOver(true);
      setGameOverMessage('Dealer wins!');
    } else if (player === 21) {
      setGameOver(true);
      setGameOverMessage('You win!');
    } else if (player > dealer) {
      setGameOver(true);
      setGameOverMessage('You win!');
    } else if (dealer > player) {
      setGameOver(true);
      setGameOverMessage('Dealer wins!');
    } else {
      setGameOver(true);
      setGameOverMessage('Push!');
    }
  };

  return (
    <div className="blackjack-game-box">
      {/* If game has started, render the game. Otherwise render a button to start the game */}
      {gameStarted ? (
        /* If game has started */
        <>
          {/* If game has started and the game is not over, render the game. Otherwise, display who won and a play again button */}
          {gameOver ? (
            /* If game is over */
            <div className="center-the-button">
              <h1>{gameOverMessage}</h1>
              <Button onClick={startTheGame}>Play Again</Button>
            </div>
          ) : (
            /* If game is not over */
            <>
              {/* Dealer's side */}
              <div className="dealer-side">
                <h2 className="move-to-left">Dealer Hand Value: {dealersHandValue}</h2>
                {dealersHand}
              </div>

              {/* Player's side */}
              <div className="player-side">
                <h2 className="move-to-left">Player Hand Value: {playersHandValue}</h2>
                {playersHand}
                <br />
                <div className="mt-2">
                  <Button onClick={playerHit}>Hit</Button>
                  <span className="ms-2">Or</span>
                  <Button className="ms-2" onClick={stand}>
                    Stand
                  </Button>
                </div>
              </div>
            </>
          )}
        </>
      ) : (
        /* If game has not started */
        <>
          <Button className="center-the-button" onClick={startTheGame}>
            Start Game
          </Button>
        </>
      )}
    </div>
  );
};
