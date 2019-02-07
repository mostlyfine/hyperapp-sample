import {h, app} from "hyperapp"

const state = {
    count: 0
}

const actions = {
    down: () => state => ({ count: state.count - 1 }),
    up: () => state => ({ count: state.count + 1 })
}

const view = (state, actions) => (
    <div>
        <h1>{state.count}</h1>
        <button onclick={actions.down}>-</button>
        <button onclick={actions.up}>+</button>
    </div>
)

app(state, actions, view, document.body)