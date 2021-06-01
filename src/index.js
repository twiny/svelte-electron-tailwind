const { app, BrowserWindow, Menu } = require("electron");
const { menuTemplate } = require('./lib/menu.js');
const { globalShortcuts } = require('./lib/global-shortcuts.js');
const path = require("path");


// 
let mainWindow;

// create window
function createWindow() {
    // main window
    mainWindow = new BrowserWindow({
        width: 1200,
        height: 700,
        minWidth: 800,
        minHeight: 600,
        frame: false,
        titleBarStyle: "hidden",
        webPreferences: {
            nodeIntegration: true,
            webSecurity: true,
            contextIsolation: true
        },
        icon: path.join(__dirname, '../public/favicon.png')
    });
    // 
    mainWindow.loadFile(path.join(__dirname, "../public/index.html"));

    // Open the DevTools.
    mainWindow.webContents.openDevTools();

    // close
    mainWindow.on("closed", () => {
        mainWindow = null
    })
}

// create menu
function createAppMenu() {
    const menu = Menu.buildFromTemplate(menuTemplate)
    Menu.setApplicationMenu(menu)
}

// when ready launch
app.whenReady().then(() => {
    createWindow()
    createAppMenu()
})


// Simulate local shortcuts; register when app has focus
app.on('browser-window-focus', () => globalShortcuts.register(mainWindow));

// Release shortcuts when app loses focus
app.on('browser-window-blur', () => globalShortcuts.unregisterAll());

// Quit when all windows are closed.
app.on('window-all-closed', () => {
    // On OS X it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    // On OS X it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});