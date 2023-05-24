import React from 'react'
import {Link} from 'vtex.render-runtime'
import {LinkProps} from './BulletTypes'
import {useCssHandles} from 'vtex.css-handles'

import "./styles.css"

type Props={
    src:string
    titleBullet:string
    link:LinkProps
     
}



const Bullet = ({src,titleBullet,link}:Props) =>{
    console.log("Datos para mi bullet", src,titleBullet,link)

    const CSS_HANDLES=[
        "bullet__item",
        "bullet__item--item",
        "bullet__item--image",
        "bullet__item--link",
    ]

    const handles = useCssHandles(CSS_HANDLES)
    //aqui ponemos una clase adicinal llamada external class (linea 35)
    // se puede asignar la clase como la linea 29 o tambien como la 33 y 34
    return(
        <div className={handles.bullet__item}>
            <Link
                to = {link.url}
            >
                <img className={`${handles["bullet__item--image"]} externalClass`} src={src} alt={titleBullet} />
                <p className={handles["bullet__item--title"]} >{titleBullet}</p>
            </Link>

        </div>
    ) 
    
}

Bullet.schema={
    title:"Bullet",
    type:"object",
    properties:{
        src:{
            title:"Imagen de bullet",
            type:"string",
            widget:{
                "ui:widget":"image-uploader"
            }
        }
    }
}

export default Bullet