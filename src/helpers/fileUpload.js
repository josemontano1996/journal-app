export const fileUpload = async (file) => {
  if (!file) throw new Error('There is no selected file.');
  const cloudUrl = 'https://api.cloudinary.com/v1_1/dfupfbnez/upload';

  const formData = new FormData();
  formData.append('upload_preset', 'react-journal');
  formData.append('file', file);

  try {
    const resp = await fetch(cloudUrl, {
      method: 'POST',
      body: formData,
    });

    if (!resp.ok) throw new Error('File could not be uploaded.');

    const cloudResp = await resp.json();
    
    return cloudResp.secure_url;
  } catch (error) {
    
    throw new Error(error.message);
  }
};
