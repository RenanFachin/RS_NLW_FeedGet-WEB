import { CloseButton } from "./CloseButton";

import bugImageUrl from '../assets/bug.svg'
import ideaImageUrl from '../assets/idea.svg'
import thoughtImageUrl from '../assets/thought.svg'

// Criando um objeto com o(os) tipo(s) de feedback da aplicação
const feedbackTypes = {
    BUG: {
        title: 'Problema',
        image: {
            source: bugImageUrl,
            alt: 'Imagem de um inseto representando um bug',
        }
    },
    IDEA: {
        title: 'Ideia',
        image: {
            source: ideaImageUrl,
            alt: 'Imagem de uma lâmpada',
        }
    },
    OTHER: {
        title: 'Outro',
        image: {
            source: thoughtImageUrl,
            alt: 'Imagem de um balão de pensamento',
        }
    },
}

export function WidgetForm(){
    return(
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">

            <header>
                <span className="text-xl leading-6">
                    Deixe o seu feedback
                </span>

                <CloseButton />
            </header>

            <div className="flex py-8 gap-2 w-full">

            </div>

            <footer className="text-xs text-neutral-400">
                Feito durante a NLW: <a className="underline underline-offset-1" href="https://github.com/RenanFachin/RS_NLW_FeedGet-WEB">Github do projeto</a>
            </footer>
            
        </div>
    )
}