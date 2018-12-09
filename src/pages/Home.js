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
            commits: []
        }
    }

    componentDidMount() {

        //make two requests, one to the cache and one to get fresh data
        //load the cached immediately, wait for any new data
        self.addEventListener('fetch', (event) => {
            event.respondWith(caches.open('commits')
                .then((cache) => {
                    return fetch(event.request)
                        .then((fresh) => {
                            cache.put(event.request, fresh.clone());
                            return fresh;
                        });
                }));
        });

        fetch('https://api.github.com/users/mfreema1/repos')
            .then((data) => { data.json()
                .then((json) => {
                    this.setState({ repos: json.sort(compare).slice(0, 3)}); //go get most recent three
                });
            });

        fetch('https://api.github.com/users/mfreema1/events')
            .then((data) => { data.json()
                .then((json) => {
                    //TODO: paginate the response
                    const commits = (json.filter((e) => { return e.type === "PushEvent" }).map((e) => {
                        return {
                            repo: e.repo.name,
                            createdAt: e.created_at,
                            commits: e.payload.commits.map((c) => { return { message: c.message, url: c.url }})
                        }
                    }));
                    this.setState({ commits: commits});
                });
            });
    }

    render() {
        return (
            <Container>
                <Intro />
                <ActivityAggregate cards={ this.state.commits }/>
            </Container>
        )
    }
}

export default Home;