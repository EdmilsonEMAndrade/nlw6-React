import { ButtonHTMLAttributes } from "react";

import './style.scss';

type Props= ButtonHTMLAttributes<HTMLButtonElement>& {
    isOutlined?: boolean
};

export function Button(props:Props){
    return(
        <button className={`button ${props.isOutlined ? 'outlined' : ''}`} {...props}/>            
    )
}