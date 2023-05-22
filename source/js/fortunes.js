// fortune objects
const fortunes = {
    good: {
        message: [
            'Do not be afraid of competition.',
            'An exciting opportunity lies ahead of you.',
            'You love peace.',
            'Get your mind set…confidence will lead you on.',
            'You will always be surrounded by true friends.',
            'Sell your ideas-they have exceptional merit.',
            'You should be able to undertake and complete anything.',
            'You are kind and friendly.',
            'You are wise beyond your years.',
            'Your ability to juggle many tasks will take you far.',
            'A routine task will turn into an enchanting adventure.',
            'Beware of all enterprises that require new clothes.',
            'Be true to your work, your word, and your friend.',
            'Goodness is the only investment that never fails.',
            'A journey of a thousand miles begins with a single step.',
            'Forget injuries; never forget kindnesses.',
            'Respect yourself and others will respect you.',
            'A man cannot be comfortable without his own approval.',
            'Always do right. This will gratify some people and astonish the rest.',
            'It is easier to stay out than to get out.',
            'Sing everyday and chase the mean blues away.',
            'You will receive money from an unexpected source.',
            'Attitude is a little thing that makes a big difference.',
            'Plan for many pleasures ahead.',
            'Experience is the best teacher.',
            'You will be happy with your spouse.',
            'Expect the unexpected.',
            'Stay healthy. Walk a mile.',
            'The family that plays together stays together.',
            'Eat chocolate to have a sweeter life.',
            'Once you make a decision the universe conspires to make it happen.',
            'Make yourself necessary to someone.',
            'The only way to have a friend is to be one.',
            'Nothing great was ever achieved without enthusiasm.',
            'Dance as if no one is watching.',
            'Live this day as if it were your last.',
            'Your life will be happy and peaceful.',
            'Reach for joy and all else will follow.',
            'Move in the direction of your dreams.',
            'Bloom where you are planted.',
            'Appreciate. Appreciate. Appreciate.',
            'Happy News is on its way.',
            'You are safe. You are kind. You are good. You are not broken. Your light matters.',
            'Dont let anybody steal your inner sparkle.',
            'Dont give away your power.',
            'Be on the alert to recognize your prime at whatever time of your life it may occur.',
            'Your road to glory will be rocky, but fulfilling.',
            'Courage is not simply one of the virtues, but the form of every virtue at the testing point.',
            'Patience is your alley at the moment. Dont worry!',
            'Nothing is impossible to a willing heart.',
            'Dont worry about money. The best things in life are free.',
            'Dont pursue happiness, create it.',
        ]
    }, 
  
    neutral: {
        message: [
            'You will have a normal day.',
            'You will eat something today.',
            'You will breathe air.',
            'You will sleep tonight.',
            'You will read this fortune.',
        ]
    },
  
    bad: {
        message: [
            'You will be bitten by a squirrel.',
            'You will face a great challenge that you are not prepared for.',
            'You will disappoint someone who cares about you.',
            'You will miss an important opportunity that will not come again.',
            'You will discover a shocking truth that will change your life.',
            'You will suffer a loss that will make you question everything.',
            'You will soon have an unpleasant encounter with a stranger.',
            'Your dreams are too big for your abilities.',
            'You have made some enemies who are plotting against you.',
            'You will lose something valuable in the near future.',
            'You will regret your next decision.',
        ]
    },

    easter_egg: {
        message: [
            'Help! I am being held prisoner in a fortune cookie factory',
            'Opps... Wrong cookie.',
            'Some fortune cookies contain no fortune.',
            'Run!!!',   // when this shows up, maybe add some feature?
            'Erm… Is this good?',
            'You have just eaten a poisoned cookie',
        ]
    }

  };
  // Function to show the message
  function showMessage() {

    // not sure if random give out a good, bad, or netural fortune telling
    //const selectedFortune = // TODO
  
  
    //const fortuneData = fortunes[selectedFortune];
    //const randomIndex = Math.floor(Math.random() * fortuneData.message.length);
    //const randomMessage = fortuneData.message[randomIndex];
  }

