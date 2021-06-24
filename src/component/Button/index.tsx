import { ButtonHTMLAttributes } from "react";

import './style.scss';

type Props= ButtonHTMLAttributes<HTMLButtonElement>;

export function Button(props:Props){
    return(
        <button className='button' {...props}/>            
    )
}