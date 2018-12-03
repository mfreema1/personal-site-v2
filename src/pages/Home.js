import React from 'react';
import Intro from '../components/Intro';
import ActivityAggregate from '../components/ActivityAggregate';

const cards = [
    {
        title: "Card number one",
        subtitle: "A very important card",
        text: "Boy is this an important card.  We should throw some text in here to see how it looks."
    },
    {
        title: "Card number two",
        subtitle: "This is a very unimportant card",
        text: "Please disregard this card.  It is of very little importance to anyone."
    },
    {
        title: "Card number three",
        subtitle: "This card is moderatel important I guess",
        text: "We're not really sure where to put this one.  In some regards, it is important, but in some it's not.  Kind of a wild one."
    },
    {
        title: "Card number four",
        subtitle: "I don't even know for this one.",
        text: "We're dumbfounded.  There's really no way for us tell with this, we really dropped the ball."
    }
]

class Home extends React.Component {
    render() {
        return (
            <div>
                <Intro />
                <ActivityAggregate cards={cards}/>
            </div>
        )
    }
}
//
export default Home;