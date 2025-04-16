import PopNewCard from "../../components/PopNewCard/PopNewCard"

export const PopNewCardPage = ({addNewCard, cards}) => {
    return (
        <PopNewCard addNewCard={addNewCard} cards={cards}/>
    )
}