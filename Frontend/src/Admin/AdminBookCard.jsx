import React from 'react'
import axios from 'axios';

export default function AdminBookCard({item,onRemove}) {
    console.log(item)
    const handleRemove = async () => {
        try {
          const response = await axios.delete(`http://localhost:8000/seller/deletebook/${item._id}`);
          console.log(response.data);
          onRemove(item._id); 
        } catch (error) {
          console.error("Error deleting the book:", error);
        }
      };
  return (
    <>
          <div className="bg-base-100 my-2 shadow-xl px-3 py-2 rounded-md">
            <div className='flex justify-around '>
                <figure>
                <img className='w-20'
                    src={item.imageurl}
                    alt="Book" />
                </figure>
                <div >
                <h2 className="text-xl font-bold">Book Name : <span className='text-xl font-semibold'>{item.name}</span></h2>
                
                </div>
                <div className=" justify-end">
                    <button onClick={handleRemove} className=" bg-yellow-500 px-3 py-2 text-white rounded-md">Remove</button>
                </div>
                </div>
          </div>
        </>
  )
}