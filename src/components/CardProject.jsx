import React from 'react'
import Image from 'next/image'

function CardProject({image, title, description}) {
    return (
        <div className="flex flex-col border items-center m-4">
            <Image src={image} alt="yo" width={220} height={220}
                style={
                    { borderRadius: "5%" }
                }
            />
            <h1>{title}</h1>
            <h2>{description}</h2>
        </div>
    )
}

export default CardProject