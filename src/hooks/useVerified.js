import { useEffect, useState } from "react";

const useVerified = email => {
    const [isVerified, setIsVerified] = useState(false);
    const [isVerifiedLoading, setIsVerifiedLoading] = useState(true);
    useEffect(() => {
        if (email) {
            fetch(`http://localhost:5000/seller/verified/${email}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setIsVerified(data.isVerified);
                    setIsVerifiedLoading(false);
                })
        }
    }, [email])
    return [isVerified, isVerifiedLoading]
}
export default useVerified;