import React from 'react';
import { Container } from 'reactstrap';
import Intro from '../components/Intro';
import ActivityAggregate from '../components/ActivityAggregate';

//sort repos based on last push
const compare = (obj1, obj2) => {
    if(obj1.pushed_at < obj2.pushed_at)
        return 1
    return -1
}

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            repos: [],
            pushes: []
        }
    }

    componentDidMount() {

        //make two requests, one to the cache and one to get fresh data
        //load the cached immediately, wait for any new data
        self.addEventListener('fetch', (event) => {
            event.respondWith(caches.open('pushes')
                .then((cache) => {
                    return fetch(event.request)
                        .then((fresh) => {
                            cache.put(event.request, fresh.clone());
                            return fresh;
                        });
                }));
        });

        fetch('https://api.github.com/users/mfreema1/repos')
            .then((data) => { return data.json() })
            .then((json) => {
                this.setState({ repos: json.sort(compare).slice(0, 3)}); //go get most recent three
            });

        fetch('https://api.github.com/users/mfreema1/events')
            .then((data) => { return data.json() })
            .then((json) => {
                //TODO: paginate the response
                const pushes = (json.filter((e) => { return e.type === "PushEvent" }).map((e) => {
                    return {
                        id: e.id,
                        repo: e.repo.name,
                        createdAt: e.created_at,
                        commits: e.payload.commits.map((c) => { return { message: c.message, url: c.url }})
                    }
                }));
                this.setState({ pushes });
            });
    }

    render() {
        return (
            <Container>
                <Intro />
                <ActivityAggregate cards={ this.state.pushes }/>
            </Container>
        )
    }
}

export default Home;