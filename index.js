const { app, BrowserWindow, Menu } = require("electron");
let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
  });

  mainWindow.loadFile("./index.html");
}

app.on("ready", createWindow);

//menu template
var menuTemplate = [
  {
    label: "File",
    submenu: [
      {
        label: "Quit",
        accelerator: "Alt+q",
        click() {app.quit();},
      },
      {
        role: "reload",
      },
    ],
  },
  {
    label:"Dev Tools",
    submenu:[
    {
            label:'Toggle DevTools',
            click(item, focusedWindow){
                if (focusedWindow) {
                    //Focused window is already open devtools
                    if(!focusedWindow.webContents.isDevToolsOpened()){
                        focusedWindow.webContents.openDevTools();}
                        else{
                            focusedWindow.webContents.closeDevTools()}
                            }}}]

  }
];
Menu.setApplicationMenu(Menu.buildFromTemplate(menuTemplate));

//add dev tools options to if in dev mode
if (process.env.NODE_ENV === 'development') {
    mainWindow.webContents.openDevTools();

    };
