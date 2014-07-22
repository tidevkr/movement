// The contents of this file will be executed before any of
// your view controllers are ever executed, including the index.
// You have access to all functionality on the `Alloy` namespace.
//
// This is a great place to do any initialization for your app
// or create any global variables/functions that you'd like to
// make available throughout your app. You can easily make things
// accessible globally by attaching them to the `Alloy.Globals`
// object. For example:
//
// Alloy.Globals.someGlobalFunction = function(){};


// 앱이 종료후에도 기억해야하는 앱 관련 세팅정보를 저장하는 Model
// 필요한 곳에서 코드 한줄로 불러와서 사용하면 됩니다.(Singleton)
// initialize할때 fetch하므로 따로 fetch할 필요가 없다.
var settings = Alloy.Models.instance('settings');
Ti.API.info(settings.get('test'));
// settings.save('test',100);
