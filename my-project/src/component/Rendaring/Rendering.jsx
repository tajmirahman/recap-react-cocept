

const Rendering = ({ isTrue, name }) => {
    return (
        <>
            <div className="text-center text-3xl">
                <h1>This is render page</h1>
            </div>

            <div>
                {
                    !isTrue ? `${name}` : ''
                }
            </div>

        </>
    );
};

export default Rendering;