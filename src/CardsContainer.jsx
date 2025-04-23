
import './CardsContainer.css'
import Card from './Card';

function CardsContainer() {
    return (
        <div className='cardsContainer'>
            <Card 
                brand="Lamborghini"
                model="SVJ"
                year="2022"
                seats="4"
                transmission="Automatico"
                category="Mediano"
                color="Negro"
                price="700"
                available="Disponible"
                imgUrl="https://hips.hearstapps.com/hmg-prod/images/lamborghini-aventador-svj-63-roadster-1566027984.jpg?crop=1xw:0.7907680457746479xh;center,top&resize=1200:*"
            />
            <Card 
                brand="Lamborghini"
                model="SVJ"
                year="2022"
                seats="4"
                transmission="Automatico"
                category="Mediano"
                color="Negro"
                price="700"
                available="Disponible"
                imgUrl= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyBr-LsjYVza52gYuDEMzRmi16XBkYFMhX-w&s"
            />
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>
    )
}

export default CardsContainer