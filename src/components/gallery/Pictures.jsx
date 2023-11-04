import Card from './Card';
import React, { useRef } from 'react';
import AddPicture from './AddPicture';

const Pictures = ({ selected, setSelected, prictures, setPictures }) => {

    const dragImage = useRef(null);
    const dragOverImage = useRef(null);

    const selectedHandler = (event) => {
        const { value, checked } = event.target;

        if (checked) {
            setSelected(prv => [...prv, +value])
        } else {
            setSelected(() => [...selected.filter((id) => id !== +value)]);
        }
    };


    //Handle Sort Images 
    const handleSortImages = () => {
        //Duplicate the image list
        let futerList = [...prictures];

        // Remove & save the dragged image from the list
        const draggedImage = futerList.splice(dragImage.current, 1)[0];

        // Switch the position
        futerList.splice(dragOverImage.current, 0, draggedImage);

        // Reset the position  Ref
        dragImage.current = null;
        dragOverImage.current = null;

        // Update the actual image list
        setPictures(futerList);
        // setSelected(selected);
    }


    return (
        <div className="gallery__grids">

            {prictures.map((picture, index) => {
                return (
                    <Card
                        key={index}
                        index={index}
                        picture={picture}
                        selectedIds={selected}
                        checkedHandler={selectedHandler}
                        onDragStart={(e) => dragImage.current = index}
                        onDragEnter={(e) => dragOverImage.current = index}
                        onDragEnd={handleSortImages}
                    />
                )
            })}

            <AddPicture updatePictureList={setPictures} />

        </div >
    )
}

export default Pictures