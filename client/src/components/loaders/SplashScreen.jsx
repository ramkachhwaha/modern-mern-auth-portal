

const SplashScreen = () => {
    return (
        <div className="splash-container">
            <div className="splash-content">
                {/* Butterfly Image */}
                <div className="butterfly-box">
                    <img
                        src="https://assets.codepen.io/1149983/ezgif.com-gif-maker.gif"
                        alt="Butterfly"
                        className="butterfly-img"
                    />
                </div>

                {/* Welcome Text Animation */}
                <h1 className="welcome-title">
                    {/* Har letter ko alag span me toda taaki animation ho sake */}
                    {['W', 'E', 'L', 'C', 'O', 'M', 'E'].map((char, index) => (
                        <span key={index} className="gradient-text" style={{ animationDelay: `${index * 0.1}s` }}>
                            {char}
                        </span>
                    ))}
                </h1>
            </div>
        </div>
    );
};

export default SplashScreen;