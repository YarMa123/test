require('update-electron-app')()]
const { app, BrowserWindow } = require("electron");

let mainWindow = null

app.whenReady().then(() => {
    const { screen } = require('electron')
    const primaryDisplay = screen.getPrimaryDisplay()
    const { width, height } = primaryDisplay.workAreaSize
    mainWindow = new BrowserWindow({
        width,
        height,
        resizable: false,
        maximizable: false,
        minimizable: false,
        webPreferences: {
            nodeIntegration: true,
        },
    })
    // mainWindow.setMenuBarVisibility(false);

    mainWindow.fullScreen = true;
    mainWindow.show();
    mainWindow.setTitle("Game");
    mainWindow.loadFile("src/index.html");

});
app.on("window-all-closed", () => app.quit());