import { Popover } from '@headlessui/react'
import { ChatTeardropDots } from 'phosphor-react'
import { WidgetForm } from './WidgetForm'

export function Widget() {

    return (
        <Popover className='absolute bottom-4 right-4 md:bottom-8 md:right-8 flex flex-col items-end'>

            <Popover.Panel>
                <WidgetForm />
            </Popover.Panel>

            <Popover.Button className='flex items-center bg-brand-500 rounded-full px-3 h-12 text-white group focus:outline-none'>
                <ChatTeardropDots className='w-6 h-6' />

                {/* 
                max-w-0 fez o componente voltar a ter o tamanho inicial 
                overflow hidden faz que o elemento que sobreponha o tamanho máximo fique invisível
                */}
                <span className='max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear'>
                    <span className='pl-2'></span>
                    FeedBack
                </span>
            </Popover.Button>
        </Popover>
    )
}