import { useState } from 'react'
import { ChatTeardropDots } from 'phosphor-react'

export function Widget() {
    // Criando um estado para controlar se o widget foi pressionado ou não. (Boolean)
    const [isWidgetOpen, setIsWidgetOpen] = useState(false)

    // Criando uma função para alterar a visibilidade do widget
    function toogleWidgetVisibility(){
        setIsWidgetOpen(!isWidgetOpen)
    }

    return (
        <div className='absolute bottom-5 right-5'>

            {/* Criando uma condicional a apartir do estado para mostrar ou não algo */}
            { isWidgetOpen ? <p>Abriu</p> : null}

            <button 
            onClick={toogleWidgetVisibility}
            className='flex items-center bg-brand-500 rounded-full px-3 h-12 text-white group'>
                <ChatTeardropDots className='w-6 h-6' />

                {/* 
                max-w-0 fez o componente voltar a ter o tamanho inicial 
                overflow hidden faz que o elemento que sobreponha o tamanho máximo fique invisível
                */}
                <span className='max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear'>
                    <span className='pl-2'></span>
                    FeedBack
                </span>
            </button>
        </div>
    )
}