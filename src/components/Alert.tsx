import { useEffect } from "react";
import { alertProps } from "./interfaces";

export default function Alert({ alertName = '', closeAlert }: alertProps) {
    useEffect(() => {
        const timerId = setTimeout(closeAlert, 3000)

        return () => {
            clearTimeout(timerId)
        }
    }, [alertName])

    return <div className="alert alert-success" role="alert">
        {alertName} добавлен в корзину
    </div>
}