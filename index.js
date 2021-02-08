const { app, BrowserWindow, ipcMain } = require("electron");

function createWindow() {
  let appWindow = new BrowserWindow({
    width: 800,
    height: 600,
    center: true,
    minWidth: 500,
    show: false
  });
  appWindow.loadFile("./index.html");

  appWindow.on("closed", () => {
    appWindow = null;
  });

  let aboutWindow = new BrowserWindow({
    width: 400,
    height: 180,
    frame: false,
    show: false,
    webPreferences: {
      nodeIntegration: true
    }
  });

  aboutWindow.loadFile("about.html");

  aboutWindow.on("closed", () => {
    aboutWindow = null;
  });

  appWindow.once("ready-to-show", () => {
    appWindow.show();
    setTimeout(() => {
      aboutWindow.show();
    }, 1000);
    // setTimeout(() => {
    //     aboutWindow.hide();
    // }, 5000);
  });

  ipcMain.on("closeInfoWindow", event => {
    aboutWindow.close();
    setTimeout;
  });
}

app.on("ready", createWindow);
