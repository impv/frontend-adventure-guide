### バリエーション

```js
<div
  style={{
    display: 'flex',
    justifyContent: 'space-between',
    alignContent: 'space-around',
    flexWrap: 'wrap',
    minHeight: '8em'
  }}
>
  <Button>Click Me!</Button>
  <Button type="primary">Click Me!</Button>
  <Button type="outline">Click Me!</Button>
  <Button disabled>Click me if you can</Button>
</div>
```

### ブロックレベル

```js
<div>
  <Button block>Block</Button>
  <br />
  <Button block type="primary">
    Block
  </Button>
  <br />
  <Button block type="outline">
    Block
  </Button>
</div>
```

### ハンドラ

```js
<div
  style={{
    display: 'flex',
    justifyContent: 'space-around'
  }}
>
  <Button onClick={() => alert('Clicked!')}>Click Me!</Button>
  <Button onClick={() => alert('Clicked!')} disabled>
    Click Me?
  </Button>
</div>
```
