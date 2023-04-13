import ReactDOM from 'react-dom'
import * as style from '../../../styles/modal'
import IconClose from '../../icons/IconClose'
import { elementHtmlSelect } from '../../../helpers/helpers'
import { ModalProps } from '../../../interface/interface'

const Modal = ({button, description, place, title}:ModalProps) => {
  const modalHTML = document.getElementById('modal')
  return ReactDOM.createPortal(
    <style.ModalStyles>
      <style.ModalCenter>
        <style.ButtonClose>
          <IconClose />
        </style.ButtonClose>
        <style.TitleModal>{title}</style.TitleModal>
        <style.DescriptionModal>
          {description}
        </style.DescriptionModal>
        <style.FormModal>
          <style.InputText placeholder={place} />
          <style.ButtonSubmit>{button}</style.ButtonSubmit>
        </style.FormModal>
      </style.ModalCenter>
    </style.ModalStyles>,
    elementHtmlSelect(modalHTML, 'modal'),
  )
}

export default Modal
