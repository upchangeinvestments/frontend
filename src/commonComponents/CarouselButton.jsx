export const LeftArrow = (props) => {
    return (
        <div className={`absolute -bottom-12 ${props.dir === "left" ? "left-0" : "right-12"} z-10 `}>
            <button className=''
                style={{
                    top: "50%",
                    transform: "translateY(-50%)",
                    padding: "10px 10px",
                    backgroundColor: "rgb(168 85 247)",
                    color: "white",
                    border: "none",
                    borderRadius: "50%",
                    cursor: "pointer"
                }}>
                <svg className="w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#E2E2E2" d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288 480 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-370.7 0 73.4-73.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-128 128z" /></svg>
            </button>
        </div>
    );
};

export const RightArrow = (props) => {
    return (
        <div className={`absolute ${props.dir === "left" ? "left-12" : "right-0"} -bottom-12`}>
            <button className=""
                style={{
                    top: "50%",
                    transform: "translateY(-50%)",
                    padding: "10px 10px",
                    backgroundColor: "rgb(168 85 247)",
                    color: "white",
                    border: "none",
                    borderRadius: "50%",
                    cursor: "pointer"
                }} >
                <svg className="w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#E2E2E2" d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z" /></svg>
            </button>
        </div>
    );
};