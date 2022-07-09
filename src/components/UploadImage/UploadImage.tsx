import { ChangeEvent, FC } from "react";
import './UploadImage.scss'

import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface UploadImageProps {
  className?: string
  setValueImage: (value: string) => void;
  valueImage: string;
  name?: string;
}

const UploadImage: FC<UploadImageProps> = (props) => {
  const { className, setValueImage, valueImage, name } = props;

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setValueImage(URL.createObjectURL(event.target.files[0]));
    }
  }

  return (
    <div className={`file border ${className}`}>
      <input
        className={`file__input`}
        id='image-file'
        name={name ? name : `image-file`}
        type="file"
        onChange={handleChange} />
      <label 
        className="file__label"
        htmlFor="image-file" >
          <FontAwesomeIcon className="file__plus" icon={faPlus} />
          <span className="ft-body-l">Upload image</span>
      </label>
      <div className="file__preview img">
        { valueImage !== '' ? <img src={valueImage} alt="" /> : null }
      </div>
    </div>
  )
}

export default UploadImage