import React from 'react';

const Header = ({ selectedNumber, handleDelete }) => {
    return (
        <div className={`py-[1rem] px-[1.4rem] sm:px-[3rem] bg-green-50 shadow-sm fixed  w-[calc(100vw-10vw)] rounded-tl-xl rounded-tr-xl z-50`}>
            <div className="flex justify-between items-center gap-4">

                <div className="flex gap-4 items-center">
                    <input type="checkbox" name="selectedFiles" id="selectedFiles" className='h-[1.6rem] w-[1.6rem]' checked={selectedNumber ? true : false} readOnly />
                    {selectedNumber} Files Selected
                </div>

                {!!selectedNumber && <button onClick={handleDelete} className='text-red-500 font-semibold text-md flex gap-2 items-center'>Delete Files</button>}

            </div>
        </div>
    )
}

export default Header