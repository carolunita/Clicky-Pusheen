import React, { Component } from "react";
import Card from "../Card";
import Header from "../Header";
import pusheens from "../../pusheens.json";
import "./Default.css";

class Default extends Component {
    // Sets the state variables
    state = {
        pusheens: pusheens,
        clicked: [],
        score: 0,
        topscore: 0,
        message: "Click on a Pusheen to START the Game!"
    };

    // Initiates game logic upon clicking a Pusheen
    handleOnClick = event => {
        // Gets id of clicked Pusheen
        let id = event.target.id;

        // Flag for game logic
        let flag = false;

        // Checking if the Pusheen has been clicked before
        for (let i = 0; i < this.state.clicked.length; i++) {
            if (id === this.state.clicked[i]) {
                flag = true;
            }
        }

        // Game logic
        if (flag === true) {
            // If the Pusheen has already been clicked, reset score
            this.setState({
                clicked: [], 
                score: 0, 
                message: "You already clicked this Pusheen... GAME OVER!"
            });
        } else {
            // If the Pusheen has not been clicked yet, add it to the array of clicked Pusheens
            this.state.clicked.push(id);

            // Updates the top score if the current score exceeds archived top score
            if (this.state.score + 1 > this.state.topscore) {
                this.setState({topscore: this.state.score + 1});
            }

            if (this.state.score === 11) {
                // Resets Game
                this.setState({
                    clicked: [],
                    score: 12, 
                    topscore: 12,
                    message: "YAY!!! You clicked all of the Pusheens!"
                });
            } else {
                // Updates score and message
                this.setState({
                    score: this.state.score + 1, 
                    message: "Oh yeah... You clicked a new Pusheen!"
                });
            }

            // Shuffles the array of Pusheens
            this.shuffleArray(this.state.pusheens);
        }
    };

    // Shuffles the array of Pusheens
    shuffleArray = (a) => {
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }

        this.setState({pusheens: a});
    };

    // Shuffles the array of Pusheens once component has mounted
    componentDidMount = () => {
        console.log("Assembling the Pusheens!");
        this.shuffleArray(this.state.pusheens);
    };

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-5 col-xl-5 ml-auto mr-auto">
                        <Header 
                            message={this.state.message}
                            score={this.state.score}
                            topscore={this.state.topscore}
                        />
                    </div>
                
                    <div className="col-12 col-sm-12 col-md-12 col-lg-7 col-xl-7 ml-auto mr-auto kennel">
                        {this.state.pusheens.map(pusheen => (
                            <Card
                                id={pusheen.id}
                                key={pusheen.id}
                                name={pusheen.name}
                                image={pusheen.image}
                                handleOnClick={this.handleOnClick}
                            />
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default Default;