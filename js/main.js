import {renderThumbnails} from './render-thumbnails.js';
import { createPhotoFeed } from './data.js';

const randomThumbnails = createPhotoFeed();
renderThumbnails(randomThumbnails);
