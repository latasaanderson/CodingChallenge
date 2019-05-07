var AutocompleteProvider = require('./AutocompleteProvider');
var readlineSync = require('readline-sync');

/**
 * @author Latasa Roland
 *
 * Test the AutocompleteProvider using the command line
 * The user has 3 options:
 *    1 - search
 *    2 - train
 *    3 - quit
 *
 * search - The user can type in searches for words that match the fragment.  The fragment must be a prefix to the word.
 *
 * train - The user can teach the AutocompleteProvider by inputting words or sentences.
 *
 */

try {
    var autoCompleteProvider = new AutocompleteProvider();
    while (true) {
      var answer = readlineSync.question("Enter 1 to search | Enter 2 to train the algorithm | Enter 3 to quit: \n");
      if(answer === "1"){
        word_fragment = readlineSync.question("Enter a word fragment to return a list of auto completes: \n");
        console.log(autoCompleteProvider.getWords(word_fragment))
      } else if(answer === "2"){
        word_fragment = readlineSync.question("Enter a word fragment to train the autocomplete algorithm: \n");
        autoCompleteProvider.train(word_fragment)
      } else if(answer === "3"){
          break;
      } else{
          console.log("User error: Invalid user input, please enter the number: 1, 2 or 3 . \n\n");
        }
    }
}
catch (e) {
 console.log("Error - Entering catch block");
 console.log(e);
}
