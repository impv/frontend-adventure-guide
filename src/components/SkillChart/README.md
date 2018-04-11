```jsx
initialState = {
  skills: [
    { skill: 'visual', level: 0 },
    { skill: 'express', level: 4 },
    { skill: 'tech', level: 2 },
    { skill: 'application', level: 5 },
    { skill: 'semantic', level: 3 }
  ],
  skillDetails: [
    { name: 'visual', label: 'ビジュアル力', description: '' },
    { name: 'express', label: '表現力', description: '' },
    { name: 'tech', label: '先端技術力', description: '' },
    { name: 'application', label: 'アプリケーション力', description: '' },
    { name: 'semantic', label: 'セマンティックWeb力', description: '' }
  ]
}
;<SkillChart requiredSkills={state.skills} skillDetails={state.skillDetails} />
```
