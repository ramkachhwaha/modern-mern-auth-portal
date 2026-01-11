

export default function Loader() {
    return (
        <>
            <div className="flex items-center justify-center">
                <div
                    className="inline-block h-8 text-gray-600 w-8 animate-spin rounded-full border-4 border-solid
                     border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                    role="status"
                >
                    <span
                        className="absolute text-gray-500 -m-px h-px w-px overflow-hidden whitespace-nowrap border-0 p-0 
                        [clip:rect(0,0,0,0)]"
                    >
                        Loading...
                    </span>

                    {/* butterfly loaging */}
                    {/* <span className="geo-square">
                        <img
                            src="https://assets.codepen.io/1149983/ezgif.com-gif-maker.gif"
                            alt="image of butterfly, graphic purpose only"
                        />
                    </span> */}

                </div>


            </div>
        </>
    );

}
