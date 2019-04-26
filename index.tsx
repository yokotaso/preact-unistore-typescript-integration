/** @jsx h */
import {h, render, Fragment, JSX} from 'preact';
import {Store, StateMapper, default as createStore, ActionCreator} from 'unistore';
import {Provider, connect} from 'unistore/preact';

interface State {
    count: number;
}

interface CountUpProps {
    count: number;
    increment(state: State) : State;
}

function CountUp(props: CountUpProps) : JSX.Element {
    return (
        <Fragment>
            <span>{props.count}</span>
            <button onClick={props.increment}>Click me</button>
        </Fragment>
    );
}

const mapStateToProps : StateMapper<{}, State, State> = (state: State, prop: {}) => ({
    count: state.count
});

interface Actions {
    increment(state: State) : State;
}

const actions : Actions = {
    increment(state: State) : State {
        return {count: state.count + 1};
    }
};

const App = connect(mapStateToProps, actions)(props  => {
    return (
        <div>
            <CountUp {...props} />
        </div>
    );
});

const store: Store<State> = createStore({count: 0});
const appElm = document.getElementById("app")
render(<Provider store={store}><App /></Provider>, appElm!);