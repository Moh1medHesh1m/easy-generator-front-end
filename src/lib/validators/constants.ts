export const SUPPORTED_IMAGE_FORMATS = [
  'image/jpg',
  'image/jpeg',
  'image/gif',
  'image/png',
];

export const ERROR_MESSAGES = {
  required: 'Please fill in the required field',
  typeError: 'Please enter a valid data',
  min: (field: string, number: number) =>
    `${field} must have at least ${number} items`,
};
