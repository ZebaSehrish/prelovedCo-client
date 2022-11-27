import { useEffect, useState } from "react"

const usePayment = _id => {
    const [isPaid, setIsPaid] = useState(false);
    const [isPaidLoading, setIsPaidLoading] = useState(true);
    useEffect(() => {
        if (_id) {
            fetch(`http://localhost:5000/product/paid/${_id}}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setIsPaid(data.isPaid);
                    setIsPaidLoading(false);
                })
        }
    }, [_id])
    return [isPaid, isPaidLoading]
}
export default usePayment;