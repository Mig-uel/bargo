export const FirstCol = ({
  image,
  title,
}: {
  image: string
  title: string
}) => {
  return (
    <img
      src={image}
      alt={title}
      className='h-24 w-24 rounded-lg sm:h-32 sm:w-32 object-cover'
    />
  )
}

export const SecondCol = () => {
  return <h4>Second Col</h4>
}

export const ThirdCol = () => {
  return <h4>Third Col</h4>
}

export const FourthCol = () => {
  return <h4>Fourth Col</h4>
}
