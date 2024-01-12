import React from 'react'


const SingleProductDetails = ({ id, src, title, desc, price }) => {

    return (
        <>

            <div className='flex justify-center mt-10'>
                <div className="card p-10 lg:card-side bg-base-80 w-[50%] shadow-xl">
                    <div className='w-[30%]'>
                        <figure><img className='w-[200px] h-[200px] object-contain ' src={src} alt="Album" /></figure>
                    </div>
                    <div className="card-body w-[70%]">
                        <h2 className="card-title"> {title} </h2>
                        <p> {desc} </p>
                        <p> <strong> Price: </strong> {price} </p>
                        <div className="card-actions">
                            <button onClick={() => document.getElementById('my_modal').showModal()} className="btn btn-primary"> Add To Cart </button>
                        </div>
                    </div>
                </div>
            </div>

<dialog id="my_modal" className="modal">
  <div className="modal-box">
    <form method="dialog">
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    <h3 className="font-bold text-lg">Hello Bhai is se agy nhi ja sakty</h3>
    <p className="py-4">Press ESC key or click on ✕ button to close</p>
  </div>
</dialog>

        </>
    )
}

export default SingleProductDetails