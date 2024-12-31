const electron = require('electron');
const { app, BrowserWindow, ipcMain } = electron;
const path = require('path');

let win 

app.on('ready', () => {
    win = new BrowserWindow({
        width: 600,
        height: 400,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            // preload: path.join(__dirname, 'preload.js')
        }
    });

    win.loadFile('index.html');
    win.webContents.openDevTools();
})