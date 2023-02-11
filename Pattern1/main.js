const { app, Browserwindow, ipcMain, BrowserWindow } = require('electron');
const path = require('path');

const createWindow = () => {
  const mainWindow = new BrowserWindow({
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  });

  ipcMain.on('set-title', (event, title) => {
    const webContents = event.sender;
    console.log(
      '********************************WEB CONTENTS*********************************'
    );
    console.log(webContents);
    const win = BrowserWindow.fromWebContents(webContents);
    console.log('+++++++++++++++++++WIN+++++++++++++++++++++++++++++++++++');
    console.log(win);
    win.setTitle(title);
  });

  mainWindow.loadFile('index.html');
};

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
