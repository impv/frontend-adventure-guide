import * as React from 'react'

import styled from 'styled-components'

import AccordionItem from '~/components/AccordionItem'

/**
 * アコーディオンリスト
 *
 * 子要素の`<AccordionItem>`の開閉状態を管理する
 */
export class AccordionList extends React.Component {
  public state = {
    selected: -1
  }

  public render() {
    const { children } = this.props
    const { selected } = this.state

    const onSelectItem = this.onSelectItem.bind(this)

    return (
      <Container>
        {React.Children.map(
          children,
          (child, i) =>
            typeof child !== 'object'
              ? child
              : React.cloneElement(child, {
                  collapse: i !== selected,
                  onExpand: () => onSelectItem(i)
                })
        )}
      </Container>
    )
  }

  private onSelectItem(index: number) {
    this.setState({
      selected: index
    })
  }
}

export default AccordionList

const Container = styled.div`
  > *:not(:first-child) {
    margin-top: 1em;
  }
`
