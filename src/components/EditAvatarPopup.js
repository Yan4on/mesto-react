import React from 'react';
import { InputEditAvatar } from './PopupHTML';
import PopupWithForm from './PopupWithForm.js';

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {

    const avatarRef = React.useRef();

    function handleSubmit(e) {
        e.preventDefault();
        onUpdateAvatar({
            link: avatarRef.current.value /* Значение инпута, полученное с помощью рефа */
        });
    }

    function handleChange(e) {
        //обновляем значение поля после каждого ввода символа
        avatarRef.current.value = e.target.value;
    }

    return (
      <PopupWithForm
          name="edit-avatar"
          title="Обновить аватар"
          btnName="Сохранить"
          isOpen={isOpen}
          onClose={onClose}
          onSubmit={handleSubmit}
      >
          <InputEditAvatar
              avatarRef={avatarRef}
              onChange={handleChange}
          />
      </PopupWithForm>
  );
}

export default EditAvatarPopup;
