import HUDUI from "./hudui";

// @ts-ignore
window.callGlobal = function(...args) {
    if (args.length == 0) {
        return;
    }

    const cmd = args[0];
    switch(cmd) {
        case "setMaxAmmo":
            HUDUI.Instance.setMaxAmmo(args[1]);
            break;
        case "updateAmmo":
            HUDUI.Instance.updateAmmo(args[1]);
            break;
    }
}
