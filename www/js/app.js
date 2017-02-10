angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
  $stateProvider
  .state('tabs',{
    url:'/tab',
    templateUrl:'templates/tabs.html'
  })
  .state('tabs.home',{
    url:'/home',
    views:{
      'home-tab':{
        templateUrl:'templates/home.html'
      }
    }
  })
  .state('tabs.fact',{
    url:'/fact',
    views:{
      'home-tab':{
        templateUrl:'templates/fact.html'
      }
    }
  })
  .state('tabs.facts',{
    url:'/facts',
    views:{
      'home-tab':{
        templateUrl:'templates/facts.html'
      }
    }
  })
  .state('tabs.about',{
    url:'/about',
    views:{
      'about-tab':{
        templateUrl:'templates/about.html'
      }
    }
  })
  .state('tabs.contact',{
    url:'/contact',
    views:{
      'contact-tab':{
        templateUrl:'templates/contact.html'
      }
    }
  })

.state('tabs.test1',{
    url:'/test1',
    views:{
      'home-tab':{
        templateUrl:'templates/test1.html'
      }
    }
  })  
.state('tabs.test2',{
    url:'/test2',
    views:{
      'home-tab':{
        templateUrl:'templates/test2.html'
      }
    }
  })
  $urlRouterProvider.otherwise('/tab/home')
}])