// preload.js
const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("api", {
  insertarCodigo: () => ipcRenderer.invoke("insert-codigo"),
  obtenerCodigos: () => ipcRenderer.invoke("get-codigos"),
});
