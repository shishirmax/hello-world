// var app = require('app');
// var BrowserWindow = require('browser-window');

// var mainWindow = null;

// app.on('window-all-closed',function(){
//     if(process.platform != 'darwin'){
//         app.quit();
//     }
// });

// app.on('ready',function(){
//     mainWindow = new BrowserWindow({width:900,height:600});
//     mainWindow.loadURL('file://'+__dirname+'/index.html');

//     mainWindow.on('closed',function(){
//         mainWindow = null;
//     });
// });

const electron = require('electron');
const app = electron.app
const BrowserWindow = electron.BrowserWindow

const path = require('path')
const url = require('url')

let mainWindow

function createWindow(){
    mainWindow = new BrowserWindow({width:800,height:600})
    mainWindow.loadURL(url.format({
        pathname:path.join(__dirname,'index.html'),
        protocol:'file',
        slashes:true
    }))
    mainWindow.on('closed',function(){
        mainWindow = null
    })
}
app.on('ready',createWindow)
app.on('window-all-closed',function(){
    if(process.platform !== 'darwin'){
        app.quit()
    }
})
app.on('activate',function(){
    if(mainWindow === null){
        createWindow()
    }
})