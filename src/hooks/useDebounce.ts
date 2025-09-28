import { useEffect, useState } from "react";

export function useDebounce<T>(value: T, delay = 300) {
    const [debounced, setDebounced] = useState<T>(value);

    useEffect(() => {
        const id = setTimeout(() => {
            setDebounced(value);
            return () => clearTimeout(id);
        }, delay);
    }, [value, delay]);

    return debounced;
}