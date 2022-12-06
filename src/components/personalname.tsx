
function PersonalName() {
    const details = {
        user_name: "Samuel Drew",
        education: "Bachelor of IT Student",
        institute: "University of Southern Queensland"
    };

    return (
        <div className="flex flex-col items-center">
            <h1 className="text-white text-4xl font-bold transition ease-in-out hover:scale-110">{details.user_name}</h1>
            <a className="text-white transition ease-in-out hover:scale-110" target="_blank" rel="noreferrer" href="https://www.unisq.edu.au/">{details.institute}</a>
            <p className="text-white transition ease-in-out hover:scale-110">{details.education}</p>
        </div>
    );
}

export default PersonalName;