import React from 'react';
class RandomTag extends React.Component {
    render() {

        //TODO: More tags please
        const possibleTags = [
            "Hey there",
            "How's it goin?",
            "Coffee and code",
            "Tea is better... just saying",
            "I'm certainly not a UI test",
            "Grunk say \"why one tagline when many do trick?\"",
            "E.T. phone home",
            "Come here often?",
            "Whatcha up to?"
        ]

        return (
            <span>{possibleTags[Math.floor(Math.random() * possibleTags.length)]}</span>
        )
    }
}

export default RandomTag;