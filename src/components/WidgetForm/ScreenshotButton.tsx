import { Camera } from "phosphor-react";
import html2canvas from 'html2canvas'
import { useState } from "react";
import { Loading } from "../Loading";

export function ScreenShotButton() {
    const [isTakingScreenshot, setIsTakingScreenshot] = useState(false)


    // Função para tirar screenshot
    async function handleTakeScreenShot() {
        // Definir o state como true para habilitar um "loading"
        setIsTakingScreenshot(true)

        // Tirando a print da tela (document)
        const canvas = await html2canvas(document.querySelector('html')!)

        // Convertendo para uma imagem png no formato base64 (formato de texto que representa uma imagem)
        const base64image = canvas.toDataURL('image/png')

        // Definir o state como false para desahabilitar o "loading"
        setIsTakingScreenshot(false)
    }

    return (
        <button
            onClick={handleTakeScreenShot}
            type="button"
            className="p-2 bg-zinc-800 rounded-md border-transparent hover:bg-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500"
        >
            {/* Se a foto estiver com o state com true, mostrar o componente de loading */}
            { isTakingScreenshot ? <Loading /> : <Camera className="w-6 h-6 text-zinc-100" />}
        </button>

    )
}