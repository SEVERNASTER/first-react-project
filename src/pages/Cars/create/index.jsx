

import React, { useState } from 'react';
import './index.css'
import GradientTitle from '../../../components/GradientTitle';
import Input from '../../../components/Input';
import Select from '../../../components/Select';
import TextArea from '../../../components/TextArea';
import UploadImage from '../../../components/UploadImage';


function AddCarForm() {
    const [images, setImages] = useState(null)

    const handleImageUpload = (files) => {
        setImages(files);
    }
    return (
        <div className='create-car-container'>
            <section className="create-car-section  create-car-info">
                <div className="cc-title-container" >
                    < GradientTitle text='Informacion' color1='#DD519A' color2='#6A7DFC'
                        customStyles={{
                            fontSize: '2rem'
                        }}
                    />
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
                    selectId="typeCreate"
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

                <div className="add-car-two">
                    <Input inputId='yearCreate' name='year' type='number' label='Año'
                        min={1900} max={new Date().getFullYear()} maxLength={4}
                    />

                    <Input inputId='colorCreate' name='color' type='text' label='Color' />
                </div>

                <Input inputId='priceCreate' name='price' type='number' label='Precio' min={1} />

                <div className="add-car-three">
                    <Input inputId='mileageCreate' name='mileage' type='number' label='Kilometraje' min={1} />
                    <Input inputId='licensePlateCreate' name='licensePlate' type='text' label='Placa' maxLength={8} />
                </div>



            </section>

            <section className="create-car-section car-equipment">
                <div className="cc-title-container">
                    < GradientTitle text='Equipamiento' color1='#DD519A' color2='#6A7DFC'
                        customStyles={{
                            fontSize: '2rem'
                        }}
                    />
                </div>

                <Select name='transmission' selectId='transmissionCreate' label='Transmision'
                    options={[
                        {
                            value: '',
                            optionText: 'Seleccionar'
                        },
                        {
                            value: 'auto',
                            optionText: 'Automático'
                        },
                        {
                            value: 'manual',
                            optionText: 'Manual'
                        },
                        {
                            value: 'semi-auto',
                            optionText: 'Semi-automático'
                        }
                    ]}
                />

                <Select name='fuelType' selectId='fuelTypeCreate' label='Combustible'
                    options={[
                        {
                            value: '',
                            optionText: 'Seleccionar'
                        },
                        {
                            value: 'gas',
                            optionText: 'Gas'
                        },
                        {
                            value: 'gasoline',
                            optionText: 'Gasolina'
                        },
                        {
                            value: 'electric',
                            optionText: 'Electrico'
                        },
                        {
                            value: 'hybrid',
                            optionText: 'Hibrido'
                        }
                    ]}
                />

                <Input inputId='seatsCreate' name='seats' type='number' label='Capacidad de Asientos' />

                <TextArea
                    textAreaId="carDescription"
                    name="description"
                    label="Descripción del Auto"
                    rows={4}
                    cols={50} 
                    maxLength={500}
                />


            </section>



            <section className="create-car-section car-url-photos">
                <div className="cc-title-container">
                    < GradientTitle text='Fotos (URL)' color1='#DD519A' color2='#6A7DFC'
                        customStyles={{
                            fontSize: '2rem'
                        }}
                    />
                </div>

                <UploadImage
                    label="Subir"
                    onImageUpload={handleImageUpload}
                />

            </section>
        </div>
    )
}

export default AddCarForm