import React from "react";

export const Form = () => {
    return <>
        <h2 className="text-center">
            Formulaire de connexion
        </h2>

        <form>
            <div className="grid-container">
                <div className="grid-x grid-padding-x">
                    <div className="medium-6 cell">
                        <label>Input Label
                        <input type="text" placeholder=".medium-6.cell" />
                        </label>
                    </div>

                    <div className="medium-6 cell">
                        <label>Input Label
                        <input type="text" placeholder=".medium-6.cell" />
                        </label>
                    </div>

                    {/* <div className="switch rounded">
                        <input className="switch-input" id="exampleSwitch" type="checkbox" name="exampleSwitch" />
                        <label className="switch-paddle" htmlFor="exampleSwitch">
                            <span className="show-for-sr">Download Kittens</span>
                        </label>
                    </div> */}

                    <div className="cell">
                        <div className="switch">
                            <input className="switch-input" id="exampleRadioSwitch1" type="radio" checked readOnly name="testGroup" />
                            <label className="switch-paddle" htmlFor="exampleRadioSwitch1">
                                <span className="show-for-sr">Bulbasaur</span>
                            </label>
                        </div>
                    </div>

                    <div className="cell">
                        <div className="switch">
                            <input className="switch-input" id="exampleRadioSwitch2" type="radio" checked readOnly name="testGroup" />
                            <label className="switch-paddle" htmlFor="exampleRadioSwitch2">
                                <span className="show-for-sr">Charmander</span>
                            </label>
                        </div>
                    </div>

                    <div className="cell">
                        <div className="switch">
                            <input className="switch-input" id="exampleRadioSwitch3" type="radio" checked readOnly name="testGroup" />
                            <label className="switch-paddle" htmlFor="exampleRadioSwitch3">
                                <span className="show-for-sr">Squirtle</span>
                            </label>
                        </div>
                    </div>

                    <div className="cell">
                        <p>Do you like me?</p>
                        <div className="switch large">
                            <input className="switch-input" id="yes-no" type="checkbox" name="exampleSwitch" />
                            <label className="switch-paddle" htmlFor="yes-no">
                                <span className="show-for-sr">Do you like me?</span>
                                <span className="switch-active" aria-hidden="true">Yes</span>
                                <span className="switch-inactive" aria-hidden="true">No</span>
                            </label>
                        </div>
                    </div>

                    <div className="cell">
                        <button className="button success" style={{ margin : "auto 10px" }} type="submit">
                            Valider
                        </button>

                        <button className="button alert" style={{ margin : "auto 10px" }}>
                            Annuler
                        </button>
                    </div>
                </div>
            </div>
        </form>
    </>
}