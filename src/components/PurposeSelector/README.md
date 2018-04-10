```jsx
initialState = {
  purposes: [
    {
      description: 'あれをする',
      requirements: [],
      selected: true
    },
    {
      description: 'それをする',
      requirements: [],
      selected: false
    }
  ]
}
const onSelect = description =>
  setState(state => ({
    purposes: state.purposes.map(
      p => (p.description === description ? { ...p, selected: !p.selected } : p)
    )
  }))
;<PurposeSelector purposes={state.purposes} onSelect={onSelect} />
```
