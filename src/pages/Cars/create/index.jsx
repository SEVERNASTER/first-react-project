

import './index.css'
import GradientTitle from '../../../components/GradientTitle';
import Input from '../../../components/Input';
import Select from '../../../components/Select';


function AddCarForm() {
    return (
        <div className='create-car-container'>
            <section className="create-car-section  create-carcar-info">
                <div className="cc-title-container">
                    < GradientTitle text='Informacion' color1='#965DF7' color2='#6481FC' />
                    <Input inputId='brand' name='brand' type='text' label='Marca' />
                    <Input inputId='brand' name='brand' type='text' label='Modelo' />
                    <Input inputId='brand' name='brand' type='number' label='Año' min={1900} max={new Date().getFullYear()} />

                    <Select name='ubication' selectId='ubicationCreate' 
                        options={{
                            select: 'Seleccionar',
                            scz: 'Santa Cruz',
                            lpz: 'La Paz',
                            cbba: 'Cochabamba',
                        }
                    } />
                </div>
            </section>

            <section className="create-car-section car-equipment">
                <div className="cc-title-container">
                    <h2>Equipamiento</h2>
                </div>

            </section>

            <section className="create-car-section car-url-photos">
                <div className="cc-title-container">
                    <h2>Fotos (URL)</h2>
                </div>

            </section>
        </div>
    )
}

export default AddCarForm