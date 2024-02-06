
const UsersComponent = ({ image, className }) => {
    return (
        <div className="flex flex-col items-center h-24 justify-center mx-4 bg-white overflow-hidden">
            <img src={image} alt="" className={`flex justify-center w-32 ${className}`} />
        </div>
    );
}
export default UsersComponent;