import Image from "next/image";
import Link from "next/link";

const ImageBlock = ({ imgUrl, ...rest }) => {
  return (
    <Link href="/" className="d-block">      
      <Image
      src={`/${imgUrl}`} 
      alt="" 
      title="" 
      className="w-100"
      width={250}
      height={250}
      />
      <span className="icon-social text-white">
        <SocialMediaIcon {...rest} />
      </span>
    </Link>
  );
};

const SocialMediaIcon = ({ socialMediaType }) => {
  switch (socialMediaType) {
    case "fb":
      return <i className="la la-facebook"></i>;
    case "twitter":
      return <i className="la la-twitter"></i>;
    default:
      return <i className="la la-instagram"></i>;
  }
};

const ImageGrid = ({ image}) => {
  return (
    <>
      {image.map((item, key) => (
        <div className="col-lg-6 col-md-12 col-12 p-0 social-wdget" key={key}>
          <ImageBlock {...item } />
        </div>
      ))}
    </>
  );
};

const _getGridElement = (images, sequence) => {
  if (images.length === 2) {
    return (
      <div className="row" key={sequence}>
        <ImageGrid image={images}  />
      </div>
    );
  } else {
    return <ImageGrid image={images}  key={sequence} />;
  }
};

const ImageGridLayout = ({ images }) => {
  return (
    <>
     { _getGridElement(images[2], 3) }
      <div className="col-lg-6 col-md-12 col-12">
        { [1, 2].map((sequence) => _getGridElement(images[sequence - 1], sequence))}
      </div>
    </>
  );
};

const SocialGallery = ({ socialMediaImages }) => {
  return (
    <div className="item">
      <div className="post-slide item-widget col-12">
        <div className="row m-0">
          <ImageGridLayout images={socialMediaImages} />
        </div>
      </div>
    </div>
  );
};

export default SocialGallery;
