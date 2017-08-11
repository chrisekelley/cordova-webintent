/**
 * This plugin defines a global node service
 * Although the object is in the global scope, it is not available until after the deviceready event.
 */
interface WebIntentPlugin {
    startActivity(): Function;
    hasExtra(): Function;
    getUri(): Function;
    getExtra(): Function;
    onNewIntent(): Function;
    sendBroadcast(): Function;
}

declare var WebIntentPlugin;