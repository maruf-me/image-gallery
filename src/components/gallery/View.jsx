import Header from './Header';
import Pictures from './Pictures';
import React, { useState } from 'react'
import { pictures } from '../../data/pictures';


const GalleryView = () => {

    const [selected, setSelected] = useState([])
    const [pictureList, setPictureList] = useState(pictures);


    const handleDelete = () => {
        setPictureList(() => pictureList.filter((item) => !selected.includes(item.id)))
        setSelected([])
    }


    return (
        <section className="h-screen w-screen flex justify-center items-center bg-gray-200">
            <div className={`h-[calc(100vh-10vh)] w-[calc(100vw-10vw)] bg-white rounded-xl shadow relative overflow-y-scroll`}>

                <Header selectedNumber={selected?.length} handleDelete={handleDelete} />
                <Pictures selected={selected} setSelected={setSelected} prictures={pictureList} setPictures={setPictureList} />

            </div>
        </section>
    )
}

export default GalleryView;