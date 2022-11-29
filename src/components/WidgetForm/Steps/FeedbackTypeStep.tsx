// importando o objeto e a tipagem
import { FeedbackType, feedbackTypes } from ".."

// Definindo que o componente vai receceber uma função como propriedade
interface FeedbackTypeProps {
    onFeedbackTypeChanged: (type: FeedbackType) => void;
}

export function FeedbackTypeStep({onFeedbackTypeChanged}: FeedbackTypeProps){
    return(
        <div className="flex py-8 gap-2 w-full">
                {
                    Object.entries(feedbackTypes).map(([key, value]) => {
                        // [key, value] é a desestruturação do "item"
                        return (
                            <button 
                                key={key}
                                type="button"
                                onClick={() => onFeedbackTypeChanged(key as FeedbackType)}
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
    )
}