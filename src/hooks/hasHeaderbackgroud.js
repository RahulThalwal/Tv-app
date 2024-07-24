import { useEffect, useState } from "react"

const useHeaderbackground = (scrollThreshold) => {
    const [hasBackground, setHasBackground] = useState(false);

    useEffect(() => {
        const handlescroll = () => {
            if (window.scrollY > scrollThreshold) {
                setHasBackground(true);
            } else {
                setHasBackground(false);
            }
        };

        window.addEventListener('scroll', handlescroll);
        return () => {
            window.removeEventListener('scroll', handlescroll);
        };
    }, [scrollThreshold]);

    return hasBackground;

}

export default useHeaderbackground;
