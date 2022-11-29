import { useState } from "react";
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

// O object.entries(feedbackTypes) vai retornar um array de arrays contendo 2 posições dentro de cada
// Object.entries(feedbackTypes) => 
/**
 * [
 *  ['BUG', {...}],
 *  ['IDEA', {...}],
 *  ['OTHER', {...}],
 * ]
 * Ou seja, será percorrido o vetor e teremos acesso a: chave - valor
 */ 

// Tipando apenas as "chaves" do objeto, fazendo que não seja possível selecionar um tipo diferente das chaves definidas no objeto
type FeedbackType = keyof typeof feedbackTypes

export function WidgetForm(){
    // Passando o FeedbackType como tipagem para o estado, fazendo com que só seja possível 3 valores (bug, idea ou other) além do null
    const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)

    return(
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">

            <header>
                <span className="text-xl leading-6">
                    Deixe o seu feedback
                </span>

                <CloseButton />
            </header>

            {!feedbackType ? (
                <div className="flex py-8 gap-2 w-full">
                {
                    Object.entries(feedbackTypes).map(([key, value]) => {
                        // [key, value] é a desestruturação do "item"
                        return (
                            <button 
                                key={key}
                                type="button"
                                onClick={() => setFeedbackType(key as FeedbackType)}
                                className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none"
                            >
                                <img 
                                src={value.image.source} 
                                alt={value.image.alt} 
                                />

                                <span>
                                    {value.title}
                                </span>
                            </button>
                        )
                    })
                }
            </div>
            ) : (
                <p>funcionando</p>
            )}

            <footer className="text-xs text-neutral-400">
                Feito durante a NLW: <a className="underline underline-offset-1" href="https://github.com/RenanFachin/RS_NLW_FeedGet-WEB">Github do projeto</a>
            </footer>
            
        </div>
    )
}