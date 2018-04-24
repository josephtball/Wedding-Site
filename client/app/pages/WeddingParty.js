import React from 'react';

const WeddingParty = props => {
    return (
        <main>
            <section className="content weddingParty-content">
                <h2><span className="selected">Bridesmaids</span> / <span className="">Groomsmen</span></h2>
                <div className="bridesmaids photo-cards">
                    <div className="card bridemaid-1">
                        {/* <img className="portrait" src="" alt="portrait" /> */}
                        <div className="label">
                            <h3 className="first-name">FirstName</h3>
                            <h3 className="last-name">LastName</h3>
                        </div>
                    </div>
                    <div className="card bridemaid-2">
                        {/* <img className="portrait" src="" alt="portrait" /> */}
                        <div className="label">
                            <h3 className="first-name">FirstName</h3>
                            <h3 className="last-name">LastName</h3>
                        </div>
                    </div>
                    <div className="card bridemaid-3">
                        {/* <img className="portrait" src="" alt="portrait" /> */}
                        <div className="label">
                            <h3 className="first-name">FirstName</h3>
                            <h3 className="last-name">LastName</h3>
                        </div>
                    </div>
                    <div className="card bridemaid-4">
                        {/* <img className="portrait" src="" alt="portrait" /> */}
                        <div className="label">
                            <h3 className="first-name">FirstName</h3>
                            <h3 className="last-name">LastName</h3>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default WeddingParty;