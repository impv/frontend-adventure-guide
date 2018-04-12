```jsx
<AccordionItem title="foo">Detail of foo</AccordionItem>
```

```jsx
<AccordionItem title="foo" collapse>
  Detail of foo
</AccordionItem>
```

```jsx
initialState = {
  expand: false
}
const onExpand = () =>
  setState(state => ({
    expand: true
  }))
;<AccordionItem title="foo" collapse={!state.expand} onExpand={onExpand}>
  Foo
</AccordionItem>
```
