//Dissonance_RPC written by c4ppucc1n0
const { app, BrowserWindow } = require('electron');
const path = require('path');
const url = require('url');
const DiscordRPC = require('discord-rpc');
const ps = require('ps-node')
const detectapp = require('./detectapp')

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 340,
    height: 380,
    resizable: false,
    titleBarStyle: 'hidden',
  });

  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, '/src/index.html'),
    protocol: 'file:',
    slashes: true,
  }));

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  app.quit();
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});

// don't change the client id 
const clientId = '426374121014951946';

// only needed for discord allowing spectate, join, ask to join
DiscordRPC.register(clientId);

const rpc = new DiscordRPC.Client({ transport: 'ipc' });
const startTimestamp = new Date();
if(detectapp.isRunning('Photoshop.exe', (status)) = true) apprunning = 'Photoshop'; else apprunning = nothing
async function setActivity() {
  if (!rpc || !mainWindow) {
    return;
  }

  const boops = await mainWindow.webContents.executeJavaScript('window.boops');

  rpc.setActivity({
    details: `Running ${apprunning}`,
    startTimestamp,
    largeImageKey: 'megu',
    instance: false,
  });
}

rpc.on('ready', () => {
  setActivity();

  // activity can only be set every 15 seconds
  setInterval(() => {
    setActivity();
  }, 15e3);
});

rpc.login({ clientId }).catch(console.error);