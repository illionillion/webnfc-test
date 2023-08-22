"use strict"

const main = () => {
    const readBtn = document.getElementById('ReadButton')
    const preview = document.getElementById('preview')

    const onClickReadBtn = async () => {
        try {
            const ndef = new NDEFReader();
            await ndef.scan();
            log("> Scan started");
        
            ndef.addEventListener("readingerror", () => {
              log("Argh! Cannot read data from the NFC tag. Try another one?");
            });
        
            ndef.addEventListener("reading", ({ message, serialNumber }) => {
              log(`> Serial Number: ${serialNumber}`);
              log(`> Records: (${message.records.length})`);
            });
          } catch (error) {
            log("Argh! " + error);
          }
    }

    const log = (msg) => {
        preview.textContent += `\n${msg}`
    }

    readBtn.addEventListener('click', onClickReadBtn)
}


window.addEventListener('load', main)