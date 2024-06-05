//---Define static constant objects---
const s_cssText: string = ".kix-page-paginated {filter: invert(1);}";

// Reference
// https://developer.mozilla.org/en-US/docs/Web/API/Crypto/randomUUID
const s_sessionStorageKey: string = "__79dae371-cc51-44cc-bb76-5c14e8c8d273__";
const s_sessionStorageValue: number = 1;
//---|

async function onClicked_Impl(tab:chrome.tabs.Tab) : Promise<void>
{
    if (tab.id === undefined) {return;}

    //---Define local constant objects---
    const cssInjection: chrome.scripting.CSSInjection = 
    {
        css: s_cssText,
        target: {tabId:tab.id}
    }
    const sessionStorageObject = {[s_sessionStorageKey]:s_sessionStorageValue};
    //---|

    //---Is alredy injected?---
    let v1 = await chrome.storage.session.get(s_sessionStorageKey);
    const alreadyInjected: boolean = (v1[s_sessionStorageKey] === s_sessionStorageValue);
    //---|

    if (alreadyInjected)
    {
        await chrome.scripting.removeCSS(cssInjection);
        await chrome.storage.session.remove(s_sessionStorageKey)
        console.log("reverted");
    }
    else
    {
        await chrome.scripting.insertCSS(cssInjection);
        await chrome.storage.session.set(sessionStorageObject)
        console.log("injected");
    }
}

chrome.action.onClicked.addListener(onClicked_Impl);