const {app, BrowserWindow} = require('electron');
const path = require('path');

let mainWindow;

const createWindow = () => {

    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    });

    mainWindow.loadURL('https://di.fm');

    mainWindow.on('closed', () => {
        mainWindow = null
    })
};

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
});

app.on('activate', () => {
    if (mainWindow === null) createWindow()
});
