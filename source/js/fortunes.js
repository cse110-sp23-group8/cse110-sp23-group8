// fortune objects
class gameObject {
  constructor() {
    this.score = 0;
    this.weird = 0;
    this.fortunes = {
      romantic: [
        'You and your partner will embark on a dreamy getaway together.',
        'A secret admirer will reveal their feelings for you.',
        'You will experience a deep and meaningful connection with someone new.',
        'A romantic gesture from your partner will melt your heart.',
        'You will be surprised with a bouquet of your favorite flowers.',
        'A romantic candlelit dinner will set the stage for a memorable evening.',
        'You will receive a heartfelt declaration of love.',
        'You and your partner will create beautiful memories together.',
        'An unexpected love confession will make your heart flutter.',
        'A romantic adventure awaits you and your loved one.',
        'You will receive a heartfelt love letter.',
        'A surprise romantic dinner awaits you.',
        'You will meet someone who will sweep you off your feet.',
        'Love is in the air, and it is heading your way.',
        'You will share a passionate kiss with someone special.',
        'You and your partner will share a passionate and unforgettable kiss.',
        'A surprise romantic getaway is in store for you and your loved one.',
        'You will receive a heartfelt love note that will make your heart melt.',
        'A romantic candlelit dinner will be prepared just for you.',
        'You will experience a magical and romantic moment under the stars.',
        'Love will find you when you least expect it, bringing joy and happiness.',
        'A beautiful bouquet of roses will be delivered to your doorstep as a token of love.',
        'You will have a romantic date night filled with laughter, connection, and love.',
        'A serenade of love songs will be dedicated to you by someone special.',
        'You and your partner will create cherished memories that will last a lifetime.',
        'A romantic gesture from your partner will make you feel truly cherished.',
        'You will receive a heartfelt love confession from someone who adores you.',
        'A surprise romantic gesture will sweep you off your feet.',
        'You will be surrounded by love and affection from those closest to you.',
        'You and your partner will embark on a romantic adventure together.',
      ],
      good: [
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
        'Dont pursue happiness, create it.'
      ],
      neutral: [
        'You will have a normal day.',
        'You will eat something today.',
        'You will breathe air.',
        'You will sleep tonight.',
        'You will read this fortune.',
        'You will encounter a friendly stranger.',
        'You will receive a phone call from a long-lost friend.',
        'You will find a lucky penny on the street.',
        'You will discover a new favorite song.',
        'You will receive a compliment that brightens your day.',
        'You will find unexpected joy in a simple moment.',
        'You will witness a beautiful sunset.',
        'You will receive a small gift that brings a smile to your face.',
        'You will stumble upon a peaceful place that brings you tranquility.',
        'You will have a moment of clarity that helps you solve a problem.',
        'You will discover a new book or movie that captivates your interest.',
        'You will receive a kind gesture from a stranger.',
        'You will have a moment of inspiration that sparks your creativity.',
        'You will enjoy a delicious meal prepared with love.',
        'You will find comfort in the embrace of a loved one.',
        'You will experience a moment of pure laughter and joy.',
        'You will encounter new opportunities for growth.',
        'You will find joy in the simple pleasures of life.',
        'You will receive unexpected support from someone.',
        'A moment of peace and tranquility will come your way.',
        'You will discover new perspectives and insights.',
        'You will make meaningful connections with others.',
        'A new chapter of your life will begin.',
        'You will find comfort in the embrace of loved ones.',
        'You will experience moments of gratitude and contentment.',
        'A small act of kindness will brighten your day.',
        'You will overcome challenges with resilience and strength.',
        'A new friendship will blossom.'
      ],
      bad: [
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
        'You will forget your wallet at home when you need it the most.',
        'You will lose your keys and spend hours searching for them.',
        'You will receive a parking ticket on a day when there are no available spots.',
        'You will get a flat tire in the middle of nowhere.',
        'You will encounter a never-ending line at the grocery store checkout.',
        'You will be stuck in traffic during rush hour.',
        'You will experience a power outage right before your favorite TV show starts.',
        'You will drop your phone in the toilet.',
        'You will accidentally step on a Lego.',
        'Your favorite dessert will fall on the ground before you can eat it.',
        'You will get a bad haircut that takes months to grow out.',
        'You will experience a series of unfortunate wardrobe malfunctions.',
        'You will experience a series of unfortunate events.',
        'A dark cloud will loom over your day.',
        'You will face unexpected obstacles and challenges.',
        'Disappointment will find its way to you.',
        'You will miss out on a great opportunity.',
        'A shocking revelation will shake your world.',
        'Loss and sorrow will darken your path.',
        'You will encounter difficult and unpleasant people.',
        'Your dreams will crumble before your eyes.',
        'You will lose something valuable and irreplaceable.',
        'Regret will haunt your next decision.',
        'Misfortune will follow you wherever you go.'
      ],
      weird: [
        'Help! I am being held prisoner in a fortune cookie factory',
        'Opps... Wrong cookie.',
        'Some fortune cookies contain no fortune.',
        'Run!!!',
        'Erm… Is this good?',
        'You have just eaten a poisoned cookie',
        'Beware of the talking fortune cookie.',
        'Your fortune will self-destruct in 5...4...3...2...1...',
        'You will discover a hidden message in a fortune cookie that will change your life.',
        'Your fortune will be delivered by a fortune-telling robot.',
        'You will encounter a fortune cookie that predicts the weather with 100% accuracy.',
        'Your fortune will come true only if you perform a secret dance.',
        'You will receive a fortune cookie with a message from the future.',
        'Beware of fortune cookies that can predict the lottery numbers.',
        'You will find a fortune cookie that grants you three wishes.',
        'Your fortune will be delivered by a fortune-telling parrot.',
        'Beware of the flying fortune cookies!',
        'You will encounter a fortune cookie that predicts the color of your socks.',
        'A fortune cookie will reveal your past life as a ninja squirrel.',
        'You will discover a fortune cookie that speaks in riddles.',
        'Your fortune will mysteriously disappear before you can read it.',
        'A fortune cookie will lead you to a hidden treasure trove of socks.',
        'You will receive a fortune that predicts a spontaneous dance party in your honor.',
        'Beware of fortune cookies that can predict the outcome of rock-paper-scissors.',
        'You will encounter a fortune cookie that writes poetry about your future.',
        'A fortune cookie will reveal the secret recipe for eternal happiness.',
        'Your fortune will be delivered by a fortune-telling octopus.',
        'You will find a fortune cookie that predicts the color of your next sneeze.',
        'Beware of fortune cookies that can communicate with ghosts.',
        'You will receive a fortune that predicts a day filled with unusually shaped clouds.',
        'A fortune cookie will reveal your true spirit animal.',
        'You will stumble upon a fortune cookie that predicts the result of a thumb war.',
        'Your fortune will be written in a language only dolphins can understand.',
        'Beware of fortune cookies that can predict the outcome of a coin toss.',
        'You will encounter a fortune cookie that predicts the temperature of your next cup of tea.',
        'A fortune cookie will reveal a secret message from a parallel universe.'
      ]
    };
  }

  incrementScore() {
    this.score++;
  }

  decrementScore() {
    this.score--;
  }

  incrementWeird() {
    this.weird++;
  }

  getFortune() {
    const weirdness = Math.floor(Math.random() * 4);
    const isWeird = weirdness < this.weird;

    if (isWeird) {
      return this.fortunes.weird[Math.floor(Math.random() * this.fortunes.weird.length)];
    } else {
      if (this.score === 3) {
        return this.fortunes.romantic[Math.floor(Math.random() * this.fortunes.romantic.length)];
      } else if (this.score < 3 && this.score > 1) {
        return this.fortunes.good[Math.floor(Math.random() * this.fortunes.good.length)];
      } else if (this.score <= 1 && this.score >= -1) {
        return this.fortunes.neutral[Math.floor(Math.random() * this.fortunes.neutral.length)];
      } else {
        return this.fortunes.bad[Math.floor(Math.random() * this.fortunes.bad.length)];
      }
    }
  }
}


export default gameObject;
