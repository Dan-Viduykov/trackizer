import { ChangeEvent, FC, ReactElement } from "react";
import './UploadImage.scss'

interface UploadImageProps {
  className?: string
  setValueImage: (value: string) => void;
  valueImage: string;
  name?: string;
  children?: ReactElement | ReactElement[];
}

const UploadImage: FC<UploadImageProps> = (props) => {
  const { className, setValueImage, valueImage, name, children } = props;

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setValueImage(URL.createObjectURL(event.target.files[0]));
    }
  }

  return (
    <div className={`${className} file border`}>
      <input
        className={`file__input`}
        id='image-file'
        name={name ? name : `image-file`}
        type="file"
        onChange={handleChange} />
      <label 
        className="file__label"
        htmlFor="image-file" >
          {children}
      </label>
      <div className="file__preview img">
        { valueImage !== '' ? <img src={valueImage} alt="" /> : null }
      </div>
    </div>
  )
}

export default UploadImage