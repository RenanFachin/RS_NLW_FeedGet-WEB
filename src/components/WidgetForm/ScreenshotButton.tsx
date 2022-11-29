import { Camera, Trash } from "phosphor-react";
import html2canvas from 'html2canvas'
import { useState } from "react";
import { Loading } from "../Loading";

// Criando uma interface para receber a função como prop
interface ScreenshotButtonProps{
    screenshot: string;
    onSreenShotTook: (screenshot: string) => void;
}

export function ScreenShotButton({onSreenShotTook, screenshot}: ScreenshotButtonProps) {
    const [isTakingScreenshot, setIsTakingScreenshot] = useState(false)


    // Função para tirar screenshot
    async function handleTakeScreenShot() {
        // Definir o state como true para habilitar um "loading"
        setIsTakingScreenshot(true)

        // Tirando a print da tela (document)
        const canvas = await html2canvas(document.querySelector('html')!)

        // Convertendo para uma imagem png no formato base64 (formato de texto que representa uma imagem)
        const base64image = canvas.toDataURL('image/png')

        // CHAMANDO A FUNÇÃO QUE IRÁ ATUALIZAR O ESTADO DO COMPONENTE PAI
        onSreenShotTook(base64image)

        // Definir o state como false para desahabilitar o "loading"
        setIsTakingScreenshot(false)
    }



    // Fazendo uma verificação para saber se existe uma screenshot no state do componente pai
    if (screenshot) {
        // Caso exista, será renderizado na tela um botão com uma prévia da screen e um ícone para excluir
        return(
            <button
                type="button"
                className="p-1 w-10 h-10 rounded-m border-transparent flex justify-end items-end text-zinc-400 hover:text-zinc-100 transition-colors"
                // Passando um objeto javascript para dentro
                style={{
                    // Passando a imagem que está armazenada dentro do state para ser renderizada no background 
                    backgroundImage: `url(${screenshot})`
                }}
            >
                <Trash weight="fill"/>
            </button>
        )
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