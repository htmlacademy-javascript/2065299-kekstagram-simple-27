import {renderThumbnails} from './render-thumbnails.js';
import {createPhotoFeed} from './data.js';
import './img-edit-form.js';
import './change-scale.js';

const randomThumbnails = createPhotoFeed();
renderThumbnails(randomThumbnails);
