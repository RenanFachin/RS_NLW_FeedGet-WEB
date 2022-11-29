import { useState } from "react";
import { CloseButton } from "../CloseButton";

import bugImageUrl from '../../assets/bug.svg'
import ideaImageUrl from '../../assets/idea.svg'
import thoughtImageUrl from '../../assets/thought.svg'
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";
import { FeedbackSucessStep } from "./Steps/FeedbackSucessStep";

// Criando um objeto com o(os) tipo(s) de feedback da aplicação
export const feedbackTypes = {
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
export type FeedbackType = keyof typeof feedbackTypes

export function WidgetForm() {
    // Passando o FeedbackType como tipagem para o estado, fazendo com que só seja possível 3 valores (bug, idea ou other) além do null
    const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)

    // Criando um state para verificar se o feedback foi enviado ou não
    const [feedbackSent, setFeedbackSent] = useState(false)


    // Criar uma função para reestartar o feedback (limpa o state para nulo novamente)
    function handleResetFeedback() {
        setFeedbackType(null)
    }

    return (
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">

            {/* Se o feedback já foi enviado, ou seja, seu valor alterou para true */}
            {feedbackSent ? (
                <FeedbackSucessStep />
            ) : (
                <>
                    {!feedbackType ? (
                        // Enviando para o componente FeedbackTypeStep o state como parâmetro
                        <FeedbackTypeStep
                            onFeedbackTypeChanged={setFeedbackType}

                        />
                    ) : (
                        // Enviando para o contentStep qual foi o tipo de feedback que o usuário escolheu
                        <FeedbackContentStep
                            feedbackType={feedbackType}
                            onFeedbackRestartRequested={handleResetFeedback}

                            // Passando prop para o componente filho
                            onFeedbackSent={() => setFeedbackSent(true)}
                        />
                    )}</>
            )}

            <footer className="text-xs text-neutral-400">
                Feito durante a NLW: <a className="underline underline-offset-1" href="https://github.com/RenanFachin/RS_NLW_FeedGet-WEB">Github do projeto</a>
            </footer>

        </div>
    )
}