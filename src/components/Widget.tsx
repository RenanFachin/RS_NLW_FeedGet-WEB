import { ChatTeardropDots } from 'phosphor-react'

export function Widget() {
    return (
        <div className='absolute bottom-5 right-5'>

            <button className='flex items-center bg-brand-500 rounded-full px-3 h-12 text-white group'>
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