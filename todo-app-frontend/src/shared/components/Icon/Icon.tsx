import { useEffect, useState } from 'react';

interface IIcon {
    variant: string;
}

export const Icon = (props: IIcon) => {
    const { variant } = props;
    const [iconSrc, setIconSrc] = useState();
    
    useEffect(()=>{
        const mount = async () => {
            const result = await import(`../../../../public/${variant}.svg`);
            setIconSrc(result.default);
        };

        mount();
    }, [variant]);

    return <img src={iconSrc} width='22px' height='22px' alt={variant} />;
};