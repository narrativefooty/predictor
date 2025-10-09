import Home from "./nav";

function HomePage(){
    return (
        <>
            <Home/>
            <div className = 'background'>
                <div className="column">
                    <div className="row">
                        <div className="panel">
                            <h1>Fixtures</h1>
                        </div>
                        <div className="panel">
                            <h1>News</h1>
                        </div>
                    </div>
                    <div className = 'row'>
                        <div className="panel">
                            <h1>Play Predictor!</h1>
                        </div>
                        <div className="panel">
                            <h1>Manage Profile</h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
    
}
export default HomePage