import React from 'react';

type ExampleProps = {
  prop1: string
}
export const Example = (obj: ExampleProps) => {
  return (
    <div>
      `${obj.prop1}`
    </div>
  )
}
