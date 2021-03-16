import { Fragment, useEffect } from 'react'
import { useActions } from '../hooks/use-actions'
import { useTypedSelector } from '../hooks/use-typed-selector'
import AddCell from './add-cell'
import CellListItem from './cell-list-item'
import './cell-list.css'
import WelcomeModal from './welcome-modal'

const CellList: React.FC = () => {
  // const defaultText = {
  //   id: 'startText',
  //   type: 'text',
  //   content: '# Welcome to Code-Pencil!',
  // }
  // const defaultCode = {
  //   id: 'startCell',
  //   type: 'code',
  //   content:
  //     '// import npm packages, css files, and so much more!  Use the encoded "show" function to render JSX elements!',
  // }
  const cells = useTypedSelector(({ cells: { order, data } }) =>
    order.map((id) => data[id])
  )
  const { fetchCells } = useActions()
  useEffect(() => {
    fetchCells()
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const renderedCells = cells.map((cell) => (
    <Fragment key={cell.id}>
      <CellListItem cell={cell} />
      <AddCell prevCellId={cell.id} />
    </Fragment>
  ))

  return (
    <div className="cell-list">
      {/* <CellListItem cell={defaultText} />
      <CellListItem cell={defaultCode} /> */}
      <WelcomeModal />
      <AddCell forceVisible={cells.length === 0} prevCellId={null} />
      {renderedCells}
    </div>
  )
}

export default CellList
