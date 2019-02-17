
function renderApp (newAppState, oldAppState = {}) {
 if (newAppState === oldAppState) return
  renderTitle(newAppState.title, oldAppState.title)
  renderContent(newAppState.content, oldAppState.content)
}

function renderTitle (newTitle, oldTitle={}) {
    if (newTitle === oldTitle) return
    console.log('render title');
  const titleDOM = document.getElementById('title')
  titleDOM.innerHTML = newTitle.text
  titleDOM.style.color = newTitle.color
}

function renderContent (newContent, oldContent) {
    if (newContent === oldContent) return
    console.log('render content');
  const contentDOM = document.getElementById('content')
  contentDOM.innerHTML = newContent.text
  contentDOM.style.color = newContent.color
}


function reducer (state, action) {
    if(!state){
        return {
            title: {
              text: 'React.js 小书',
              color: 'red',
            },
            content: {
              text: 'React.js 小书内容',
              color: 'blue'
            }
        }
    }
    switch (action.type) {
        case 'UPDATE_TITLE_TEXT':return {
                ...state,
                title: {
                    ...state.title,
                    text: action.text
                }
            }
            // state.title.text = action.text
        case 'UPDATE_TITLE_COLOR':return {
                ...state,
                title: {
                    ...state.title,
                    color: action.color
                }
            }
        default:
        return state
    }
}

/**
 * 
 * @param {发生的变化} reducer 
 */
function createStore (reducer) {
    let state = null
    const listeners = []
    const subscribe = (listener) => listeners.push(listener)
    const getState = () => state
    const dispatch = (action) => {
        state = reducer(state, action)
        listeners.forEach((listener) => listener())
    }
    dispatch({});
    return { getState, dispatch ,subscribe }
}

const store = createStore(reducer)
let oldState = store.getState() // 缓存旧的 state
console.log(oldState);
store.subscribe(() => {
    const newState = store.getState();
    renderApp(newState, oldState) // 把新旧的 state 传进去渲染
    oldState = newState
    console.log(oldState);
})

renderApp(store.getState());
store.dispatch({ type: 'UPDATE_TITLE_TEXT', text: '《React.js 小书》' }) // 修改标题文本
store.dispatch({ type: 'UPDATE_TITLE_COLOR', color: 'blue' }) // 修改标题颜色