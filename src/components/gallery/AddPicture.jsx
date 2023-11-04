import { Icon } from '@iconify/react';
import React, { useEffect, useState } from 'react';

const AddPicture = ({ updatePictureList }) => {

    const [imageUrls, setImageUrls] = useState();
    const [uploadImage, setUploadImage] = useState([]);


    useEffect(() => {
        if (uploadImage.length < 1) return;

        const createUrl = [];
        uploadImage.forEach((image) => createUrl.push(URL.createObjectURL(image)))

        setImageUrls({
            id: Math.floor(Math.random() * 1000),
            src: createUrl[0],
            alt: 'uploaded image'
        })

    }, [uploadImage]);


    useEffect(() => {
        if (!imageUrls) return;

        updatePictureList(prv => [...prv, imageUrls])
    }, [imageUrls])


    const handleAdded = (e) => setUploadImage([...e.target.files]);


    return (
        <label htmlFor='AddFiles' className="flex flex-col gap-[1rem] items-center justify-center bg-gray-50 rounded-lg shadow-sm border border-dashed border-gray-300 h-[calc(15vh-.5rem)] lg:h-[calc(20vh-.8rem)] cursor-pointer text-gray-600 hover:scale-105 duration-300 hover:shadow-md">

            <Icon icon="basil:image-outline" color="gray" width="36" height="36" />

            Add Images

            <input type="file" multiple accept="image/*" id="AddFiles" className='hidden' onChange={handleAdded} />
        </label>
    )
}

export default AddPicture