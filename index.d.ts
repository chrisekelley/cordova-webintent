/**
 * This plugin defines a global node service
 * Although the object is in the global scope, it is not available until after the deviceready event.
 */
interface webintent {
    /** Kick things into gear. */
    getUri(): Function;

}

declare var webintent;