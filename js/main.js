import { renderThumbnails } from './render-thumbnails.js';
import { createPhotoFeed } from './data.js';
import './img-edit-form.js';
import { updateSlider } from'./add-effect.js';

const randomThumbnails = createPhotoFeed();
renderThumbnails(randomThumbnails);
updateSlider();
