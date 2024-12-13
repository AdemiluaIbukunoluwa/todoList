export const Button = ({content, rounded, transition, className='', onClick}) => {
    return (
        <div>
            <button onClick={onClick} className={`bg-blue-500 hover:bg-white hover:text-blue-500 text-white font-bold py-2 px-4 ${rounded ?'rounded': ''} ${className}`}>
                {content}
            </button>
        </div>
    )
}