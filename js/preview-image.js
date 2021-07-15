const TYPES = ['gif', 'jpg', 'jpeg', 'png'];
const DEFAULT_AVATAR = 'img/muffin-grey.svg';
const adFormPhoto = {
  WIDTH: 70,
  HEIGHT: 70,
};

const adForm = document.querySelector('.ad-form');
const avatarInput = adForm.querySelector('.ad-form-header__input');
const avatarPreview = adForm.querySelector('.ad-form-header__preview img');
const adPhotoInput = adForm.querySelector('.ad-form__input');
const adPhotoPreview = adForm.querySelector('.ad-form__photo');

const loadingPhotoPreview = (input, preview) => {
  const file = input.files[0];
  const fileName = file.name.toLowerCase();

  const matches = TYPES.some((it) => fileName.endsWith(it));

  if (matches) {
    const reader = new FileReader();

    reader.addEventListener('load', () => {
      preview.src = reader.result;
    });

    reader.readAsDataURL(file);
  }
};

const prepareAvatar = () => {
  loadingPhotoPreview(avatarInput, avatarPreview);
};

const resetAvatar = () =>{
  avatarPreview.src = DEFAULT_AVATAR;
};

avatarInput.addEventListener('change', prepareAvatar);

const createImg = () => {
  const img = document.createElement('img');
  img.width = adFormPhoto.WIDTH;
  img.height = adFormPhoto.HEIGHT;
  return img;
};

const resetPhotoPreview = () => {
  adPhotoPreview.innerHTML = '';
};

const prepareImage = () => {
  const imgPreview = createImg();
  resetPhotoPreview();
  adPhotoPreview.appendChild(imgPreview);
  return imgPreview;
};

const preparePhoto = () => {
  loadingPhotoPreview(adPhotoInput, prepareImage());
};

adPhotoInput.addEventListener('change', preparePhoto);

export {resetAvatar, resetPhotoPreview};
