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


    const handleAddFiles = (e) => setUploadImage([...e.target.files]);


    return (
        <label htmlFor='AddFiles' className="gallery_image_add">

            <Icon icon="basil:image-outline" color="gray" width="36" height="36" />

            Add Images

            <input type="file" multiple accept="image/*" id="AddFiles" className='hidden' onChange={handleAddFiles} />
        </label>
    )
}

export default AddPicture