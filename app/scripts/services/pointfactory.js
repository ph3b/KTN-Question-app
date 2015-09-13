'use strict';

/**
 * @ngdoc service
 * @name ktnAppApp.PointFactory
 * @description
 * # PointFactory
 * Factory in the ktnAppApp.
 */
angular.module('ktnAppApp')
  .factory('PointFactory', function (localStorageService) {
    if(localStorageService.get('totalQuestionsAnswered') === null){
      localStorageService.set('totalQuestionsAnswered', 0);
    }
    if(localStorageService.get('correctlyAnsweredQuestions') === null){
      localStorageService.set('correctlyAnsweredQuestions', 0);
    }

    return {
      getTotalQuestionAnswered: function () {
        return localStorageService.get('totalQuestionsAnswered');
      },
      getCorrectAnsweredQuestions: function(){
        return localStorageService.get('correctlyAnsweredQuestions');
      },
      answeredAQuestion: function(){
        var answeredQuestions = localStorageService.get('totalQuestionsAnswered');
        return localStorageService.set('totalQuestionsAnswered', answeredQuestions + 1);
      },
      answeredAQuestionCorrectly: function(){
        var correctlyAnsweredQuestions = localStorageService.get('correctlyAnsweredQuestions');
        return localStorageService.set('correctlyAnsweredQuestions', correctlyAnsweredQuestions + 1);
      },
      resetScore: function(){
        localStorageService.set('totalQuestionsAnswered', 0);
        localStorageService.set('correctlyAnsweredQuestions', 0);
      }
    };
  });
