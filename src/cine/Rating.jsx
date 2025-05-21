import star from "../assets/star.svg";

export default function Rating({ value }) {
  const stars = Array(value).fill(star);
  return (
    <>
      {stars.map((star, i) => (
        <img key={i} src={star} alt="star" width={14} height={14} />
      ))}
    </>
  );
}
