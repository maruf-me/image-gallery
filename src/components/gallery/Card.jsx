import React from 'react'

const Card = ({ picture, index, checkedHandler, selectedIds, onDragStart, onDragEnter, onDragEnd }) => {


    return (
        <>
            <div
                draggable
                onDragEnd={onDragEnd}
                onDragStart={onDragStart}
                onDragEnter={onDragEnter}
                className={`${index === 0 ? `h-[30vh] lg:h-[40vh] col-span-2 row-span-2` : `h-[calc(15vh-.5rem)] lg:h-[calc(20vh-.8rem)] hover:scale-105 duration-300 hover:shadow-md`} gallery_grid_item group `}
            >

                <img src={picture?.src} alt={picture?.alt} className={`object-fill h-full w-full`} />


                <label
                    htmlFor={`image_${picture.id}`}
                    className={`${selectedIds?.includes(picture?.id) ? 'bg-opacity-10' : 'bg-opacity-0 opacity-0 group-hover:opacity-100 group-hover:bg-opacity-30'} absolute top-0 left-0 w-full h-full bg-gray-500 duration-300 cursor-move`}
                >
                    <input
                        type="checkbox"
                        value={picture?.id}
                        id={`image_${picture.id}`}
                        name={`image_${picture.id}`}
                        onChange={(e) => checkedHandler(e, picture?.id)}
                        className={`h-[1.6rem] w-[1.6rem] absolute top-4 left-4`}
                    />
                </label>

            </div>
        </>
    )
}

export default Card