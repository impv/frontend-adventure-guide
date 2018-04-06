### バリエーション

```js
<div
  style={{
    display: 'flex',
    justifyContent: 'space-between',
    alignContent: 'space-between',
    flexWrap: 'wrap'
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
<div>
  <Button onClick={() => alert('Clicked!')}>Click Me!</Button>
</div>
```
