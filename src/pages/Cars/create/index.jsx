

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
                </div>

                <Select name='ubication' selectId='ubicationCreate' label='Ubicacion'
                    options={[
                        {
                            value: '',
                            optionText: 'Seleccionar'
                        },
                        {
                            value: 'scz',
                            optionText: 'Santa Cruz'
                        },
                        {
                            value: 'lpz',
                            optionText: 'La Paz'
                        },
                        {
                            value: 'cbba',
                            optionText: 'Cochabamba'
                        }
                    ]}
                />

                <div className="add-car-one">
                    <Input inputId='brand' name='brand' type='text' label='Marca' />
                    <Input inputId='model' name='model' type='text' label='Modelo' />
                </div>

                <Select
                    name="typeOfCar"
                    selectId="add-car-type"
                    label="Tipo de Auto"
                    options={[
                        {
                            value: '',
                            optionText: 'Seleccionar'
                        },
                        {
                            value: 'sedan',
                            optionText: 'Sedán',
                            quickDescription: 'Auto clásico de 4 puertas'
                        },
                        {
                            value: 'hatchback',
                            optionText: 'Hatchback',
                            quickDescription: 'Auto compacto con compuerta trasera'
                        },
                        {
                            value: 'suv',
                            optionText: 'SUV',
                            quickDescription: 'Vehículo deportivo utilitario, más alto y espacioso'
                        },
                        {
                            value: 'pickup',
                            optionText: 'Pickup',
                            quickDescription: 'Camioneta de carga ligera'
                        },
                        {
                            value: 'coupe',
                            optionText: 'Coupé',
                            quickDescription: 'Auto deportivo de dos puertas'
                        },
                        {
                            value: 'convertible',
                            optionText: 'Convertible',
                            quickDescription: 'Auto cuyo techo puede plegarse o retirarse'
                        },
                        {
                            value: 'van',
                            optionText: 'Van',
                            quickDescription: 'Furgoneta para transporte de personas o mercancías'
                        },
                        {
                            value: 'wagon',
                            optionText: 'Wagon',
                            quickDescription: 'Versión alargada de un sedán, más espacio de carga'
                        },
                        {
                            value: 'crossover',
                            optionText: 'Crossover',
                            quickDescription: 'Mezcla entre SUV y auto convencional'
                        },
                        {
                            value: 'deportivo',
                            optionText: 'Deportivo',
                            quickDescription: 'Auto diseñado para alto rendimiento y velocidad'
                        }
                    ]}
                />

                <Input inputId='add-car-year' name='year' type='number' label='Año'
                    min={1900} max={new Date().getFullYear()} maxLength={4}
                />


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