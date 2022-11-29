import { Camera } from "phosphor-react";
import html2canvas from 'html2canvas'

export function ScreenShotButton() {
    // Função para tirar screenshot
    async function handleTakeScreenShot(){
        // Tirando a print da tela (document)
        const canvas = await html2canvas(document.querySelector('html')!)

        // Convertendo para uma imagem png no formato base64 (formato de texto que representa uma imagem)
        const base64image = canvas.toDataURL('image/png')
    }

    return (
        <button
            onClick={handleTakeScreenShot}
            type="button"
            className="p-2 bg-zinc-800 rounded-md border-transparent hover:bg-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500"
        >
            <Camera className="w-6 h-6 text-zinc-100" />
        </button>

    )
}