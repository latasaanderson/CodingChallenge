var TrieSearch = require('trie-search');
var FastPriorityQueue = require('fastpriorityqueue');
var Candidate = require('./Candidate');

/**
 * AutocompleteProvider
 * This is a command line interface that allows the interactive entry of training text
 * and also allows the user to provide word fragments and get autocomplete suggestions in return.
 * It uses Trie-Search data structure and the FastPriorityQueue module.
**/

/**
 * @constructor
 *
 * Initializes the TrieSearch and FastPriorityQueue
 */
var AutocompleteProvider = function() {
  this.trieSearch = new TrieSearch('fragment');
  this.fastQueue = new FastPriorityQueue(function(a, b) {
    return a.getConfidence() > b.getConfidence();
  });
};

AutocompleteProvider.prototype = {
  /**
  * getWords
  *
  * @param fragment beginning of the word 
  * Returns a list of candidates ordered by confidence
  */
  getWords: function(fragment) {
    var candidates = [];
    var results  = this.trieSearch.get(fragment);
    for (var i=0; i< results.length; i++){
      this.fastQueue.add (results[i]['candidateObj'])
    }
    while (!this.fastQueue.isEmpty()) {
      var candidate = this.fastQueue.poll()
      candidates.push(candidate.getWord() + "("+candidate.getConfidence()+")");
    }
    this.fastQueue.trim();
    return candidates;
  },

  /**
  * train
  *
  * @param passage trains the algorithm with the provided passage
  */
  train: function(passage) {
    var array = []
      var passage = passage.toLowerCase()
      var passage_arr = passage.split(/[ _?!.,:;]+/);
      for (var i = 0; i < passage_arr.length; i++){
        var obj = {}
        searchResults = this.trieSearch.get(passage_arr[i])
        if (searchResults.length > 0){
          for (var j=0; j < searchResults.length; j++){
            searchResults[j].candidateObj.setConfidence()
          }
        } else {
          obj['fragment'] = passage_arr[i]
          obj['candidateObj'] = new Candidate(passage_arr[i], 1)
          this.trieSearch.add(obj)
        }
      }
  }
}
module.exports = AutocompleteProvider;
