export const fileUpload = async (file) => {
    if (!file) throw new Error('No file to upload');

    const cloudUrl = import.meta.env.VITE_CLOUDINARY_URL;

    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET);

    try {

        const response = await fetch(cloudUrl, {
            method: 'POST',
            body: formData
        });

        if (!response.ok) throw new Error('File upload failed');

        const data = await response.json();
        return data.secure_url;
    } catch (error) {
        console.error(error);
        throw new Error(error.message);
    }
}