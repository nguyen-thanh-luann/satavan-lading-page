import classNames from 'classnames'
import React from 'react'

interface NewsCategoryEditorPageProps {
  className?: string
}

export const NewsCategoryEditorPage = ({ className }: NewsCategoryEditorPageProps) => {
  return <div className={classNames('', className)}>News category EditorPage</div>
}
