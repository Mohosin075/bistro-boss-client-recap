
const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="text-center w-3/5 lg:w-4/12 mx-auto my-5 ">
            <p className="text-yellow-600 pb-4">--- {subHeading} ---</p>
            <h3 className="text-xl lg:text-5xl font-bold uppercase border-y-4 py-4">{heading}</h3>
        </div>
    );
};

export default SectionTitle;