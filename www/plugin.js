
var exec = require('cordova/exec');

var PLUGIN_NAME = 'WebIntentPlugin';

var WebIntentPlugin = {

  ACTION_SEND: "android.intent.action.SEND",
  ACTION_VIEW: "android.intent.action.VIEW",
  EXTRA_TEXT : "android.intent.extra.TEXT",
  EXTRA_SUBJECT : "android.intent.extra.SUBJECT",
  EXTRA_STREAM : "android.intent.extra.STREAM",
  EXTRA_EMAIL : "android.intent.extra.EMAIL",
  ACTION_CALL : "android.intent.action.CALL",
  ACTION_SENDTO : "android.intent.action.SENDTO",

  startActivity: function(params, success, fail) {
    return exec(function(args) {
      success(args);
    }, function(args) {
      fail(args);
    }, PLUGIN_NAME, 'startActivity', [params]);
  },
  hasExtra: function(params, success, fail) {
    return cordova.exec(function(args) {
      success(args);
    }, function(args) {
      fail(args);
    }, PLUGIN_NAME, 'hasExtra', [params]);
  },

  getUri : function(success, fail) {
    return cordova.exec(function(args) {
      success(args);
    }, function(args) {
      fail(args);
    }, PLUGIN_NAME, 'getUri', []);
  },

  getExtra : function(params, success, fail) {
    return cordova.exec(function(args) {
      success(args);
    }, function(args) {
      fail(args);
    }, PLUGIN_NAME, 'getExtra', [params]);
  },


  onNewIntent : function(callback) {
    return cordova.exec(function(args) {
      callback(args);
    }, function(args) {
    }, PLUGIN_NAME, 'onNewIntent', []);
  },

  sendBroadcast : function(params, success, fail) {
    return cordova.exec(function(args) {
      success(args);
    }, function(args) {
      fail(args);
    }, PLUGIN_NAME, 'sendBroadcast', [params]);
  }
};

module.exports = WebIntentPlugin;
