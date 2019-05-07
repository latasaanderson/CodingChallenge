/**
 * Candidate
 * @constructor
 * @param word- autocomplete word
 * @param confidence - level of confidence for word
 *
 */
var Candidate = function(word, confidence) {
  this.word = word;
  this.confidence = confidence;
};

Candidate.prototype = {
  constructor: Candidate,
  /**
  * getWord
  *
  * Returns an autocomplete option
  */
  getWord: function() {
    // returns the autocomplete option
    return this.word;
  },

  /**
  * getWord
  *
  * Returns a level of confience for the autocomplete option
  */
  getConfidence: function() {
      // returns the confidence for the option
      return this.confidence;
  },

  /**
  * setConfidence
  *
  * Sets the level of confidence
  */
  setConfidence: function () {
    this.confidence++;
  }


}
module.exports = Candidate;
