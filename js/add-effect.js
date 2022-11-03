const effectsList = document.querySelector('.effects__list');
const imgPreview = document.querySelector('.img-upload__preview');
const sliderElement = document.querySelector('.effect-level__slider');
const effectLevel = document.querySelector('.effect-level__value');


const EFFECTS = [
  {
    name: 'none',
    min: 0,
    max: 100,
    step: 1,
  },
  {
    name: 'chrome',
    style: 'grayscale',
    min: 0,
    max: 1,
    step: 0.1,
    unit: '',
  },
  {
    name: 'sepia',
    style: 'sepia',
    min: 0,
    max: 1,
    step: 0.1,
    unit: '',
  },
  {
    name: 'marvin',
    style: 'invert',
    min: 0,
    max: 100,
    step: 1,
    unit: '%',
  },
  {
    name: 'phobos',
    style: 'blur',
    min: 0,
    max: 3,
    step: 0.1,
    unit: 'px',
  },
  {
    name: 'heat',
    style: 'brightness',
    min: 1,
    max: 3,
    step: 0.1,
    unit: '',
  }
];

const DEFAULT_EFFECT = EFFECTS[0];
let choosenEffect = DEFAULT_EFFECT;
const isDefault = () => choosenEffect === DEFAULT_EFFECT;


noUiSlider.create(sliderElement, {
  range: {
    min: DEFAULT_EFFECT.min,
    max: DEFAULT_EFFECT.max,
  },
  step: DEFAULT_EFFECT.step,
  start: DEFAULT_EFFECT.max,
  connect: 'lower',
});

const updateSlider = () => {
  sliderElement.classList.remove('hidden');
  sliderElement.noUiSlider.updateOptions({
    range: {
      min: choosenEffect.min,
      max: choosenEffect.max,
    },
    step: choosenEffect.step,
    start: choosenEffect.max,
  });

  if (isDefault()) {
    sliderElement.classList.add('hidden');
  }
};

const onEffectChange = (evt) => {
  imgPreview.classList.remove(`effects__preview--${choosenEffect.name}`);
  choosenEffect = EFFECTS.find((effect) => effect.name === evt.target.value);
  imgPreview.classList.add(`effects__preview--${choosenEffect.name}`);
  updateSlider();
};

const onSliderUpdate = () => {
  imgPreview.style.filter = 'none';
  effectLevel.value = '';
  if (isDefault()) {
    return;
  }
  const sliderValue = sliderElement.noUiSlider.get();
  imgPreview.style.filter = `${choosenEffect.style}(${sliderValue}${choosenEffect.unit})`;
  effectLevel.value = sliderValue;
};

const resetEffect = () => {
  choosenEffect = DEFAULT_EFFECT;
  updateSlider();
};

updateSlider();

effectsList.addEventListener('change', onEffectChange);
sliderElement.noUiSlider.on('update', onSliderUpdate);

export { resetEffect };
