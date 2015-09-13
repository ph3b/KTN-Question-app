'use strict';

/**
 * @ngdoc function
 * @name ktnAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ktnAppApp
 */
angular.module('ktnAppApp')
  .controller('MainCtrl', function ($scope, QuestionFactory, PointFactory, $timeout) {
    var spamClickDestroyer = 0;
    $scope.questionIsLoading = true;

    $scope.answerQuestion = function(userAnswer) {
      if(spamClickDestroyer === 1){
        return;
      }
      spamClickDestroyer = 1;
      $scope.userAnswer = userAnswer;

      QuestionFactory.getCorrectAnswer($scope.question._id).then(function(correctAnswer){

        $scope.correctAnswer = correctAnswer;

        if(userAnswer === correctAnswer){
          PointFactory.answeredAQuestionCorrectly();
        }

        PointFactory.answeredAQuestion();

        $scope.totalQuestionsAnswered = PointFactory.getTotalQuestionAnswered();
        $scope.correctAnsweredQuestions = PointFactory.getCorrectAnsweredQuestions();

        $timeout(function(){
          $scope.questionIsLoading = true;
          getNewQuestion();
          spamClickDestroyer = 0;
        }, 2000);
      });
    };

    $scope.resetScore = function(){
      PointFactory.resetScore();
      return getScore();
    };

    var getScore = function(){
      $scope.totalQuestionsAnswered = PointFactory.getTotalQuestionAnswered();
      $scope.correctAnsweredQuestions = PointFactory.getCorrectAnsweredQuestions();
    };

    var getNewQuestion = function(){
      $scope.question = '';
      $scope.correctAnswer = '';

      QuestionFactory.getRandomQuestion().then(function(randomQuestion){
        $scope.question = randomQuestion;
        $scope.questionIsLoading = false;
      });
    };
    getNewQuestion();
    getScore();
  });
