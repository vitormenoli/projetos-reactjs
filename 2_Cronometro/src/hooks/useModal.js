import { useState } from "react";

const useModal = () => {
    const [modalOn, setModalOn] = useState(false);

    return { modalOn, setModalOn }
}

export default useModal