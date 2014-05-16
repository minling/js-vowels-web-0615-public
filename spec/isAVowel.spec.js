'use strict';

describe('isAVowel', function() {

  var isAVowel;
  beforeEach(function() {
    isAVowel = require('../lib/isAVowel');
  });

  describe('Your first test', function() {

    it('knows that "a" is a vowel', function(){
      expect(isAVowel("a")).toBe(true);
    });

    it('knows that "e" is a vowel', function(){
      expect(isAVowel("e")).toBe(true);
    });

    it('knows that "i" is a vowel', function(){
      expect(isAVowel("i")).toBe(true);
    });

    it('knows that "o" is a vowel', function(){
      expect(isAVowel("o")).toBe(true);
    });

    it('knows that "u" is a vowel', function(){
      expect(isAVowel("u")).toBe(true);
    });

    it('knows that "b" is not a vowel', function(){
      expect(isAVowel("b")).toBe(false);
    });

    it('knows that "c" is not a vowel', function(){
      expect(isAVowel("c")).toBe(false);
    });
  });

});
