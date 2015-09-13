'use strict';

/**
 * @ngdoc service
 * @name ktnAppApp.QuestionFactory
 * @description
 * # QuestionFactory
 * Factory in the ktnAppApp.
 */
angular.module('ktnAppApp')
  .factory('QuestionFactory', function ($q, $http) {
    var apiUrl = 'https://ktnapp.herokuapp.com/api/';
    return {
      getRandomQuestion: function () {
        var defer = $q.defer();

        $http.get(apiUrl + '/question/random')

          .success(function(question){
            defer.resolve(question);
          })
          .error(function(err){
            console.log(err)
          });
        return defer.promise;

      },
      getCorrectAnswer: function(questionId, answer){
        var defer = $q.defer();

        $http.post(apiUrl + '/question/answer/' + questionId)

          .success(function(response){
            defer.resolve(response);
          })
          .error(function(err){
            console.log(err)
          });

        return defer.promise;
      }
    };
  });
