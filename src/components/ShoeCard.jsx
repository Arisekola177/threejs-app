const ShoeCard = ({ imgURL, changeBigShoeImage, bigShoeImg }) => {
  const handleClick = () => {
    if (bigShoeImg !== imgURL.bigShoe) {
      changeBigShoeImage(imgURL.bigShoe);
    }
  };

  return (
    <div
      className={`border-2  ${
        bigShoeImg === imgURL.bigShoe
          ? "border-coral-red"
          : "border-transparent"
      } cursor-pointer max-sm:flex-1 `}
      onClick={handleClick}
    >
      <div className='bg-card p-4 bg-center bg-cover '>
        <img
          src={imgURL.thumbnail}
          alt='shoe colletion'
          width={80}
          height={76}
          className='object-contain'
        />
      </div>
    </div>
  );
};

export default ShoeCard;