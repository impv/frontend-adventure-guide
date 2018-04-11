```jsx
initialState = {
  skills: [
    { name: 'visual', label: 'ビジュアル力', description: '' },
    { name: 'express', label: '表現力', description: '' },
    { name: 'tech', label: '先端技術力', description: '' }
  ]
}
const onSelect = skill => alert(skill.label)
;<ToDoSkillList skills={state.skills} onSelect={onSelect} />
```
