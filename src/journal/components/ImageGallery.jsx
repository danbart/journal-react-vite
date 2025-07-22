import { ImageList, ImageListItem } from '@mui/material';

export const ImageGallery = ({ imageUrls }) => {
    return (
        <ImageList sx={{ width: '100%', height: 500 }} variant="woven" cols={4} gap={8}>
            {imageUrls.map((item) => (
                <ImageListItem key={item}>
                    <img
                        srcSet={`${item}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                        src={`${item}?w=164&h=164&fit=crop&auto=format`}
                        alt='Image Gallery'
                        loading="lazy"
                    />
                </ImageListItem>
            ))}
        </ImageList>
    );
}
