/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 73:
/***/ (function() {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
//---Define static constant objects---
var s_cssText = ".kix-page-paginated {filter: invert(1);}";
// Reference
// https://developer.mozilla.org/en-US/docs/Web/API/Crypto/randomUUID
var s_sessionStorageKey = "__79dae371-cc51-44cc-bb76-5c14e8c8d273__";
var s_sessionStorageValue = 1;
//---|
function onClicked_Impl(tab) {
    return __awaiter(this, void 0, void 0, function () {
        var cssInjection, sessionStorageObject, v1, alreadyInjected;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (tab.id === undefined) {
                        return [2 /*return*/];
                    }
                    cssInjection = {
                        css: s_cssText,
                        target: { tabId: tab.id }
                    };
                    sessionStorageObject = (_a = {}, _a[s_sessionStorageKey] = s_sessionStorageValue, _a);
                    return [4 /*yield*/, chrome.storage.session.get(s_sessionStorageKey)];
                case 1:
                    v1 = _b.sent();
                    alreadyInjected = (v1[s_sessionStorageKey] === s_sessionStorageValue);
                    if (!alreadyInjected) return [3 /*break*/, 4];
                    return [4 /*yield*/, chrome.scripting.removeCSS(cssInjection)];
                case 2:
                    _b.sent();
                    return [4 /*yield*/, chrome.storage.session.remove(s_sessionStorageKey)];
                case 3:
                    _b.sent();
                    console.log("reverted");
                    return [3 /*break*/, 7];
                case 4: return [4 /*yield*/, chrome.scripting.insertCSS(cssInjection)];
                case 5:
                    _b.sent();
                    return [4 /*yield*/, chrome.storage.session.set(sessionStorageObject)];
                case 6:
                    _b.sent();
                    console.log("injected");
                    _b.label = 7;
                case 7: return [2 /*return*/];
            }
        });
    });
}
chrome.action.onClicked.addListener(onClicked_Impl);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__[73]();
/******/ 	
/******/ })()
;