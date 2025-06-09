const { app, BrowserWindow, ipcMain } = require("electron");

const path = require("path");
const isDev = require("electron-is-dev");
const AppDataSource = require("./data-source");

require("@electron/remote/main").initialize();

function createWindow() {
  // Create the browser window.
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      enableRemoteModule: false,
      preload: path.join(__dirname, "preload.js"),
    },
  });

  win.loadURL(isDev ? "http://localhost:3000" : `file://${path.join(__dirname, "../build/index.html")}`);
}

app.on("ready", createWindow);

// Quit when all windows are closed.
app.on("window-all-closed", function () {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});

app.whenReady().then(async () => {
  await AppDataSource.initialize();
  const repo = AppDataSource.getRepository("CodigosDeBarra");

  // INSERT desde React
  ipcMain.handle("insert-codigo", async () => {
    const nuevo = await repo.save({});
    return nuevo;
  });

  // SELECT desde React
  ipcMain.handle("get-codigos", async () => {
    const codigos = await repo.find({ order: { id: "DESC" } });
    return codigos;
  });
});
