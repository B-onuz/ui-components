# Modal (Component)

Componente de Modal

## Como utilizar

```js
import Modal from 'ui-components/lib/components/Modal'
```

```jsx
import React, { useEffect, useState } from 'react'
import Modal from 'ui-components/lib/components/Modal'
import useModal from 'ui-components/lib/hooks/useModal'

const ModalExample = () => {
  const { isOpen, openModal, closeModal } = useModal()

  return (
    <>
      <Button onClick={() => openModal(0)} m={10} color={'primary'}>
        Abrir modal
      </Button>
      <Modal open={isOpen} onClose={closeModal}>
        <h1>lorem ipsum modal 3</h1>
        <p>Lorem ipsum dolor sit amet</p>
      </Modal>
    </>
  )
}
export default ModalExample
```
